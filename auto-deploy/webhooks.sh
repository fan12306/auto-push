#!/bin/bash
CODE_PATH=$1 #代码存放地址
WEB_PATH=$2 #项目发布地址
BAK_PATH=$3 #项目备份地址
WEB_NAME=$4 #项目名称
DIST_NAME=$5 #打包后的名称
echo "开始部署"
echo "-----------------"
cd $CODE_PATH
echo "开始pull"
git pull
echo "pull完成 开始install"
npm install
echo "install完成 开始build"
npm run build
echo "build完成 开始发布"
echo "------------------"
echo "重命名文件"
mv ${DIST_NAME} $WEB_NAME
echo "备份上一个版本"
cd $WEB_PATH
time=$(date "+%Y-%m-%d+%H:%M:%S")
mv $WEB_NAME $time
mv $time $BAK_PATH
echo "------------------"
echo "发布新版本"
cd $CODE_PATH
mv $WEB_NAME $WEB_PATH
echo "新版本发布成功"


