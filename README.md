`dbclick`

> 触屏设备不支持双击事件。双击浏览器窗口，会放大画面。
可以通过在head标签内加上这么一行：
复制代码 代码如下:


```html
<meta name="viewport" content="width=device-width, minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

> 可以实现，我们编写的页面不会随着用的手势而放大缩小。
关于meta标签，我还没有研究过，罪过啊。

`mouse`

> 在触屏上，我们单击一个元素，会相应的触发：mousemove mousedown mouseup click，所以当我们编写移动客户端界面时，可以为元素直接添加move事件，可以提高效率。
同时也会触发mouseover与mouseout，测试结果，我发现，只有当页面第一次刷新时，单击元素，参会触发mouseover事件。
随着触屏移动端设备的普及使用，W3C开始制定TouchEvent规范。

**触摸事件**

该类事件会在用户手指放在屏幕上面时，在屏幕上滑动时，或从屏幕上移开时触发。具体来说有以下几个触摸事件。
1. touchstart

> 当手指放在屏幕上触发。

2. touchmove

>当手指在屏幕上滑动时，连续地触发。

3. touchend

> 当手指从屏幕上离开时触发。

4.touchcancel
> 当系统停止跟踪时触发，系统什么时候取消，文档没有明确的说明。
【总】以上四个，是w3c提供的触摸事件，只针对触摸设备，最常用的是前三个。
由于触摸会导致屏幕动来动去，所以可以会在这些事件的事件处理函数内使用event.preventDefault()，来阻止屏幕的默认滚动。
除了常用的DOM属性，触摸事件还包含下列三个用于跟踪触摸的属性。

##

1. touches：表示当前跟踪的触摸操作的touch对象的数组。

>当一个手指在触屏上时，event.touches.length=1,
当两个手指在触屏上时，event.touches.length=2，以此类推。

2. targetTouches：特定于事件目标的touch对象数组。

> 因为touch事件是会冒泡的，所以利用这个属性指出目标对象。

3. changedTouches：表示自上次触摸以来发生了什么改变的touch对象的数组。

> 每个touch对象都包含下列几个属性：

4.鼠标位置 Client 

> clientX：触摸目标在视口中的x坐标。
clientY：触摸目标在视口中的y坐标。
identifier：标识触摸的唯一ID。
pageX：触摸目标在页面中的x坐标。
pageY：触摸目标在页面中的y坐标。
screenX：触摸目标在屏幕中的x坐标。
screenY：触摸目标在屏幕中的y坐标。
target：触摸的DOM节点目标。
【如何使用呢？】

```javascript
	EventUtil.addHandler(div,"touchstart",function(event){
	  div.innerHTML=event.touches[0].clientX+','+event.touches[0].clientY;
	});
	EventUtil.addHandler(div,"touchmove",function(event){
	  event.preventDefault();
	  div.innerHTML=event.touches[0].clientX;
	});
	EventUtil.addHandler(div,"touchend",function(event){
	  div.innerHTML=event.changedTouches[0].clientY;
	});
```

*使用clientX……时，必须要指明具体的touch对象，而不要直接指明数组。*

`event.touches[0]`

> 在touchend事件处理函数中，当该事件发生时，touches里面已经没有任何的touch对象了，此时，就要使用changeTouches集合。

**手势事件**

1. gesturestart：当一个手指已经按在屏幕上，而另一个手指又触摸在屏幕时触发。
2. gesturechange：当触摸屏幕的任何一个手指的位置发生变化时触发。
3. gestureend：当任何一个手指从屏幕上面移开时触发。

*【注意】只有两个手指都触摸到事件的接收容器时才触发这些手势事件。
触摸事件与手势事件之间的关系*

1. 当一个手指放在屏幕上时，会触发touchstart事件，如果另一个手指又放在了屏幕上，则会触发gesturestart事件，随后触发基于该手指的touchstart事件。
2. 如果一个或两个手指在屏幕上滑动，将会触发gesturechange事件，但只要有一个手指移开，则会触发gestureend事件，紧接着又会触发toucheend事件。
手势的专有属性

> rotation：表示手指变化引起的旋转角度，负值表示逆时针，正值表示顺时针，从零开始。
scale：表示两个手指之间的距离情况，向内收缩会缩短距离，这个值从1开始，并随距离拉大而增长。