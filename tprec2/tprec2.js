// Simón Gómez 94692/6
// Comision 1
// https://youtu.be/9f0ssW1RXa8

let imagen = [], imag = [], img = []; //imagenes
let escena = 0;
let nx = [], ny = [], vely = [], nancho = 25, nalto = 15; //naves
let fondoy = -450;
let avionx, aviony; //avion
let bx, by; //bala
let pytext = -100;
let cargador = 10;
let derribados = 0;
let disparada = false;

function preload () {
  for (let i = 0; i < 5; i++) {
    imagen.push(loadImage('data/imagen' + i + '.jpeg'));
  }

  for (let i = 0; i < 4; i++) {
    img.push(loadImage('data/img' + i + '.jpg'));
  }

  for (let i = 0; i < 7; i++) {
    imag.push(loadImage('data/imag' + i + '.png'))
  }
}

function setup () {
  createCanvas (450, 450);
  avionx = width/2;
  aviony = 410;
  bx = width/2;
  by = 410;

  for (let i = 0; i < 5; i++) {
    nx[i] = 105 + nancho/2 + i*nancho*2;
    ny[i] = random(-400, -100);
    vely[i] = random(1.6, 3.2);
  }
}

function draw () {
  if (keyIsDown (LEFT_ARROW)) {
    avionx -= 4;
  }
  if (keyIsDown (RIGHT_ARROW)) {
    avionx += 4;
  }
  if (avionx < 115) {
    avionx = 115;
  }
  if (avionx > 335) {
    avionx = 335;
  }
  if (disparada && by > 0) {
    by -= 13;
  } else {
    bx = avionx;
    by = aviony;
    disparada = false;
  }
  if (escena === 0) { // inicio
    image (imagen[0], 0, 0);
    image (imagen[2], 150, 300);
    image (imagen[3], 150, 370);
    image (img[0], 410, 5, 30, 30);
  }
  if (escena === 1) { // juego
    image (imagen[1], 0, fondoy);
    if (fondoy > 0) {
      fondoy = -450;
    }
    fondoy++;
    for (let i = 0; i < 5; i++) {
      nave (imag[0], nx[i], ny[i], nancho, nalto);
      ny[i] += vely[i];
      if (ny[i] > height) {
        ny[i] = random (-300, -100);
      }
      if (disparada === true && bx > nx[i] - nancho/2 && bx < nx[i] + nancho/2 && by > ny[i] - nalto/2 && by < ny[i] + nalto/2) {
        disparada = false;
        derribados ++;
        ny[i] = random (-300, -100);
      }
      if (derribados >= 7) {
        escena = 4;
      }
      if (disparada === false && bx > nx[i] - nancho/2 && bx < nx[i] + nancho/2 && by > ny[i] - nalto/2 && by < ny[i] + nalto/2) {
        escena = 5;
      }
      if (cargador === 0 && derribados < 7 && disparada === false) {
        escena = 5;
      }
    }
    noStroke ();
    avion (avionx, aviony, 6, 30);
    bala (bx, by, 5, 15);
    fill (255, 255, 0);
    textSize (15);
    text ('Cargador: ' + cargador, 355, 20);
    text ('Derribados: ' + derribados, 355, 40);
  }
  if (escena === 2) { // creditos
    background (43);
    push();
    image (imagen[4], 70, -140 + pytext);
    pop();
    fill (150);
    text ('Juego: River Raid \nCreador: Simón Gómez', 150, 40+pytext++);
    if (pytext > height/2) {
      pytext = height/2;
    }
    fill (255, 255, 0);
    image (imag[4], 10, 15);
  }
  if (escena === 3) {  // instrucciones
    image (img[1], 0, 0);
    fill (255);
    push ();
    textSize (20);
    text ('Controles:', 50, 100);
    text ('Reglas:', 50, 250);
    text ('Derribar 7 o más        para ganar.\nEl contacto con         te elimina.\nSi el cartucho se acaba quedas eliminado.', 50, 300);
    pop ();
    image (imag[0], 207, 285);
    image (imag[0], 200, 310);
    image (imag[1], 150, 70);
    image (imag[2], 210, 70);
    image (imag[3], 160, 130);
    image (imag[4], 10, 15);
  }
  if (escena === 4) { // ganador
    image (img[1], 0, 0);
    image (imag[6], 10, 40);
    image (img[2], 150, 270);
    image (img[3], 150, 200);
  }
  if (escena === 5) { //perdedor
    image (img[1], 0, 0);
    image (imag[5], 20, 40);
    image (img[2], 150, 270);
    image (img[3], 150, 200);
  }
}

function boton (x, y, ancho, alto, escenas) {
  for (let i = 0; i < 6; i++) {
    escenas = escenas[i];
    if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
      escenas [i] = escenas [i];
    }
  }
}

function nave (im, nx, ny, nancho, nalto) {
  image (im, nx - 13, ny - 6, nancho, nalto);
}
function bala (bx, by, tamx, tamy) {
  rect (bx, by, tamx, tamy);
}

function avion(x, y, ancho, alto) {
  fill (255, 255, 0);
  rectMode (CENTER);
  rect (x, y, ancho, alto);
  rect (x-ancho, y-ancho, ancho, alto/3);
  rect (x+ancho, y-ancho, ancho, alto/3);
  rect (x-10, y-4, ancho, alto/3);
  rect (x+10, y-4, ancho, alto/3);
  rect (x-14, y-2, ancho, alto/3);
  rect (x+14, y-2, ancho, alto/3);
  rect (x-ancho, y+8, ancho, ancho);
  rect (x+ancho, y+8, ancho, ancho);
  rect (x-10, y+12, ancho, ancho);
  rect (x+10, y+12, ancho, ancho);
}

function boton (x, y, ancho, alto) {
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    return true;
  } else {
    return false
  }
}


function keyPressed () {
  if (cargador > 0 && disparada === false) {
    if (keyCode === 32) {
      disparada = true;
      cargador--;
    }
  }
}
function mousePressed () {
  if (mouseX > 150 && mouseX < 300 && mouseY > 300 && mouseY < 350 && escena === 0) { // inicio
    escena = 1; // juego
    cargador = 10;
    derribados = 0;
    for (let i = 0; i < 5; i++) {
      nave (imag[0], nx[i], ny[i], nancho, nalto);
      ny[i] += vely[i];
      ny[i] = random (-300, -100);
    }
  }


  if (boton (150, 370, 150, 50) && escena === 0) { //inicio
    escena = 2; //creditos
  }

  if (boton(410, 5, 30, 30) && escena === 0) { //inicio
    escena = 3; //instrucciones
  }

  if (boton(10, 15, 25, 25) && escena === 2) { // creditos
    escena = 0;
  }

  if (boton(10, 15, 25, 25) && escena === 3) { //instrucciones
    escena = 0; //inicio
  }

  if (boton(150, 200, 150, 50) && escena === 5) { //perderdor
    escena = 0; //inicio
  }

  if (boton (150, 270, 150, 50) && escena === 5) { //perdedor
    escena = 1; //juego
    cargador = 10;
    derribados = 0;
    for (let i = 0; i < 5; i++) {
      nave (imag[0], nx[i], ny[i], nancho, nalto);
      ny[i] += vely[i];
      ny[i] = random (-300, -100);
    }
  }

  if (boton(150, 200, 150, 50) && escena === 4) { //ganador
    escena = 0; // inicio
  }
  if (boton(150, 270, 150, 50) && escena === 4) { //ganador
    escena = 1; // juego
    cargador = 10;
    derribados = 0;
    for (let i = 0; i < 5; i++) {
      nave (imag[0], nx[i], ny[i], nancho, nalto);
      ny[i] += vely[i];
      ny[i] = random (-300, -100);
    }
  }
}
