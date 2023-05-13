// Simón Gómez
// tp1

PImage piramides;
PImage piramides2;
PImage piramides3;
PImage boton;
PFont fuente1;
PFont fuente2;
int variableuno = 1;
int numero = 0;
String texto1 = "Puerto Piramides es una localidad \nubicada al norte de la provincia de Chubut";
String texto2 = "En esta localidad te podes encontrar \nelefantes marinos, lobos, pingüinos, \nguanacos, choiques, maras, zorros y \nlas espectaculares orcas, animales que \nresultan muy interesantes de conocer.";
String texto3 = "Todo esto, sumado a su increible playa \ny paisajes hacen a Puerto Piramides \nun gran lugar para conocer";
String texto4 = "REINICIAR";

void setup () {
  size (640, 480);
  fuente1 = loadFont("Book.vlw");  // tipografia
  fuente2 = loadFont ("Candara.vlw");
  piramides = loadImage("piramides.jpg");
  piramides2 = loadImage("piramides2.jpg");
  piramides3 = loadImage("piramides3.jpg");
  boton = loadImage ("boton.png");
  textFont (fuente1);
}

void draw () {
  println (numero);
  if (variableuno == 1) {
    image (piramides, 0, 0, 640, 480);
    fill (255);
    text (texto1, 50, numero);
  }
  numero = numero+1;
  if (numero == 550) {
    variableuno = 2;
    numero = 0;
  } else if (variableuno == 2) {
    image (piramides2, 0, 0, 640, 480);
    fill (255);
    text (texto2, numero/2, 200);
    numero = numero+1;
    if (numero == 1300) {
      variableuno = 3;
      numero = 0;
    }
  } else if (variableuno == 3) {
    image (piramides3, 0, 0, 640, 480);
    image (boton, 480, 410);
    fill (255);
    text (texto3, 20, numero);
    textFont (fuente2, 25);
    text (texto4, 490, 440);
    numero=numero+1;
    if (numero == 6000) {
    }
  }
}

void mousePressed () {
  if (mouseX > 480 && mouseX < 610 && mouseY > 410 && mouseY < 454 && variableuno == 3) {
    variableuno = 1;
    numero = 0;
  }
}
