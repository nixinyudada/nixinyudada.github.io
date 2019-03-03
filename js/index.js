
var buttons = document.getElementById("buttons");
// 获取 nav options
var optionNav = document.getElementById("optionNav");
// nav options <a>
var optionA = document.getElementsByClassName("opBtn");
console.log(optionA)
buttons.addEventListener("touchstart",showNavOption);

var b = true;
function showNavOption(){
	// 点击时提前删除已经存在的动画 class
	optionNav.classList.remove("animated");
	optionNav.classList.remove("bounceInRight");
	optionNav.classList.remove("bounceOutLeft");
	optionNav.classList.remove("delay-2s");

	for(var i = 0;i < optionA.length;i++){
		optionA[i].classList.remove("animated");
		optionA[i].classList.remove("swing");
		optionA[i].classList.remove("delay-2s");
	}

	// 通过一个布尔变量来切换显示隐藏
	if(b){
		optionNav.style.display = "block";
		optionNav.classList.add("animated");
		optionNav.classList.add("bounceInRight");
		optionNav.classList.add("delay-2s");
		setTimeout(function(){
			optionA[0].classList.add("animated");
			optionA[0].classList.add("swing");
			optionA[0].classList.add("delay-2s");
		},1200);
		setTimeout(function(){
			optionA[1].classList.add("animated");
			optionA[1].classList.add("swing");
			optionA[1].classList.add("delay-2s");
		},1700);
		b = false;
	}else{
		optionNav.classList.add("animated");
		optionNav.classList.add("bounceOutLeft");
		optionNav.classList.add("delay-2s");
		b = true;
	}
}















