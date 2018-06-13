package com.gopay.boot.uploaddemo.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

/**
 * @author xj.x@hnair.com
 * @date 2018-06-13 11:14
 **/
@Configuration
@PropertySource(value = "classpath:properties/sftp.properties")
@Data
@Component
public class SftpProperties {
    @Value(value = "${SFTP_HOST}")
    private String host;
    @Value(value = "${SFTP_PORT}")
    private Integer port;
    @Value(value = "${SFTP_USERNAME}")
    private String username;
    @Value(value = "${SFTP_PASSWORD}")
    private String password;
    @Value(value = "${SFTP_HOMEPATH}")
    private String homePath;
    @Value(value = "${SFTP_BASEPATH}")
    private String basePath;
    @Value(value = "${SFTP_TIMEOUT}")
    private Integer timeout;
    @Value(value = "${SFTP_SERVER_URL}")
    private String serverUrl;
}
