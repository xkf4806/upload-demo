package com.gopay.boot.uploaddemo.pojo;

import lombok.Data;

import java.io.Serializable;

/**
 * @author xinj.xue
 * @description：
 * @date 2018-06-20 23:17
 **/
@Data
public class User implements Serializable {
    private String name;
    private String imgUrl;

}
