class Enemigo {
  constructor (posx, posy, enemigo) {
    this.enemigo = enemigo;
    this.posx = posx;
    this.posy = posy;
    this.tamañox = 30;
    this.tamañoy = 30;
    this.load ();
  }
  dibujar () {
    image (this.personaje [this.enemigo], this.posx, this.posy, this.tamañox * 2, this.tamañoy * 2); //enemigos 0 y 6
  }
  load () {
    this.personaje = [];
    for (let i = 0; i < 8; i++) {
      this.personaje[i] = loadImage ("data/personaje" + i + ".png");
    }
  }
}
class Personaje {
  constructor (posx, posy, fondo, principal, destino) {
    this.fondo = fondo;
    this.principal = principal;
    this.destino =destino;
    this.posx = posx;
    this.posy = posy;
    this.tam = 60;
    this.load ();
  }

  dibujar () {
    image (this.personaje[this.fondo], 0, 0, 500, 500); //fondo
    fill (0, 120);
    rect (0, 0, width, height);
    image (this.personaje[this.destino], 450, 435, 50, 60); //cohete 4 y 7
    image (this.personaje[this.principal], this.posx, this.posy, this.tam, this.tam ); //personaje 2 y 5
  }
  teclaPresionada (keyCode) {
    if (keyIsDown (RIGHT_ARROW)) {
      this.posx += 3;
      if (this.posx > width - this.tamañox/2) {
        this.posx =  width - this.tamañox;
      }
    }
    if (keyIsDown (LEFT_ARROW)) {
      this.posx -= 3
        if (this.posx < 0) {
        this.posx = 0;
      }
    }
    if (keyIsDown (UP_ARROW)) {
      this.posy -= 3;
      if (this.posy < 0) {
        this.posy = 0;
      }
    }
    if (keyIsDown (DOWN_ARROW)) {
      this.posy += 3;
      if (this.posy > height - this.tamañoy) {
        this.posy = height - this.tamañoy;
      }
    }
  }
  posicionInicial () {
    this.vivo = true;
    this.posx = 20;
    this.posy = 20;
  }
  morir () {
    this.posicionInicial ();
  }
  load () {
    this.personaje = [];
    for (let i = 0; i < 9; i++) {
      this.personaje[i] = loadImage ("data/personaje" + i + ".png");
    }
  }
}
class Juego {
  constructor (cantidadEnemigos, fondo, principal, enemigo, destino) {
    this.fondo = fondo; //imagen 3-8
    this.principal = principal;//imagen 2-5
    this.enemigo = enemigo;//imagen 0-6
    this.destino = destino;//imagen 4-7
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje ();
    this.crearEnemigos ();
    this.inicio = true;
    this.ganar = false;
  }

  dibujar () {
    this.personaje.dibujar ();
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i].dibujar();
      if (i < 6 && this.enemigos[i].posy >= 0 - this.enemigos[i].tamañoy && this.enemigos[i].posy < height - this.enemigos[i].tamañoy) {
        this.enemigos[i].posy ++;
      } else if (this.enemigos[i].posy === height - this.enemigos[i].tamañoy) {
        this.enemigos[i].posy = 0 - this.enemigos[i].tamañoy;
      }
      if (i > 6 && this.enemigos[i].posx > 0) {
        this.enemigos[i].posx --;
      } else if (this.enemigos[i].posx === 0  ) {
        this.enemigos[i].posx = width;
      }
    }
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      if (this.personaje.posx > this.enemigos[i].posx - this.enemigos[i].tamañox && this.personaje.posx < this.enemigos[i].posx + this.enemigos[i].tamañox && this.personaje.posy > this.enemigos[i].posy - this.enemigos[i].tamañoy && this.personaje.posy < this.enemigos[i].posy + this.enemigos[i].tamañoy) {
        this.personaje.morir ();
      }
      if (this.personaje.posx > 420 && this.personaje.posx < 500 && this.personaje.posy > 420 && this.personaje.posy < 500) {
        this.ganar = true;
      }
    }
    if (this.ganar === true) {
      rect(0, 0, width, height);
    }
  }

  crearPersonaje () {
    this.personaje = new Personaje (10, 10, this.fondo, this.principal, this.destino);
  }
  crearEnemigos () {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      if (i<5) {
        this.enemigos[i] = new Enemigo (80+i*80, 0, this.enemigo);
      }
      if (i > 4) {
        this.enemigos[i] = new Enemigo (380, -550+ i * 80, this.enemigo);
      }
    }
  }
  teclaPresionada (keyCode) {
    this.personaje.teclaPresionada (keyCode);
  }
}
