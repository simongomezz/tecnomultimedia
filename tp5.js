// Simón Gómez 94692/6
// tp5
// https://youtu.be/rBkOAMLNOKs

let objJuego;
let imagen;

function setup() {
  objJuego = new Juego (14);
  createCanvas (400, 400);
}

function draw() {
  objJuego.dibujar ();
  objJuego.teclaPresionada (keyCode);
}

function keyPressed () {
}
