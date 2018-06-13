package com.gopay.boot.uploaddemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author xj.x@hnair.com
 * @date 2018-06-12 11:09
 **/
@Controller
public class PageController {
    @GetMapping(value = {"/","/index"})
    public String index() {
        return "system/index";
    }

    @GetMapping(value = "/redirect")
    public String redirect() {
        return "redirect/redirect";
    }

    /**
     *视图
     * @param model
     * @return
     */
    @GetMapping("/model")
    public String page3(Model model){
        model.addAttribute("name","seawater");
        return "hello";
    }

    @GetMapping(value = "/cert")
    public String certManage() {
        return "cert/cert_manage";
    }
}
