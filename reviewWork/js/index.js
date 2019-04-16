var productLeftBtn = document.getElementById("product-left-btn")
var productRightBtn = document.getElementById("product-right-btn")
var phoneTada = document.getElementById("phone-tada")   // header 中的 电话 区块
var productImg = document.getElementById("product-img") // 需要展示的产品制造的图片
var honorUl = document.getElementById("honor-ul") // 需要展示的 荣誉证书 区域
var honorLeftBtn = document.getElementById("honor-left-btn")
var honorRightBtn = document.getElementById("honor-right-btn")


// 产品制造图片数组
var productImgArray = ["污水处理现场.jpg","污水处理设备生产制造.jpg","海水淡化现场安装调试.jpg","海水淡化设备制造.jpg","首套海水淡水装置.jpg"]


var i = 0;
productLeftBtn.onclick = function () {
    i == 0 ? i = productImgArray.length - 1 : i--
    productImg.src = "./img/生产制造/" + productImgArray[i]
}

productRightBtn.onclick = function () {
    i == productImgArray.length - 1 ? i = 0 : i++
    productImg.src = "./img/生产制造/" + productImgArray[i]
}


// 荣誉展示数组
var j = 0;
 // -48.9    7.1
honorRightBtn.onclick = function(){
    if(j >= -7.1){
        return
    }
    j += 16.3
    honorUl.style.left = j + "rem";

}



honorLeftBtn.onclick = function(){
    if(j < -48.9){
        return
    }
    j -= 16.3
    honorUl.style.left = j + "rem";

}























// 电话被鼠标 hover 时的动画
phoneTada.onmouseover = () => {
    phoneTada.className = "animated tada infinite"
}

phoneTada.onmouseout = () => {
    phoneTada.className = "";
}