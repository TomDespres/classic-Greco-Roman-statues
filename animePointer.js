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


function bgWrapper(){

  mask1S.setProperty("animation-duration", ".3s");
  mask2S.setProperty("animation-duration", ".3s");
  mask3S.setProperty("animation-duration", ".4s");
  mask4S.setProperty("animation-duration", ".4s");
  about.innerHTML = "Experimental website<br> Tom Despres";
  navButton.style.visibility = "visible";
  marbreS.setProperty("filter", "brightness(1)");

}
function bgRope(){
  mask1S.setProperty("animation-duration", "10s");
  mask2S.setProperty("animation-duration", "10s");
  mask3S.setProperty("animation-duration", "10s");
  mask4S.setProperty("animation-duration", "10s");
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
function bd(){
  mask1S.setProperty("animation-duration", ".3s");
  mask2S.setProperty("animation-duration", ".3s");
  mask3S.setProperty("animation-duration", ".4s");
  mask4S.setProperty("animation-duration", ".4s");
  marbreS.setProperty("filter", "brightness(0.1)");
  about.innerHTML = "Enter Menu";
  navButton.style.visibility = "visible";
}
function clickOnNavButton(){
  if(iNav==false){
  mask1S.setProperty("animation-duration", "10s");
  mask2S.setProperty("animation-duration", "10s");
  mask3S.setProperty("animation-duration", "10s");
  mask4S.setProperty("animation-duration", "10s");
  about.innerHTML = "Work<br>About<br>Contact";
  navButton.style.visibility = "visible";
  marbreS.setProperty("filter","brightness(0.1)");

  marbre.removeEventListener("mousemove", bgWrapper);
  bg.removeEventListener("mouseover", bgRope);
  navButton.removeEventListener("mousemove", bd);
  iNav = true;
}

else{
  // navButton.addEventListener("mousemove", quitMenu);
  marbre.addEventListener("mousemove", bgWrapper);
  bg.addEventListener("mouseover", bgRope);
  navButton.addEventListener("mousemove", bd);

  navButtonS.setProperty("pointer-event","none");
  navButton.style.visibility = "hidden";
  marbreS.setProperty("filter","brightness(1)");

  iNav = false;

}

}

if (iNav == false) {
  console.log(iNav);
  marbre.addEventListener("mousemove", bgWrapper);
  bg.addEventListener("mouseover", bgRope);
  navButton.addEventListener("mousemove",bd);
  navButton.addEventListener("click", clickOnNavButton);
}