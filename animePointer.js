var marbre = document.getElementById('bg-wrapper');
marbreS = marbre.style;

var bgTimbre = document.getElementById('bg-timbre');
bgTimbreS = bgTimbre.style;

var mask1 = document.getElementById('mask1');
var mask2 = document.getElementById('mask2');
var mask3 = document.getElementById('mask3');
var mask4 = document.getElementById('mask4');
var mask1S = mask1.style;
var mask2S = mask2.style;
var mask3S = mask3.style;
var mask4S = mask4.style;

var bg = document.getElementById('bg-rope');
bgS = bg.style;


var iNav = false;


var about = document.getElementById('about');
aboutS = about.style;


var navButton = document.getElementById('navButton');
navButtonS = navButton.style;

navWrapper = document.getElementById('nav-wrapper');
navWrapperS = navWrapper.style;

var mainContainerCircle = document.getElementsByClassName('mainContainerCircle');
// console.log(mainContainerCircle[0])
// mainContainerCircle.forEach(function(element) {
//   console.log(element);
// });

function bgWrapper() {
  mask1S.setProperty("transform", "scale(2.3)  translate(-12px, -125px)");
  // mask1S.setProperty("animation-duration", "1s");
  mask2S.setProperty("transform", "scale(2.4) translate(-96px, -75px)");
  mask3S.setProperty("transform", "scale(2.4) translate(-90px, -125px)");
  mask4S.setProperty("transform", "scale(1) translate(900px, -400px)");
  about.innerHTML = "Experimental website<br> Tom Despres";
  navButton.style.visibility = "visible";
  marbreS.setProperty("filter", "brightness(1)");

}

function bgRope() {
  mask1S.setProperty("transform", "scale(2.3) translate(-20px, -130px)");
  mask2S.setProperty("transform", "scale(2.4) translate(-100px, -80px)");
  mask3S.setProperty("transform", "scale(2.4) translate(-95px, -130px)");
  mask4S.setProperty("transform", "scale(1) translate(920px, -385px)");
  about.innerHTML = "";
  navButton.style.visibility = "hidden";
  marbreS.setProperty("filter", "brightness(1)");
}
// function quitMenu(){
//   about.innerHTML = "Quit Menu";
//   mask1S.setProperty("animation-duration", ".3s");
//   mask2S.setProperty("animation-duration", ".3s");
//   mask3S.setProperty("animation-duration", ".4s");
//   mask4S.setProperty("animation-duration", ".4s");
// }
function bd() {
  mask1S.setProperty("transform", "scale(2.3)  translate(-12px, -125px)");
  mask2S.setProperty("transform", "scale(2.4) translate(-96px, -75px)");
  mask3S.setProperty("transform", "scale(2.4) translate(-90px, -125px)");
  mask4S.setProperty("transform", "scale(1) translate(900px, -400px)");
  marbreS.setProperty("filter", "brightness(0.1)");
  about.innerHTML = "Enter Menu";
  navButton.style.visibility = "visible";
}

function clickOnNavButton() {
  if (iNav == false) {
    mask1S.setProperty("transform", "scale(2.3) translate(-20px, -130px)");
    mask2S.setProperty("transform", "scale(2.4) translate(-100px, -80px)");
    mask3S.setProperty("transform", "scale(2.4) translate(-95px, -130px)");
    mask4S.setProperty("transform", "scale(1) translate(920px, -385px)");
    about.innerHTML = "Work<br>About<br>Contact";
    navButton.style.visibility = "visible";

    marbreS.setProperty("filter", "brightness(0.1)");

    //---------------------------------------------------------Demi-cercles interactions
    for (let i = 0; i <= 2; i++) {
      mainContainerCircle[i].classList.remove("activeCircle");
      mainContainerCircle[i].classList.add("inactiveCircle");
    }
    //-------------------------------------------------------------------
    marbre.removeEventListener("mousemove", bgWrapper);
    bg.removeEventListener("mouseover", bgRope);
    navButton.removeEventListener("mousemove", bd);
    iNav = true;
  } else {
    // navButton.addEventListener("mousemove", quitMenu);
    marbre.addEventListener("mousemove", bgWrapper);
    bg.addEventListener("mouseover", bgRope);
    navButton.addEventListener("mousemove", bd);

    navButtonS.setProperty("pointer-event", "none");
    navButton.style.visibility = "hidden";


    //---------------------------------------------------------Demi-cercles interactions
    for (var i = 0; i <= 2; i++) {
      mainContainerCircle[i].classList.remove("inactiveCircle");
      mainContainerCircle[i].classList.add("activeCircle");
    }
    // --------------------------------------------------------

    marbreS.setProperty("filter", "brightness(1)");
    iNav = false;
  }
}

if (iNav == false) {
  console.log(iNav);
  marbre.addEventListener("mousemove", bgWrapper);
  bg.addEventListener("mouseover", bgRope);
  navButton.addEventListener("mousemove", bd);
  navButton.addEventListener("click", clickOnNavButton);
}
