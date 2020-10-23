# 前端

**F12 开发者工具**

element： 一个网站的DOMtree，可以查看网页结构。后期用vue通过很多转义

Console：调试js

Source： 可以看到网站中的所有资源。在Source里面可以加断点，调试JS

Network：所有的网络请求

- XHR：只发送了ajax，axios，fash请求的。

所有的Post请求都携带着form表单，在servlet中可以使用 requests.getParameter（"tagName"）来接收post请求表单中的内容 。

服务端开发要向前端提供一个接口，服务端可以返回一个code给前端，前端接收到 json数据，拿出它的code，还有msg。code提前约定

服务端返回的数据json中

- msg：服务端应该根据不同的请求类型，如（密码错误，密码为空，用户名为空）来返回不同的信息。
- code：状态码，判断请求是否成功。
- time：可以自定义，如定义0为请求成功。如果不是0可以从



### json：散列表

变量的定义：

- const定义常量
- let定义变量。

- const 在定义后无法重新赋值，但是可以操作他的内部元素，如数组的内部元素

**:warning:注意！**



在json中，**不要用纯数字做key**，key本身是一个字符串，因此下列代码中，a和b是相等的。

```javascript
const a={
    a:'a',
    b:'b'
}
const b={
    'a':'a',
    'b':'b'
}
```



json中取值有两种方式，两种取值方式不同

- a['key']  
- a.key

```javascript
const b={
    'a':'a',
    'b':'b'
}
const name='a';
console.log(b[name])  //这里的name会被当成变量来解析
console.log(b.name)	  //这里的name会被当成字符串来解析
console.log(b['name'])  //这里的name会被当成字符串来解析


```

### js的两种数据结构： 数组，JSON

js对JSON的遍历：便利的是JSON的key，相当于JAVA中的keySet

```javascript
for (let item in JSON){
	console.log(JSON[item])
}
```



js对数组的遍历

```javascript
for (let item of array){
	console.log(array[item])
}
```



### Vue

- v-bind

```html
		<span v-bind:title="{{message3}}">123456</span>
```

这里的v-bind 实在告诉vue，message3不是一个字符串，而是从vue的data里面拿到的变量

- v-if

- v-model

  双向绑定 ，input中的值变的时候，v-model的值也会变



### 将vue中的字符串转换为js的正则表达式

**tips:**

​	<font color="yellow" >**在需要使用正则表达式的属性中，添加一个reg即可。**</font>

因为data中传过来的key-value 的value会自动被识别成字符串

因此这里如果要传入正则表达式要把字符串转换为正则表达式

```javascript
const a = eval(`/${reg}/`)
```



---

<font color="red" size="5">需要了解的内容</font>

### postman  :  restful协议

### notepad++（用来打开大文件）

**APIZZA**

Babel：将ES6的语法，转换为ES5。因为部分浏览器并不直持ES6

TypeScript：更加模块化的工具

ESlint：校验工具，校验代码格式，并支持一键优化代码格式              

 

### JAVA中如何定义传入的函数参数是动态的

### Vue中如何获取初始data的值

