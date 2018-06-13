package com.gopay.boot.uploaddemo.controller;

import com.gopay.boot.uploaddemo.pojo.UploadPicVO;
import com.gopay.boot.uploaddemo.service.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * @author xj.x@hnair.com
 * @date 2018-06-13 11:06
 **/
@Controller
public class UploadController {

    @Autowired
    private UploadService uploadService;

    @GetMapping(value = "/img")
    public String toImg() {
        return "cert/img";
    }

    @PostMapping(value = "/img/submit")
    @ResponseBody
    public Map submit(@RequestBody UploadPicVO[] uploadPicVOS) {
        Map map = uploadService.uploadImg(uploadPicVOS);
        return map;
    }
}
