#  Sass 
This feature is available with react-scripts@2.0.0 and higher.
-[Adding a Sass Stylesheet](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)

Install
```
 npm install node-sass -D
```

## Import file
```
  @import "path/filename.scss";
```

## Variable
```
  $blue : #1875e7;　

  div {
  　color : $blue;
  }
```
varialbe in string: #{}
```
  $side : left;

  .rounded {
  　　border-#{$side}-radius: 5px;
  }
```

## Caculation
```
  body {
　　　margin: (14px/2);
　　　top: 50px + 100px;
　　　right: $var * 10%;
　}
```

## Nested
###  Inside selector
```
　div {
　　　　hi {
　　　　　　color:red;
　　　　}
　　}
```
Will be traslate to 
```
div h1 {
　　　　color : red;
　　}
```
### attribute
Sample for border-color attribute

```
　p {
　　　　border: {
　　　　　　color: red;
　　　　}
　　}
```
注意，border后面必须加上冒号

### 伪类引用父元素
比如a:hover伪类，可以写成
```
　　a {
　　　　&:hover { color: #ffb3ff; }
　　}
```

### 子对象引用父元素
```
div {
  > a {
    color: #ffb3ff;
  }
}


## 继承

SASS允许一个选择器，继承另一个选择器。比如，现有class1：
```
　　.class1 {
　　　　border: 1px solid #ddd;
　　}
```
class2要继承class1，就要使用@extend命令：
```
　　.class2 {
　　　　@extend .class1;
　　　　font-size:120%;
　　}
```
## Mixin

Mixin有点像C语言的宏（macro），是可以重用的代码块。

使用@mixin命令，定义一个代码块。
```
　　@mixin left {
　　　　float: left;
　　　　margin-left: 10px;
　　}
```
使用@include命令，调用这个mixin。
```
　　div {
　　　　@include left;
　　}
```
mixin可以指定参数和缺省值。
```
　　@mixin left($value: 10px) {
　　　　float: left;
　　　　margin-right: $value;
　　}
```
Usage:
```

　　div {
　　　　@include left(20px);
　　}
```

mixin的实例，生成浏览器前缀
```
　　@mixin rounded($vert, $horz, $radius: 10px) {
　　　　border-#{$vert}-#{$horz}-radius: $radius;
　　　　-moz-border-radius-#{$vert}#{$horz}: $radius;
　　　　-webkit-border-#{$vert}-#{$horz}-radius: $radius;
　　}
```