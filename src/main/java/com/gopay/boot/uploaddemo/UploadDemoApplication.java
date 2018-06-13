package com.gopay.boot.uploaddemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;

import javax.servlet.MultipartConfigElement;

@SpringBootApplication
@EnableConfigurationProperties()
public class UploadDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(UploadDemoApplication.class, args);
	}

	@Bean
	public MultipartConfigElement multipartConfigElement() {
		MultipartConfigFactory factory = new MultipartConfigFactory();
		//// 设置文件大小限制 ,超了，页面会抛出异常信息，这时候就需要进行异常信息的处理了;
		factory.setMaxFileSize("2MB"); //KB,MB
		/// 设置总上传数据总大小
		factory.setMaxRequestSize("10MB");
		//Sets the directory location where files will be stored.
		//factory.setLocation("路径地址");
		return factory.createMultipartConfig();
	}
}
