package com.gopay.boot.uploaddemo.controller;

import com.gopay.boot.uploaddemo.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

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

    @GetMapping("/my")
    public ModelAndView test(){
        ModelAndView mv=new ModelAndView();
        User user = new User();
        mv.setViewName("modelandview");
        mv.addObject("name", "liyafei");
        user.setName("wangwu");
        user.setImgUrl("https://image.server.com/images/aaa.png");
        mv.addObject("user", user);

        //设置返回的数据为json类型，也可以不设置，返回对象
        //mv.setView(new MappingJackson2JsonView());
        return mv;
    }

    @GetMapping("/cert5")
    public ModelAndView cert5(){
        ModelAndView mv=new ModelAndView();
        User user = new User();
        mv.setViewName("cert5");
        mv.addObject("name", "liyafei");
        user.setName("wangwu");
        user.setImgUrl("https://image.server.com/images/aaa.png");
        mv.addObject("user", user);

        //设置返回的数据为json类型，也可以不设置，返回对象
        //mv.setView(new MappingJackson2JsonView());
        return mv;
    }
}
