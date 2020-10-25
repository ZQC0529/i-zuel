# HTML,CSS,Bootstrap



## 1. HTML

- html和htm的后缀都可以作为html文件后缀
- 它是一种标记语言，不是一种编程语言

### 标签

\<p\>  p标签可以换行，需要设置**（style="word-break: break-all;"）**在浏览器窗口缩小时，超出浏览器界面的部分会自动换行。

\<input\> 在input标签的左边一般会跟一个label标签，用来标记用户名等等。



## 2.CSS

### CSS盒模型：

![](C:\Users\cc\AppData\Roaming\Typora\typora-user-images\image-20201025152623457.png)

这里margin和padding之间是Border，padding主要是指内容和block边缘的间隙

### 弹性盒模型

如果直接输入块状元素是上下排版。但是使用弹性盒模型可以进行左右排版。

```html
<style>

.father-div{
		display: -webkit-flex;
		display: flex;    /*设置子元素横排排列*/
		justify-content: center;  /* 设置子元素居中排列 */
		width:500px;
		height: 300px
	}
</style>

	<div class="father-div">
	<div class="divc" style="border: 1px solid blue ; height: 100px ; width: 100px">	</div>
	<div class="divc" style="border: 1px solid blue ; height: 100px ; width: 100px">	</div>
	<div class="divc" style="border: 1px solid blue ; height: 100px ; width: 100px">	</div>
	</div>
	
```




---

<font color="red" size="5">需要完成的作业</font>

- [ ] toString（）方法

- [ ] JAVA 中的 Calender类，与DATE类的转换。

- [ ] transform: translate