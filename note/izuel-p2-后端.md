

### IP地址可以对应多个域名，但是一个域名只能对应一个IP地址

groupID是反着写的 比如有一个域名是： izuel.zuel.edu.cn，那么





<maven.compiler.target>标签要改成1.8   不然

<name>改成自己的项目名称</name>

<packaging>war</packaging>  这个是项目的打包形式



MVC ： Model，view，controller



view：显示

Controller：接受请求，用JavaBean调用DAO，操作Model。操作返回给Controller再通过view和用户交互。所有的控制都在C这一层



JavaBean： 通过servlet，

DAO：对数据库的操作，也就是对model的操作。

JavaBean+DAO = Model



JSP的本质是Servlet

后来觉得JSP太乱了，就推出了JavaBean，JavaBean



ConfigConstant：





每个Controller都对应着一个功能模块，可以在Controller下面写许多方法，对应着该功能模块的子模块。可以通过路由统一配置

---

Handler：可以有多层，最后一层开始处理的叫ActionHandler，

---

<font color="red" size="5">需要了解的内容</font>

MVC , MVP , JSP,JavaBean  发展过程。

MVP: view主动发起请求，present 调用Model，返回数据给View。 View内部逻辑去解析返回的数据是否正确，View再确定是否呈现新的界面与用户交互。

MVP也叫MVVC， 第一个V用于渲染，第二个V用于发起请求，Controller进行控制，即P=VC。

MVVC = Model - View - ViewModel （数据双向绑定）- Controller 。



### Controller， Route