
// dropdown menu
const dropdown = document.getElementById("dropdown");
let dropdownActive = false;
dropdown.addEventListener("click", (e)=>{
e.preventDefault();
if(!dropdownActive){
    dropdown.classList.add("dropdown-active");
}else{
    dropdown.classList.remove("dropdown-active");
}
dropdownActive = !dropdownActive;
});


// responsive menu
const hamburgerMenu = document.getElementById("hamburgerMenu");
const closeBtn = document.getElementById("closeBtn");
const nav = document.getElementById("nav");
let menuActive = false;
hamburgerMenu.addEventListener("click", ()=>{
    if(!menuActive){
        nav.classList.add("menu-active");
    }else{
        nav.classList.remove("menu-active");

    }
    menuActive = !menuActive;
});

closeBtn.addEventListener("click", ()=>{
    if(menuActive){
        nav.classList.remove("menu-active");
    }else{
        nav.classList.add("menu-active");

    }
    menuActive = !menuActive;
});