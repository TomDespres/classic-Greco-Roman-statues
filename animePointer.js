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
    for (let i = 0; i <=6; i++) {
      mainContainerCircle[i].classList.remove("activeCircle");
      mainContainerCircle[i].classList.add("inactiveCircle");
    }
    mainContainerCircle[3].classList.remove("activeCircleComplet");


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
    for (var i = 0; i <= 6; i++) {
      mainContainerCircle[i].classList.remove("inactiveCircle");
      mainContainerCircle[i].classList.add("activeCircle");
    }
    mainContainerCircle[3].classList.remove("activeCircle");

    mainContainerCircle[3].classList.add("activeCircleComplet");

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


// --------------------------------------------------------------------------------------------THREEJS
//------------------------------------SCENE+CAMERA+RENDERER-----------------------
      var scene = new THREE.Scene();//cree une scene
      var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 ); //cree une camera
			camera.position.z = 15; //position de la camera sur l'axe des z


      var renderer = new THREE.WebGLRenderer({antialias:true}); //initialise le rendu dans un canvas
			renderer.setClearColor("rgb(31,29,30)"); // initialise la couleur du canvas
      renderer.setSize( window.innerWidth, window.innerHeight ); //initialise la taille du canvas

      document.body.appendChild(renderer.domElement); //ajoute le canvas (=renderer) au DOM

//event permettant de rendre responsive le canvas en modifiant les parametres
			window.addEventListener("resize", () => {
				renderer.setSize( window.innerWidth, window.innerHeight ); //rend responsive en reactualisant la taille du canvas
				camera.aspect = window.innerWidth / window.innerHeight ; //initialise le ratio de la camera
				camera.updateProjectionMatrix(); //met a jour la camera

			});

//----------------------------------------------OBJECT----------------------------------------------

      var obj;

      // Create a material
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.load('venus.mtl', function (materials) {

            materials.preload();

            // Load the object
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('venus.obj', function (object) {
                scene.add(object);
                ourObj = object;
                object.position.set(0,-75,-100);
                object.scale.set(0.05,0.05,0.05);

            });
        });

			// var geometry = new THREE.DodecahedronGeometry(1,3); // initialisation de la forme
      // var material = new THREE.MeshLambertMaterial({color: 0xffffff}); //initialisation du materiaux
			// var mesh = new THREE.Mesh(geometry,material); //ajoute la forme et le materiaux a l'objet
			// //
			// mesh.position.set(2,2,-1);//positionne l'objet en une position sur l'axe des X,Y,Z
      //
			// scene.add(mesh); //ajoute l'objet a la scene




//---------------------------------------------LIGHT-----------------------------------------
			var light = new THREE.PointLight(0xFFFFFF, 1.5, 500); //initialisation de la lumiere
			light.position.set(10,0,25); //initialise sa position
			scene.add(light);//ajoute la lumiere a la scene

      // var light2 = new THREE.AmbientLight( 0xDDDDDD ); // soft white light
      // scene.add( light2 );


//fonction permettant de rendre responsive le canvas --> met a jour le renderer.
			var render = function(){
				requestAnimationFrame(render); // ????????? A chaque raffraichissement de la page (60frames ?), relance la fonction.

        ourObj.rotation.y += 0.01;
        renderer.render(scene,camera); // ajoute la scene et la camera au rendu

				};


			render();


// --------------------------------------------------------------------------------------------
