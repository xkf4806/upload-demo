#!/usr/bin/env bash
#编译+部署upload-demo

#需要配置如下参数
# 项目路径，在Execute Shell中配置项目路径，pwd即可获得该项目路径
# export PROJ_PATH=这个jenkins任务在部署机器上的路径

# 输入你的环境上tomcat的全路径
# TOMCAT_APP_PATH=tomcat在部署机器上的路径


cd $PROJ_PATH/upload-demo
mvn clean package -DskipTests

# 启动应用
mkdir logs

cd target

# 后台启动应用，并将日志输出到指定文件
nohup java -jar upload-demo-0.0.1-SNAPSHOT.jar > $PROJ_PATH/upload-demo/logs/upload-demo.log &
