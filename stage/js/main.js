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

//show hide setting box
document.querySelector(".toggle-setting").addEventListener("click", (e)=>{
  //Make gear rotate
  document.querySelector(".toggle-setting i").classList.toggle("fa-spin");
  //open the box
  document.querySelector(".setting-box").classList.toggle("hide");
})

//chang theme
var toggleClasses= [];
document.querySelectorAll('.colors-option li').forEach((e)=>{
  toggleClasses.push(e.dataset.theme);
})
var themeToggle = Array.from(document.querySelectorAll('.colors-option li'))
themeToggle.forEach((e)=>{
  e.addEventListener("click", (el)=>{
    document.body.classList.remove(...toggleClasses);
    document.body.classList.add(el.currentTarget.dataset.theme);
    document.querySelectorAll('.colors-option li').forEach((e)=>{
      e.classList.remove("active")
    })
    el.currentTarget.classList.add("active")
  })
})

//change the font
var fontsClasses= [];
document.querySelectorAll('.fonts-option select option').forEach((e)=>{
  fontsClasses.push(e.value);
})
document.querySelector('.fonts-option select').addEventListener("change", (el)=>{
  document.body.classList.remove(...fontsClasses);
  document.body.classList.add(el.currentTarget.value);
})