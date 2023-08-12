//tp3 Aventura Grafica
//Simón Gómez 94692/6
//Comisión 1
//link YouTube: https://youtu.be/1c4cwbh77xc

int [] escenas = new int [12];
PImage [] imagenes = new PImage [12];

void setup () {
  size (600, 600);
  for (int i = 0; i < 12; i++) {
    String nombresdelasimagenes = "img" + i + ".jpg";
    imagenes [i] = loadImage (nombresdelasimagenes);
  }
  for (int j = 0; j < 11; j++) {
    escenas [j] = 0;
  }
}

void imagenTexto (String texto, PImage imagen) {
  image (imagen, 0, 0);
  textSize (30);
  strokeWeight (2);
  fill (255);
  PFont forsaking;
  forsaking = loadFont("Forsaking.vlw");
  textFont(forsaking, 30);
  text (texto, 70, 50);
}

void boton (int posx, int posy, int tamx, int tamy, String textoboton) {
  fill (230);
  rect (posx, posy, tamx, tamy);
  textSize (25);
  fill (0);
  text (textoboton, posx+15, posy+20);
}

void botonCircular (int x, int y, int diametro) {
  if (dist(mouseX, mouseY, x, y) < diametro/2 && mousePressed) {
    for (int i = 0; i < 12; i++) {
      escenas[i] = 0;
    }
    escenas [0] = 0;
  }
  fill (255);
  ellipse (x, y, diametro, diametro);
  fill (0);
  textSize (20);
  text ("Reinicio", x-diametro/2.5, y);
}

void botonRect (int posx, int posx2, int posy, int posy2, int numero) {
  if (mouseX > posx && mouseX < posx2 && mouseY > posy && mouseY < posy2) {
    for (int i=0; i<12; i++) {
      escenas[i] = 1;
      escenas[numero] = 0;
    }
  }
}
void draw() {
  if (escenas[0] == 0) {
    imagenTexto ("El asesino - Ray Bradbury", imagenes[0]);
    boton (460, 520, 100, 40, "Inicio");
  } else if (escenas[1] == 0) {
    imagenTexto ("Brock se despierta en su departamento \nrepleto de dispositivos electronicos \npor los cuales se siente obsevado", imagenes[1]);
    boton (450, 500, 125, 30, "Siguiente");
  } else if (escenas[2] == 0) {    //ciudad futurista
    imagenTexto ("Brock decide salir a la ciudad \n y se plantea dos opciones:\n \nA: Ir a la biblioteca a pensar \nB: Ir a casa a dormir", imagenes[2]);
    boton (150, 500, 50, 50, "A");
    boton (350, 500, 50, 50, "B");
  } else if (escenas[3] == 0) {
    imagenTexto ("Brock decide tomarse un tiempo \npara pensar ya que la tecnologia \nlo deja intranquilo", imagenes[3]);
    boton (450, 500, 125, 30, "Siguiente");
  } else if (escenas[4] == 0) {
    imagenTexto ("A Brock se le ocurrieron dos ideas \npara lidiar con su descontento con \nla tecnologia\n\nA: Ir al centro de control de la ciudad y \napagar todos los aparatos tecnologicos\nB: Ir a casa a dormir y soñar con una \nrealidad antigua donde la tecnologia \nno era tan invasiva en el dia a dia", imagenes[4]);
    boton (150, 500, 50, 50, "A");
    boton (350, 500, 50, 50, "B");
  } else if (escenas[5] == 0) {
    imagenTexto ("Brock logro desconectar la energia desde\nel centro de la ciudad", imagenes[5]);
    boton (450, 500, 125, 30, "Siguiente");
  } else if (escenas[6] == 0) {
    imagenTexto ("Ahora las calles de la ciudad resultan\n mas agradables", imagenes[6]);
    boton (450, 500, 125, 30, "Siguiente");
  } else if (escenas[7] == 0) {
    imagenTexto ("Gracias a Brock, la gente comenzó\na disfrutar el tiempo sin necesidad\nde la tecnologia", imagenes[7]);
    boton (450, 500, 125, 30, "Siguiente");
  } else if (escenas[8] == 0) {
    imagenTexto ("Brock resulta preso, sin embargo es\nconsciente que hizo un buen trabajo y\nque gran parte del pueblo esta agradecida\ncon el", imagenes[8]);
    boton (450, 500, 125, 30, "Siguiente");
  } else if (escenas[9] == 0) {
    imagenTexto ("Brock decide descansar para soñar\ncon una realidad donde la tecnologia\nno era tan invasiva", imagenes[9]);
    boton (450, 500, 125, 30, "Siguiente");
  } else if (escenas[10] == 0) {
    imagenTexto ("En el sueño, Brock visualiza las\ncalles de una ciudad antigua", imagenes[10]);
    boton (450, 500, 125, 30, "Siguiente");
  } else if (escenas[11] == 0) {
    imagenTexto ("Cuento: El asesino\nAutor: Ray Bradbury\nImagenes: BlueWillow", imagenes[11]);
    botonCircular (100, 500, 80);
  }
}

void mousePressed () {
  if (escenas[0]==0) {               // escena inicio
    botonRect (460, 560, 520, 560, 1);
  } else if (escenas[1]==0) {        // interior departamento
    botonRect (450, 575, 500, 530, 2);
  } else if (escenas[2]==0) {        // ciudad futurista
    botonRect (150, 200, 500, 550, 3);
    botonRect (350, 400, 500, 550, 9);
  } else if (escenas[3]==0) {        //brock en biblioteca
    botonRect (450, 575, 500, 530, 4);
  } else if (escenas[4]==0) {        //brock con brillante idea
    botonRect (150, 200, 500, 550, 5);
    botonRect (350, 400, 500, 550, 9);
  } else if (escenas[5]==0) {        //brock en centro de control
    botonRect (450, 575, 500, 530, 6);
  } else if (escenas[6]==0) {        //calles de una ciudad antigua
    botonRect (450, 575, 500, 530, 7);
  } else if (escenas[7]==0) {        //multitud de gente en plaza
    botonRect (450, 575, 500, 530, 8);
  } else if (escenas[8]==0) {        //brock en prision
    botonRect (450, 575, 500, 530, 11);
  } else if (escenas[9]==0) {        //brock durmiendo
    botonRect (450, 575, 500, 530, 10);
  } else if (escenas[10]==0) {       //calles de una ciudad antigua 2
    botonRect (450, 575, 500, 530, 11);
  }
}
