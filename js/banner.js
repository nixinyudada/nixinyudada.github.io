// 获取DOM

var leftBox = document.getElementById("leftBox");
var rightBox = document.getElementById("rightBox");

var containerLeft = document.getElementById("leftBox_container");
var containerRight = document.getElementById("rightBox_container");

leftBox.addEventListener("touchstart",lShow);
leftBox.addEventListener("touchstart",RShow);

rightBox.addEventListener("touchstart",lShow);
rightBox.addEventListener("touchstart",RShow);

var num  = 0,num2 = 360;
var animateIs = true;
function lShow(e){
	e.preventDefault();
		containerLeft.classList.remove("animated");
		containerLeft.classList.remove("bounce");
		containerLeft.classList.remove("delay-2s");
	var v = setInterval(function(){
		num += 1;
		num2 -= 1;
		leftBox.style.transform = "rotateX("+num+"deg) rotateY("+num2+"deg)";
		//console.log(num);
		if(num % 90 == 0 && num2 % 90 == 0){
			clearInterval(v);
		}

		if(num >= 360){
			num = 0;
		}
		if(num2 <= 0){
			num2 = 360;
		}

		
	},5);
}

var n1=360,n=0;
function RShow(e){
	e.preventDefault();
		containerRight.classList.remove("animated");
		containerRight.classList.remove("bounce");
		containerRight.classList.remove("delay-2s");
	var v = setInterval(function(){
		n += 1;
		n1 -= 1;
		rightBox.style.transform = "rotateX("+n1+"deg) rotateY("+n+"deg)";
		//console.log(n);
		
		if(n % 90 == 0 && n1 % 90 == 0){
			clearInterval(v);
		}

		if(n >= 360){
			n = 0;
		}
		if(n1 <= 0){
			n1 = 360;
		}
	},5);
}