	var blog = document.getElementById("blog");
	var storage=window.localStorage;

	//storage.clear();
	//console.log(storage.b)
	if(!storage.b){
		setTimeout(function(){
			blog.style.visibility = "visible";
			blog.classList.add("animated");
			blog.classList.add("bounceIn");
			blog.classList.add("delay-2s");
			storage["b"] = true;
		},1500);
	}else{
		blog.style.visibility = "visible";
	}

