var btn1 = document.getElementById("+btn");
var btn2 = document.getElementById("-btn");
var size =16;
btn1.onclick = function IncreaseSize(){
    var p= document.getElementsByTagName("p");
    for (let i of p) {
        i.style.fontSize=(size+2)+"px"
        size+=1;
    }
}
btn2.onclick = function IncreaseSize(){
    var p= document.getElementsByTagName("p");
    for (let i of p) {
        i.style.fontSize=(size-2)+"px"
        size-=1;
    }
}
