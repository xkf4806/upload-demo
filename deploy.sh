#!/usr/bin/env bash
#编译+部署upload-demo

#需要配置如下参数
# 项目路径，在Execute Shell中配置项目路径，pwd即可获得该项目路径
# export PROJ_PATH=这个jenkins任务在部署机器上的路径

# 输入你的环境上tomcat的全路径
# TOMCAT_APP_PATH=tomcat在部署机器上的路径

### base函数
killTomcat() {
    pid=`ps -ef | grep tomcat | grep java | awk '{print $2}'`
    echo "tomcat id list: $pid"
    if ["$pid" = ""]
    then
        echo "no tomcat pid alive"
    else
        kill -9 $pid
    fi
}

cd $PROJ_PATH/upload-demo
mvn clean package -DskipTests

# 停止tomcat
killTomcat

# 删除原有工程
rm -rf $TOMCAT_APP_PATH/webapps/ROOT
rm -rf $TOMCAT_APP_PATH/webapps/ROOT.war
rm -rf $TOMCAT_APP_PATH/webapps/upload-demo.war

# 复制新的工程
cp $PROJ_PATH/upload-demo/target/upload-demo.war $TOMCAT_APP_PATH/webapps

# 重新命名
cd $TOMCAT_APP_PATH/webapps
mv upload-demo.war ROOT.war

# 启动tomcat
cd $TOMCAT_APP_PATH
sh bin/startup.sh

