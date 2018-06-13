package com.gopay.boot.uploaddemo.service.impl;

import com.gopay.boot.uploaddemo.pojo.UploadPicVO;
import com.gopay.boot.uploaddemo.properties.SftpProperties;
import com.gopay.boot.uploaddemo.service.UploadService;
import com.gopay.boot.uploaddemo.utils.IDUtils;
import com.gopay.boot.uploaddemo.utils.SftpChannel;
import com.gopay.boot.uploaddemo.utils.SftpUtil;
import com.jcraft.jsch.ChannelSftp;
import org.joda.time.DateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Base64Utils;

import java.io.ByteArrayInputStream;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

/**
 * @author xj.x@hnair.com
 * @date 2018-06-13 18:09
 **/
@Service(value = "uploadService")
public class UploadServiceImpl implements UploadService {
    /** logger */
    private static final Logger logger = LoggerFactory.getLogger(UploadServiceImpl.class);

    private static final String _JPEG = "data:image/jpeg;";
    private static final String _ICON = "data:image/x-icon;";
    private static final String _PNG = "data:image/png;";
    private static final String _BMP = "data:image/bmp;";

    @Autowired
    private SftpProperties sftpProperties;

    @Override
    public Map uploadImg(UploadPicVO[] uploadPicVOS) {
        Map<String, String> map = new HashMap<>(16);
        ChannelSftp chSftp = null;
        try {
            checkImgVos(uploadPicVOS);
            try {
                Class cl = ChannelSftp.class;
                Field f =cl.getDeclaredField("server_version");
                f.setAccessible(true);
                logger.info("连接sftp服务器开始");
                chSftp = SftpChannel.getChannel(sftpProperties.getHost(),sftpProperties.getPort(),sftpProperties.getUsername(),
                        sftpProperties.getPassword(),sftpProperties.getTimeout());
                f.set(chSftp, 2);
                chSftp.setFilenameEncoding("GBK");
                logger.info("连接sftp服务器成功");
            } catch (Exception e) {
                logger.error("sftp服务器连接失败",e);
                throw e;
            }

            DateTime dateTime = new DateTime();
            String filePath = dateTime.toString("/yyyy/MM/dd/");
            // 循环上传文件
            for (UploadPicVO vo : uploadPicVOS) {
                String base64 = vo.getBase64();
                String [] d = base64.split("base64,");
                String suffix = getImgSuffix(vo);
                chSftp.cd(sftpProperties.getHomePath());
                String tempFileName = IDUtils.genImageName() + suffix;
                //因为BASE64Decoder的jar问题，此处使用spring框架提供的工具包
                byte[] bs = Base64Utils.decodeFromString(d[1]);
                SftpUtil.upload(sftpProperties.getBasePath() + filePath, new ByteArrayInputStream(bs),chSftp, tempFileName);
                map.put(vo.getField(), sftpProperties.getServerUrl() + filePath + tempFileName);
                map.put("code", "1");
            }
        } catch (Exception e) {
            map.put("code", "0");
            logger.error("上传文件失败，{}", e.getMessage());
        } finally {
            if (chSftp != null) {
                chSftp.quit();
            }
            try {
                SftpChannel.closeChannel();
            } catch (Exception e) {
                logger.error("关闭sftp通道发生异常，{}", e.getMessage());
            }
        }
        return map;
    }

    private void checkImgVos(UploadPicVO[] uploadPicVOS) throws Exception {
        for (UploadPicVO vo : uploadPicVOS) {
            String base64 = vo.getBase64();
            if(base64 == null || "".equals(base64)){
                throw new Exception("上传失败，上传图片数据为空");
            }else{
                String [] d = base64.split("base64,");
                if(d.length != 2){
                    throw new Exception("上传失败，数据不合法");
                }
            }
            Integer size = imageSize(base64);
            if (size > 2 * 1024 * 1024) {
                throw new Exception("文件大小不能超过2M");
            }
        }
    }

    private String getImgSuffix(UploadPicVO vo) throws Exception {
        String base64 = vo.getBase64();
        String [] d = base64.split("base64,");
        String dataPrix = d[0];
        String suffix;
        if(_JPEG.equalsIgnoreCase(dataPrix)){
            suffix = ".jpg";
        } else if(_BMP.equalsIgnoreCase(dataPrix)){
            suffix = ".bmp";
        } else if(_PNG.equalsIgnoreCase(dataPrix)){
            suffix = ".png";
        }else{
            throw new Exception("上传图片格式不合法");
        }
        return suffix;
    }

    /**
     *通过图片base64流判断图片等于多少字节
     *image 图片流
     */
    public static Integer imageSize(String image){
        String str=image.substring(22); // 1.需要计算文件流大小，首先把头部的data:image/png;base64,（注意有逗号）去掉。
        Integer equalIndex= str.indexOf("=");//2.找到等号，把等号也去掉
        if(str.indexOf("=")>0) {
            str=str.substring(0, equalIndex);
        }
        Integer strLength=str.length();//3.原来的字符流大小，单位为字节
        Integer size=strLength-(strLength/8)*2;//4.计算后得到的文件流大小，单位为字节
        return size;
    }
}
