
const click = ():void => {
    alert("hello")
} 
const clickBtn = document.getElementById("btn-search");
if(clickBtn){
    clickBtn.addEventListener("click", click)
}


