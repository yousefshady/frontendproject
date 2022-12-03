var btnscrl = document.querySelector(".scrolltotop");

window.onscroll = function show(){
    scrollBtn();
}
function scrollBtn(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btnscrl.style.display = "block";
    }
    else{
        btnscrl.style.display = "none";
    }
}
btnscrl.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
var why = document.querySelector(".whywashhands");
why.addEventListener("click", ()=>{
    alert("So you not get corona and die")
})