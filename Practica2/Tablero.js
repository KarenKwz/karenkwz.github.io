var forma=new THREE.Geometry();
//cuerpo VERTICES
forma.vertices.push( new THREE.Vector3( 100,  0,  100 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 100,  0, -100 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-100,  0, -100 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-100,  0,  100 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 100, 5,  100 ) ); // Vértice 4
forma.vertices.push( new THREE.Vector3( 100, 5, -100 ) ); // Vértice 5
forma.vertices.push( new THREE.Vector3(-100, 5, -100 ) ); // Vértice 6
forma.vertices.push( new THREE.Vector3(-100, 5,  100 ) ); // Vértice 7
forma.faces.push( new THREE.Face3( 0, 1, 2 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 2, 3, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 0, 1, 5 ) );
forma.faces.push( new THREE.Face3( 5, 4, 0 ) );
forma.faces.push( new THREE.Face3( 0, 4, 7 ) );
forma.faces.push( new THREE.Face3( 7, 3, 0 ) );
forma.faces.push( new THREE.Face3( 3, 7, 6 ) );
forma.faces.push( new THREE.Face3( 6, 2, 3 ) );
forma.faces.push( new THREE.Face3( 2, 6, 5 ) );
forma.faces.push( new THREE.Face3( 5, 1, 2 ) );
forma.faces.push( new THREE.Face3( 4, 5, 6 ) );
forma.faces.push( new THREE.Face3( 6, 7, 4 ) );



forma.computeBoundingSphere();
forma.computeFaceNormals();
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);
var escena = new THREE.Scene();
escena.add( malla );
var camara = new THREE.PerspectiveCamera();
camara.position.z = 400;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
