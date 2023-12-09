class Cuchillos {
  constructor (Ax, Ay, Aancho, Aalto) {
    this.ax = Ax;
    this.ay = Ay;
    this.ancho = Aancho;
    this.alto = Aalto;
    this.load ();
    this.empezar = false;
    this.cuenta = 0;
  }
  dibujar () {
    if (this.empezar === false && keyCode === ENTER ) {
      this.empezar = true;
    }
    if (this.empezar === false) {
      image (this.imagen[2], 0, 0, width, height);
    }
    if (this.empezar === true) {
      image (this.imagen[1], this.ax, this.ay, this.ancho, this.alto);
      this.ay++;
      //text ("cuenta" + this.cuenta, 300, 100, 200);
      this.cuenta++;
      if (this.ay > height) {
        this.ay = 0;
      }
    }
  }
  load () {
    this.imagen = [];
    for (let i = 0; i < 3; i++) {
      this.imagen[i] = loadImage ("data/imagen" + i + ".png");
    }
  }
}
class Images {
  constructor (x, y) {
    this.load ();
    this.x = x;
    this.y = y;
  }
  displayfondo() {
    image(this.imag[0], 0, 0, width, height);
    fill (0, 120);
    rect (0, 0, 600, 500);
  }
  displayganar() {
    image(this.imag[2], 0, 0, width, height);
  }
  displayperder() {
    image(this.imag[1], 0, 0, width, height);
  }
  load () {
    this.imag = [];
    for (let i = 0; i < 3; i++) {
      this.imag[i] = loadImage ("data/fondo" + i + ".png");
    }
  }
}
class Persona {
  constructor (x, y, ancho, alto) {
    this.vida = true;
    this.px = x;
    this.py = y;
    this.ancho = ancho;
    this.alto = alto;
    this.load ();
  }
  dibujar () {
    if (this.vida) {
      image(this.imagen[0], this.px, this.py, this.ancho, this.alto);
    }
  }
  teclapresionada (keyCode) {
    if (keyIsDown (RIGHT_ARROW)) {
      this.moverD();
    }
    if (keyIsDown (LEFT_ARROW)) {
      this.moverI();
    }
  }
  moverD () {
    this.px += 8;
    if (this.px > width) {
      this.px =- 70;
    }
  }
  moverI () {
    this.px -= 8;
    if (this.px < -140) {
      this.px = width;
    }
  }
  load () {
    this.imagen = [];
    for (let i = 0; i < 3; i++) {
      this.imagen[i] = loadImage ("data/imagen" + i + ".png");
    }
  }
}
class Jueguito {
  constructor (cantarmas) {
    this.fondo = new Images ();
    this.canta = cantarmas;
    this.persona = new Persona(width/2, 325, 140, 150) ;
    this.armas = [];
    this.perder = false;
    this.ganar = false;
    for (let i = 0; i < this.canta; i++) {
      this.arY = i * random (-100, 10);
      this.arX = i * random (40, 50)
        this.armas[i] = new Cuchillos (this.arX, this.arY, 12, 48);
    }
  }
  dibujar() {
    this.fondo.displayfondo ();
    this.persona.dibujar ();
    for (let i = 0; i < this.canta; i++) {
      this.armas[i].dibujar ();
      this.arY++;
      //if (this.persona.px> this.armas[i].ax && this.persona.px+ancho < this.armas[i].ax && this.persona.y > this.armas[i].ay && this.persona.y + alto < this.armas[i].ay)
      if (this.armas[i].ay > this.persona.py && this.armas[i].ay < this.persona.py + this.persona.alto && this.armas[i].ax > this.persona.px && this.armas[i].ax <  this.persona.px + this.persona.ancho/2) {
        this.perder = true;
      }
      
    }
    if (this.perder === true) {
      this.fondo.displayperder();
    }
    if (this.ganar === true) {
    this.fondo.displayganar();
  }
  }
  
  teclapresionada (keyCode) {
    this.persona.teclapresionada (keyCode);
  }
}
