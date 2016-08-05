---
title: centos 安装 nginx
categories: 其他
categoriesAlias: others
thumbnail: 'https://s3.amazonaws.com/ptsteadman-images/nginx-proxy.png'
lede: This text will appear by the thumbnail in the blog page.
author: Wenbin
date: 2016-04-07 13:44:52
timestamp: 2016-04-07 13:44:52
updated:
tags:
keywords:
description:
---

第一步，在/etc/yum.repos.d/目录下创建一个源配置文件nginx.repo：

```
cd /etc/yum.repos.d/
vim nginx.repo
```
填写如下内容：
```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```
保存，则会产生一个/etc/yum.repos.d/nginx.repo文件。

下面直接执行如下指令即可自动安装好Nginx：
```
yum install nginx -y
```
安装完成，下面直接就可以启动Nginx了：
```
/etc/init.d/nginx start
```
现在Nginx已经启动了，直接访问服务器就能看到Nginx欢迎页面了的。

如果还无法访问，则需配置一下Linux防火墙。
```
iptables -I INPUT 5 -i eth0 -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
service iptables save
service iptables restart
```
Nginx的命令以及配置文件位置：

```
/etc/init.d/nginx start # 启动Nginx服务
/etc/init.d/nginx stop # 停止Nginx服务
/etc/nginx/nginx.conf # Nginx配置文件位置
```
至此，Nginx已经全部配置安装完成。
