package com.gopay.boot.uploaddemo.utils;


import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.SftpException;
import org.apache.log4j.Logger;
import org.springframework.util.StringUtils;

import java.io.*;
import java.util.Vector;

/**
 * sftp工具类
 *
 * @author dong-wang5@hnari.com
 * @SftpUtil.java
 * @2016年7月15日 上午11:04:24  www.gopay.com.cn Inc.All rights reserved.
 */
public class SftpUtil {

    private static final Logger log = Logger.getLogger(SftpChannel.class.getName());

    /**
     * 上传文件
     *
     * @param directory  上传的目录，支持多层目录
     * @param uploadFile 要上传的文件
     * @param sftp
     */
    public static void upload(String directory, String uploadFile, ChannelSftp sftp) {
        String[] split = directory.split("/");
        for (String s : split) {
            try {
                sftp.cd(s);
            } catch (SftpException sException) {
                if (ChannelSftp.SSH_FX_NO_SUCH_FILE == sException.id) {
                    try {
                        sftp.mkdir(s);
                        sftp.cd(s);
                    } catch (SftpException e) {
                        log.error("=====create folder error>" + e.getMessage(), e);
                    }
                }
            }
        }
        FileInputStream is = null;
        try {
            log.info("=====Current path is>" + sftp.pwd());
            File file = new File(uploadFile);
            is = new FileInputStream(file);
            sftp.put(is, file.getName());
            log.info("=====sftp upload success>>" + file.getName());
        } catch (Exception e) {
            log.error("=====sftp upload error>" + e.getMessage(), e);
        } finally {
            if (is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                    log.error("FileInputStream close error>>" + e.getMessage(), e);
                }
            }
        }
    }

    /**
     * 上传文件  add by jianghp 20170710
     *
     * @param directory
     * @param uploadFile
     * @param sftp
     * @param newName
     */
    public static void upload(String directory, String uploadFile, ChannelSftp sftp, String newName) {
        String[] split = directory.split("/");
        for (String s : split) {
            try {
                sftp.cd(s);
            } catch (SftpException sException) {
                if (ChannelSftp.SSH_FX_NO_SUCH_FILE == sException.id) {
                    try {
                        sftp.mkdir(s);
                        sftp.cd(s);
                    } catch (SftpException e) {
                        log.error("=====create folder error>" + e.getMessage(), e);
                    }
                }
            }
        }
        FileInputStream is = null;
        try {
            log.info("=====Current path is>" + sftp.pwd() + ";NewName=" + newName);
            File file = new File(uploadFile);
            is = new FileInputStream(file);
            sftp.put(is, newName);
            log.info("=====sftp upload success>>" + newName);
        } catch (Exception e) {
            log.error("=====sftp upload error>" + e.getMessage(), e);
        } finally {
            if (is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                    log.error("FileInputStream close error>>" + e.getMessage(), e);
                }
            }
        }

    }

    /**
     * 上传文件  add by jianghp 20170710
     *
     * @param ftpPath
     * @param inputStream 上传的文件字节流
     * @param sftp
     * @param newName
     */
    public static void upload(String ftpPath, InputStream inputStream, ChannelSftp sftp, String newName) {
        String[] split = ftpPath.split("/");
        for (String s : split) {
            if (StringUtils.isEmpty(s)) {
                continue;
            }
            try {
                sftp.cd(s);
            } catch (SftpException sException) {
                if (ChannelSftp.SSH_FX_NO_SUCH_FILE == sException.id) {
                    try {
                        sftp.mkdir(s);
                        sftp.cd(s);
                    } catch (SftpException e) {
                        log.error("=====create folder error>" + e.getMessage(), e);
                    }
                }
            }
        }

        try {
            log.info("=====Current path is>" + sftp.pwd() + ";NewName=" + newName);
            sftp.put(inputStream, newName);
            log.info("=====sftp upload success>>" + newName);
        } catch (Exception e) {
            log.error("=====sftp upload error>" + e.getMessage(), e);
        } finally {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException e) {
                    log.error("FileInputStream close error>>" + e.getMessage(), e);
                }
            }
        }

    }

    /**
     * 下载文件
     *
     * @param directory    下载目录
     * @param downloadFile 下载的文件
     * @param saveFile     存在本地的路径
     * @param sftp
     */
    public static void download(String directory, String downloadFile, String saveFile, ChannelSftp sftp) {
        try {
            sftp.cd(directory);
            File file = new File(saveFile);
            sftp.get(downloadFile, new FileOutputStream(file));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 删除文件
     *
     * @param directory  要删除文件所在目录
     * @param deleteFile 要删除的文件
     * @param sftp
     */
    public static void delete(String directory, String deleteFile, ChannelSftp sftp) {
        try {
            sftp.cd(directory);
            sftp.rm(deleteFile);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 列出目录下的文件
     *
     * @param directory 要列出的目录
     * @param sftp
     * @return
     * @throws SftpException
     */
    @SuppressWarnings("rawtypes")
    public static Vector listFiles(String directory, ChannelSftp sftp)
            throws SftpException {
        return sftp.ls(directory);
    }

    public static void main(String[] args) {
        String src = "D:\\workbench\\gopay\\项目文档\\08_基金\\中信2016\\03_设计\\技术部设计\\ftp根目录\\supervise-allocation\\rtfund\\20151016\\rtfund_allocation_20151016.txt.zip"; // 本地文件名
        ChannelSftp chSftp;
        try {
            chSftp = SftpChannel.getChannel("ip", 22, "name", "pwd", 600000);
            SftpUtil.upload("rece", src, chSftp);
//			test.download("rece", "rtfund_allocation_20151016.txt.zip", "D:\\rtfund_allocation_20151016.txt.zip", chSftp);
//			chSftp.put(src, dst, ChannelSftp.OVERWRITE); // 代码段2
            chSftp.quit();
            SftpChannel.closeChannel();
        } catch (JSchException e) {
            e.printStackTrace();
        } catch (SftpException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
