const body = document.querySelector("body");
const header = document.querySelector("header")
const aside = document.querySelector("aside");
const market= document.querySelector(".click");
const close = document.querySelector(".close");
const dark = document.querySelector(".dark-b");

market.addEventListener("click", () =>{
    if (aside.style.display == "none"){
        aside.style.display = "block";
    }else{
        aside.style.display = "none";
    }

})

close.addEventListener("click", () =>{
    aside.style.display = "none";
})

dark.addEventListener("click", () =>{
    body.classList.toggle("visible");
    header.classList.toggle("visible");
    header.nextElementSibling.children[1].classList.toggle("visible");
    header.nextElementSibling.nextElementSibling.classList.toggle("visible");
    header.nextElementSibling.nextElementSibling.classList.toggle("border");
    header.nextElementSibling.children[1].classList.toggle("colores")
    header.nextElementSibling.children[0].children[0].children[0].classList.toggle("colores");
})

