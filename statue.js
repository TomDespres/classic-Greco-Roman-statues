// --------------------------------------------------------------------------------------------THREEJS
var container = document.querySelector("#main-container");
document.body.appendChild( container );
//------------------------------------SCENE+CAMERA+RENDERER-----------------------
      var scene = new THREE.Scene();//cree une scene
      var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 ); //cree une camera
			camera.position.z = 15; //position de la camera sur l'axe des z


      var renderer = new THREE.WebGLRenderer({alpha:true , antialias:true}); //initialise le rendu dans un canvas
			// renderer.setClearColor("rgb(31,29,30), 0"); // initialise la couleur du canvas
      renderer.setSize( window.innerWidth, window.innerHeight ); //initialise la taille du canvas

      document.body.appendChild(renderer.domElement); //ajoute le canvas (=renderer) au DOM

//event permettant de rendre responsive le canvas en modifiant les parametres
			window.addEventListener("resize", () => {
				renderer.setSize( window.innerWidth, window.innerHeight ); //rend responsive en reactualisant la taille du canvas
				camera.aspect = window.innerWidth / window.innerHeight ; //initialise le ratio de la camera
				camera.updateProjectionMatrix(); //met a jour la camera

			});
      container.appendChild( renderer.domElement );

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
                object.position.set(0,-120,-100);
                object.scale.set(0.07,0.07,0.07);

            });
        });

        var obj2;

        // Create a material
          var mtlLoader2 = new THREE.MTLLoader();
          mtlLoader2.load('star.mtl', function (materials) {

              materials.preload();

              // Load the object
              var objLoader2 = new THREE.OBJLoader();
              objLoader2.setMaterials(materials);
              objLoader2.load('star.obj', function (object) {
                  scene.add(object);
                  ourObj2 = object;
                  object.position.set(-9,-4,0);
                  object.scale.set(0.04,0.04,0.04);

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
        ourObj2.rotation.x += 0.01;

        renderer.render(scene,camera); // ajoute la scene et la camera au rendu
				};


			render();


// --------------------------------------------------------------------------------------------
