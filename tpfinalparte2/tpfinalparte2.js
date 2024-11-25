let sonidoFondo;
let pantallaInicial;


function setup() {
  createCanvas(640, 480);
  pantallaInicial=new Pantalla();
  sonidoFondo = document.getElementById("sonido-musica");
}


function draw() {
  pantallaInicial.dibujar();

}

function mousePressed() {
  pantallaInicial.mousePresionado();
}

function keyPressed() {
  if ( key==='o' || key==='O' ) {
    sonidoFondo.pause();
  }
  if (key === 'p' || key==='P') {
    sonidoFondo.play();
  }
}
