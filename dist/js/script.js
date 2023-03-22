//show hide side bar
document.querySelector("i.fa-solid.fa-right-left").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("no-sidebar");
});
//create toggle menu
let togglebtn = Array.from(document.querySelectorAll('.togglemenu'));
togglebtn.forEach((e)=>{
    e.addEventListener("click", (el)=>{
        el.currentTarget.classList.toggle("down")
        // console.log(el.currentTarget.dataset.cont)
        document.querySelector(el.currentTarget.dataset.cont).classList.toggle("open")
    })
})