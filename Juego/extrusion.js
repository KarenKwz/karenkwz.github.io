//EXTRUSION
var figura1 = new THREE.Shape();
figura1.moveTo(-20, -20);
figura1.lineTo(-20, 20);
figura1.lineTo(20, 20);
figura1.lineTo(20,-20);
figura1.lineTo(-20, -20);
var forma1 = new THREE.ExtrudeGeometry( figura1,{amount: 10} );
var material1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh( forma1, material1 );

var figura2 = new THREE.Shape();
figura2.moveTo(20, 10);
figura2.lineTo(20, 20);
figura2.lineTo(30, 15);
figura2.lineTo(20, 10);
var forma2 = new THREE.ExtrudeGeometry( figura2,{amount: 20} );
var material2 = new THREE.MeshNormalMaterial();
var malla2 = new THREE.Mesh( forma2, material2 );

var figura3 = new THREE.Shape();
figura3.moveTo(-20, 10);
figura3.lineTo(-20, 20);
figura3.lineTo(-30, 15);
figura3.lineTo(-20, 10);
var forma3 = new THREE.ExtrudeGeometry( figura3,{amount: 20} );
var material3 = new THREE.MeshNormalMaterial();
var malla3 = new THREE.Mesh( forma3, material3 );

var figura4 = new THREE.Shape();
figura4.moveTo(20, -10);
figura4.lineTo(20, -20);
figura4.lineTo(30, -15);
figura4.lineTo(20, -10);
var forma4 = new THREE.ExtrudeGeometry( figura4,{amount: 20} );
var material4 = new THREE.MeshNormalMaterial();
var malla4 = new THREE.Mesh( forma4, material4 );

var figura5 = new THREE.Shape();
figura5.moveTo(-20, -10);
figura5.lineTo(-20, -20);
figura5.lineTo(-30, -15);
figura5.lineTo(-20, -10);
var forma5 = new THREE.ExtrudeGeometry( figura5,{amount: 20} );
var material5 = new THREE.MeshNormalMaterial();
var malla5 = new THREE.Mesh( forma5, material5 );


var figura6 = new THREE.Shape();
figura6.moveTo(-5, -5);
figura6.lineTo(-5, 5);
figura6.lineTo(5, 5);
figura6.lineTo(5,-5);
figura6.lineTo(-5, -5);
var forma6 = new THREE.ExtrudeGeometry( figura6,{amount: 20} );
var material6 = new THREE.MeshNormalMaterial();
var malla6 = new THREE.Mesh( forma6, material6 );


var escena = new THREE.Scene();

escena.add(malla1); //TABLERO
escena.add(malla2);
escena.add(malla3);
escena.add(malla4);
escena.add(malla5);
escena.add(malla6);

malla1.rotateY( Math.PI/4 );
malla2.rotateY( Math.PI/4 );
malla3.rotateY( Math.PI/4 );
malla4.rotateY( Math.PI/4 );
malla5.rotateY( Math.PI/4 );
malla6.rotateY( Math.PI/4 );



var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
