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





# SQL

- prepareStatement.excuteQuery（）和prepareStatement.excuteUpdate（） ，括号中如果不携带sql说明这是prepareStatement 重写的方法，可以携带占位符。

  executeUpdate() 中执行 SQL 语句需要在**创建 PerparedStatement 时**通过 Connection 的 prepareStatement(String sql) 方法中写出，因为 **PerparedStatement 中的 SQL 语句数据库需要进行预编译和缓存**，因此要在创建 PerparedStatement 对象时给出 SQL 语句

- 如果prepareStatement.excuteQuery（sql）携带了sql参数，说明执行的是父类Statement的方法，其中sql不能含有"？"占位符。参数中的 SQL 语句只是提交给数据库去执行，**并不需要预编译**



# 作业

登录 ->成功后跳转到主页

注册

修改成员信息