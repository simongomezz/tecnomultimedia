let principal;
function setup() {
  createCanvas (500, 500);
  principal = new Principal ();
}

function draw() {
  background (200);
  principal.dibujar ();
}

function mousePressed () {
  principal.presionaboton();
}
