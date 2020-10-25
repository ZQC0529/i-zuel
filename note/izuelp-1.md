**校验一定是两道**，前端+服务端，可以通过很多方式跳过前端的校验。（查）

因为有的请求可以绕过前端去请求服务端，（了解postman）

### 数据库规则

- 表名、字段名全部小写
      user_score（不要用驼峰）

- <font color = "red"> **每张表里面至少要求4个字段（必须）**</font>

  - **id**（bigInt、20、无符号）（主键、自增，从1开始自动增长，查询、插入上面效率最高，一条记录的id，是第几条记录）

    

  - **is_deleted**标志是否删除（tinyint (2) ）    0表示没有删除，1表示已删除 。 **因此对数据的删除全部都是逻辑删除，不是物理删除，显示出来是已删除，但要留底，寻根。**

    这里不用boolean的原因是java与db的数据类型转换存在一定问题

  

  - **created_time**（Timestamp）

    Timestamp有一个初始值，当前时间段current_stamp

  

  - **modified_time**（Timestamp）

    可以勾选实时更新，当表修改时可以实时修改	

    

  - 可选

    created_by

    modified_by

  

  

  ### mysql的知识点

-  检索的时候，在有很多要求时，把id放在最左边，因为检索条件是从左到右开始判断的，这样查找效率会高。

- 尽量不要用like，用position进行模糊匹配**（看看原因）**

- 不要用外键、存储过程（外键会造成锁表），这些逻辑完全可以在服务端完成，不需要通过数据库来约束。存储过程的移植和更新比较复杂。



- 在select的时候不要select *，只要select id即可，当数据很多的时候select * 会很慢，效率很低。
- 当有很多种用户名（如用用户名登录，用邮箱登录，用身份证号登录）、但是只有一种密码的时候，SQL校验语句，可以是select id from user where (username = ? or phone_num = ?) and password = ?

**前端设计规则：**

- 对于html文件的命名全部都用小写字母

- 命名中不要出现中文

- 对于id=__ name=____的命名用驼峰命名

- 对于class命名直接用斜杠即可

- 能在css中完成的设计不要写在style中

- 类名、变量名要用驼峰。

  

**doget和dopost区别：**

- doget() 和 dopost() 分别对应 http 协议中的 GET 和 POST 方法
- GET 和 post 方法有本质的区别；GET 只有一个流，参数附加到 url 后，大小个数都有严格的限制，且只能是字符串；POST 的参数不通过 url 而是通过其他流的传递参数，所以可以很大，也可以传递二进制数据，例如上传文件。

**post和get的区别：**

- post的参数是放在bodyheader里面，是隐藏起来的，因此更安全（但是network里面能看到参数）
- get的参数就放在url上面，不安全
- post比get更够上传的数据量更大
- POST 比 GET 安全；由Web浏览器或通过HTML、JSP直接访问Servlet的URL时，一般用GET调用。GET 调用会把传递给Servlet的参数在 URL 里显示出来，这样对系统安全方面存在问题；而 POST 请求则通过其他流传递参数，不会在 URL 中显示，更安全；例如用户登录时，如果是用 GET 调用会把用户账号密码都显示在 URL 中，用 POST 调用则不会显示。



### 数据库连接池

数据库getconnection的时候不需要每次进入页面都重新连一次数据库，效率会很低。
每次只要首先判断之前的conn是否关闭，如果没关闭就使用原来的conn，否则才重新创建。





---

# <font color="red">需要了解的内容</font>

**Nginx：**
反向代理

**java：**

- 了解一下java8的特性，localdatetime、lambda函数

- 文件流（try catch） 放到try的括号里面会自动关闭
          java7文件流自动关闭

- **重定向sendRedirect()和请求转发forward（）区别：**

  重定向后浏览器的url会发生变化，资源带不过去？

  请求转发只会在网页内部进行跳转，资源可以携带过去，同时url不会发生变化。

**javascript：es6：**

- 变量的命名：let（可变的变量）、const（常量）
- 了解里面的map、filter这些函数
- 对于遍历，了解以下for循环遍历
  for_of能够拿到单b一的对象
- es6里面可以使用===，三个等号，绝对等于。 ==两个等号可能存在数字和字符也相匹配，字符1与数字1也相等。（因为js是弱类型，在两个等号的判断时会进行自动类型转换）
- 在Js里面表示字符串 **要用单引号**，不要用双引号。
  

### 四种数据结构的区别

ArrayList:基于数组，读取更方便一些
LinkedList:基于队列来的，插入的时候很方便，读取的时候是按照迭代性，比较困难
HashMap:用哈希表去存的，存的时候没有顺序
TreeMap:用Tree去存，寸的时候是有顺序的的



---

# <font color="red">需要完成的作业</font>

**前端作业：**
2、前端用vue去写，直接引vue.js进来
https://www.antdv.com/docs/vue/introduce-cn/
3、学习axios的用法（学有余力）怎么发post请求
4、学会用postman的使用方法（前端服务端都要懂）、可以做一个模拟请求。
5、把注册界面用vue去改写，用npm模块去做。
6、引入组件库 https://www.antdv.com/docs/vue/introduce-cn/

服务端：
1、用postman。
2、看jfinal，jfinalconfig全部要了解
3、controller
4、AOP
（学习jfinal前五章）

jfinal filter
handler处理器：判断控制请求，条件判断之后可以进行分层，不满足条件的就不允许进入actionhandler层
actionhandler
controller
类比
判断条件是否能进主卧
判断条件是否能睡床
然后就可以操作controller去调用model，service，把调用的结果render返回给view
interceptor拦截器可以任意拼凑，也可以随时增删。
切面即插即把，可以看到调用前和调用后的差别。不强行介入原来的代码，不改变原来的代码，但是可以看到运行这段代码之前和调用之后的区别。






