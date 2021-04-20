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


