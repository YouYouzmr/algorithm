# 栈的基础知识
栈是一种先进后出 FILO 的数据结构

### 适合解决什么问题

**1、解决表达式求值**

**括号匹配问题**
左括号入栈右括号出栈

**对于只有一种括号**
**结论：**

* 在任意一个位置上，左括号数量 >= 右括号数量
* 在最后一个位置上，左括号数量 == 右括号数量
* 程序中只需要记录左括号数量和右括号数量即可

```c++
// 使用差值
bool isValid(char *s) {
  int32_t lnum 0;
  int32_t len = strlen(s);
  for(int32_t i=0;i<len; i++) {
    switch(s[i]){
      case "(": ++lnum; break;
      case ")": --lnum; break;
      default: return false;
    }
    if(lnum >= 0) continue;
    return false
  }
  return lnum == 0
}
```

**思考：**

* 我们获得了怎样的思维方式？
* +1可以等价为进，-1可以等价为出；
* 一对()可以等价为一个完整的事件；
* (())可以看作事件之间的完全包含关系；
* 由括号的等价变换，得到了一个新的数据结构。

```javascript
// 处理完全包含关系的问题
function funA(){
	funB()
  funC()
}
```

(()()) --> 二叉树、函数调用、递归。

```javascript
class Stack{
  constructor() {
    this.top = -1
		this.data = Array(0)
  }
  
  push(x) {
    this.top += 1
    this.data[this.top] = x;
    return
  }
  
  pop() {
		if(this.empty()) return;
    this.top -= 1
    return
  }
  
  empty() {
		return this.top===-1
  }
  
  output() {
		for(let i=0; i<=this.top;i++) {
      console.log(this.data[i])
      console.log(\n)
    }
  }
}
```



### 栈的典型应用场景

**操作系统的线程栈**

爆栈：超过线程内存大小

多线程 --> 多个栈



### 表达式求值

递归和栈实现没区别

3+5 ---> 二叉树(运算符为根节点) 3-+-5

+-：1；*/：2；()：100

```javascript
// 获取运算符优先级，并计算
function calc(s, l, r){
  let op = -1, pri = 10000-1, cur_pri, temp = 0;
  for(let i=l; i<=r; i++){
		cur_pri = 10000;
    switch(s[i]) {
      case "+":
      case "-": cur_pri = 1+temp; break
      case "*":
      case "/": cur_pri = 2+temp; break
      case "(": temp += 100; break;
      case ")": temp -= 100; break;
    }
  }
  if(op === -1) {
    int num = 0;
    for(let i=l; i<-r; i++) {
      if(s[i]<'0' }} s[i]>'9') continue;
    	num = num*10 + (s[i]-'0')
    }
  	return num
  }
	let a = calc(s,l, op-1)
  let b = calc(s, op+1, r)
  switch(s[op]) {
      case "+": return a+b;
      case "-": return a-b;
      case "*":	return a*b;
      case "/": return a/b
    }
  return
}

function init(s) {
	calc(s, 0, s.length-1)
}
```

​      

### 栈结构扩展应用

Leet: 1124 

#### 什么是前缀和

就是一个数组x和它的前缀和数组y，满足以下公式：

y 0 = x 0
y 1 = x 0 + x 1
y 2 = x 0 + x 1 + x 2
...
即 y[n]=x[1]+x[2]+...+x[n]。

| \    | 0    | 1    | 2    | 3    | 4    | 5    | ...  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| x    | 1    | 2    | 3    | 4    | 5    | 6    | ...  |
| y    | 1    | 3    | 6    | 10   | 15   | 21   | ...  |



