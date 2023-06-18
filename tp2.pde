// Simón Gómez comision 1
// tp2

PImage ilusion;
int cant = 13;
int tamaño;
int cantidad = 2;
int numero;

void setup() {
  size(800, 400);
  ilusion = loadImage("ilusion.jpg");
  tamaño = width/2/cantidad;
}

void draw() {
  noStroke();
  background(255);
  image(ilusion, 0, 0, 400, 400);
  translate (500, 100);
  for (int d = 0; d < cantidad; d++) {
    for (int a = 0; a < cantidad; a++) {
      for (int i = 0; i < cant; i++) {
        float tam = map(cant, 0, 10, 0, 10);
        cuadrado(d * tamaño, a * tamaño, tam - 2 + numero, tam / 2 * i, 72, i);
      }
    }
  }
}

void cuadrado(int x, int y, float tam, float sep, int cant, int linea) {
  for (int i = 0; i < cant; i++) {
    push();
    if (linea % 2 == 0) {
      if (i % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
    } else {
      if (i % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }
    }
    translate(x, y);
    rotate(radians(i * (360 / cant) + (mouseX / 2)));
    rect(0, sep, tam, tam);
    pop();
  }
}

void keyPressed() {
  if (key == 'r') {
    mouseX = 0;
  }
}
