package com.gopay.boot.uploaddemo.service;

import com.gopay.boot.uploaddemo.pojo.UploadPicVO;

import java.util.Map;

/**
 * @author xj.x@hnair.com
 * @date 2018-06-13 18:08
 **/
public interface UploadService {
    Map uploadImg(UploadPicVO[] uploadPicVOS);
}
