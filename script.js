let button=document.querySelector(".button-link")
let button_main=document.querySelector(".section3 button")
button_main.addEventListener("click",()=>{
    console.log("click");
    button.style.display="grid"
    button_main.style.display="none"
})