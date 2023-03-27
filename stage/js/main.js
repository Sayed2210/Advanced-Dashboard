
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

//fullscreen toggle
document.querySelector(".fullscreen-toggle").addEventListener("click",(e)=>{
    e.currentTarget.classList.toggle("fullscreen");
    if(e.currentTarget.classList.contains("fullscreen")) {
        openFullscreen();
    }else {
        // closeFullscreen();
        document.exitFullscreen();
        console.log("right")
    }
})

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

// /* Close fullscreen */
// function closeFullscreen() {
//   if (elem.exitFullscreen) {
//     elem.exitFullscreen();
//   } else if (elem.webkitExitFullscreen) { /* Safari */
//     elem.webkitExitFullscreen();
//   } else if (elem.msExitFullscreen) { /* IE11 */
//     elem.msExitFullscreen();
//   }
// }