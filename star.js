// --------------------------------------------------------------------------------------------THREEJS
var container2 = document.querySelector("#main-container");
document.body.appendChild(container2);
//------------------------------------SCENE+CAMERA+RENDERER-----------------------
      var scene2 = new THREE.Scene();//cree une scene
      var camera2 = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 ); //cree une camera
			camera2.position.z = 15; //position de la camera sur l'axe des z


      var renderer2 = new THREE.WebGLRenderer({alpha:true , antialias:true}); //initialise le rendu dans un canvas
			// renderer.setClearColor("rgb(31,29,30), 0"); // initialise la couleur du canvas
      renderer2.setSize( window.innerWidth, window.innerHeight ); //initialise la taille du canvas

      document.body.appendChild(renderer2.domElement); //ajoute le canvas (=renderer) au DOM

//event permettant de rendre responsive le canvas en modifiant les parametres
			window.addEventListener("resize", () => {
				renderer2.setSize( window.innerWidth, window.innerHeight ); //rend responsive en reactualisant la taille du canvas
				camera2.aspect = window.innerWidth / window.innerHeight ; //initialise le ratio de la camera
				camera2.updateProjectionMatrix(); //met a jour la camera

			});
      container2.appendChild( renderer2.domElement );

//----------------------------------------------OBJECT----------------------------------------------
// var ourObj2;


      // Create a material
        var mtlLoader2 = new THREE.MTLLoader();
        mtlLoader2.load('star.mtl', function (materials) {

            materials.preload();

            // Load the object
            var objLoader2 = new THREE.OBJLoader();
            objLoader2.setMaterials(materials);
            objLoader2.load('star.obj', function (object) {
                scene.add(object);

                // ourObj2 = object;
                object.position.set(0,0,0);
                object.scale.set(0.5,0.5,0.5);


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
			var light2 = new THREE.PointLight(0xFFFFFF, 1.5, 500); //initialisation de la lumiere
			light2.position.set(10,0,25); //initialise sa position
			scene2.add(light2);//ajoute la lumiere a la scene

      // var light2 = new THREE.AmbientLight( 0xDDDDDD ); // soft white light
      // scene.add( light2 );


//fonction permettant de rendre responsive le canvas --> met a jour le renderer.
			var render2 = function(){
				requestAnimationFrame(render2); // ????????? A chaque raffraichissement de la page (60frames ?), relance la fonction.

        // ourObj2.rotation.y += 0.01;
        renderer2.render(scene2,camera2); // ajoute la scene et la camera au rendu
				};

			render2();


// --------------------------------------------------------------------------------------------
