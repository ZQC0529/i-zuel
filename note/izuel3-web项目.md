# tomcat

- tomcat的虚拟项目名

  ![image-20201115142217613](C:\Users\cc\AppData\Roaming\Typora\typora-user-images\image-20201115142217613.png)

**最终访问的URL**= 域名: port / 虚拟项目名/ servlet地址



- IDEA部署到tomcat的方式，tomcat访问的其实是artifacts这里的内容

![image-20201115143052249](C:\Users\cc\AppData\Roaming\Typora\typora-user-images\image-20201115143052249.png)



- Action中的相对路径与绝对路径

![image-20201115144259015](C:\Users\cc\AppData\Roaming\Typora\typora-user-images\image-20201115144259015.png)

在写action的时候，如果以斜杠开头，tomcat会把它识别为绝对路径，即如果这里写**"/MyLogin"** ，tomcat访问的就是
localhost:8080/MyLogin

但是如果不以斜杠开头，tomcat就会识别成相对路径，即如果这里写的是 **MyLogin** , tomcat访问的就是
localhost:8080/项目地址/MyLogin 