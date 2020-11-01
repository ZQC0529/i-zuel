### 关注的比赛

- 软件杯
- 服务外包创新创业
- 计算机设计大赛
- 挑战杯

# vue

- 插槽,slot：当extra不仅仅是文本的时候，需要添加icon时。

- 鼠标一离开，就用js去和服务端交互。用ajax，onblur。

- setTimeOut的三种写法

  ```javascript
  setTimeOut()   //隔一段时间执行一次
  setInterval()  //隔一段时间重复执行
  ```


# Jfinal

- 判断字符是否为空时使用：StrKit.isBlank  /  StrKit.notBlank
- 静态方法和普通方法的区别：
  - 静态方法只能访问类中的静态成员。
  - 静态方法不会被JVM内置的垃圾回收机制回收
  - 静态方法能且只能够通过类名直接调用
- 不要用user.dao做事，应该用user.dao.find返回回来的对象去做事
- 所有 sql 与业务逻辑写在 Service 中，不要放在 Model 中，更不要放在 Controller 中，养成好习惯，有利于大型项目的开发与维护



<font color="yellow" size="5">需要做的事</font>

 看vue，ant design

- ant Design
  - form model
  - 表单验证 （validator） rules，前面带冒号和不带冒号的区别：
    - 1、传json的时候，带冒号代表
    - 2、数据类型转换，带冒号的数字不会被识别为文本类型
    - 3、带冒号会识别为变量
  - validator：默认的校验规则无法满足需求，可以在validator中写ajax，判断用户名是否被占用等
  - scoped：让某一页面的样式不影响到其他页面
  - less：动态css语言



## JFINAL

看 getBean和getMod

包装类和基本类。封箱和装箱

静态方法和普通方法的区别：



### 二维码登录

QRcode 是携带信息的，唯一且不同。发请求的时候当前请求会发生变化。

第一次请求时，会给一个携带唯一==uuid== 的二维码。ajax每秒拿着这个uuid（默认为null）去请求服务端。服务端每秒钟拿uuid去 检测数据库，判断当前是否有用户登录。数据库的每条记录都会有一条uuid。



JFINAL中可以判断





- [ ] 将图片转为BASE64
- [ ] BufferReader
- [ ] PUI
- [ ] JAVA中的final