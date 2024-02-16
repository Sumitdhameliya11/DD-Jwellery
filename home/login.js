let login = document.querySelector(".cl-right");

window.addEventListener("load",function(){
    showPopup();
})

function showPopup(){
    const timelimit = 3//second;
    let i=0;
    const timer = setInterval(function(){
        i++;
        if(i==timelimit){
            clearInterval(timer);
            login.classList.add("show");
        }
        console.log(i);
    },1000)
}