#!/bin/bash

CODE_PATH=$1
WEB_PATH=$2
BAK_PATH=$3
WEB_NAME=$4
REMOTE_ADDRESS=$5
DIST_NAME=$6
PROJECT_PATH=$7


echo '======开始执行shell======'
cd $CODE_PATH
echo '======初始化git======'
git init
echo '======添加到远程仓库======'
git remote add origin $REMOTE_ADDRESS
echo '======开始部署======'
echo '======开始pull======'
git pull
git checkout main
echo '======pull 完成======'
npm install
echo '======install完成 开始build======'
npm run build
echo '======build完成 开始备份======'
echo '======重命名文件======'
mv $DIST_NAME $WEB_NAME
echo '======发布最新版本======'
cd $CODE_PATH
mv $WEB_NAME $WEB_PATH
echo '======发布版本成功======'


worker_processes 4:  #表示nginx的进程数，根据CPU的核数来定义，起到优化的作用。通过cat  /proc/cpuinfo来查看核数
events {
    worker_connections  1024;    #连接数
}
#http区域块，定义nginx的核心web功能
http {
    include(关键字)       mime.types(可修改的值);
    default_type  application/octet-stream;

    #定义日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    #开启访问日志功能的参数
    access_log  logs/access.log  main;
    sendfile        on;
    #tcp_nopush     on;
    #keepalive_timeout  0;
    #保持长连接
    keepalive_timeout  65;
    #支持图片 gif等等压缩，减少网络带宽
    gzip  on;

    #这个server标签 控制着nginx的虚拟主机(web站点)
    server {
        # 定义nginx的入口端口是80端口
        listen       80;
        # 填写域名，没有域名就写ip地址
        server_name  www.s15rihan.com;
        # 定义编码
        charset utf-8;
        # location定义网页的访问url
        #就代表 用户的请求 是  192.168.13.79/
        location / {
            #root参数定义网页根目录
            root   html;
            #定义网页的首页文件，的名字的
            index  index.html index.htm;
        }

        location ^~ /api/ {
            proxy_pass http:xxxxx/
}        }


        #定义错误页面，客户端的错误，就会返回40x系列错误码
        error_page  404  403 401 400            /404.html;
        #500系列错误代表后端代码出错
        error_page   500 502 503 504  /50x.html;
    }