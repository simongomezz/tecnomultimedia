class Juego {
  constructor (cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje ();
    this.crearEnemigos ();
    this.inicio = true;
    this.imagen = new Imagenes ();
  }


  dibujar () {
    this.imagen.display ();
    this.personaje.dibujar ();
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i].dibujar();
      if (i < 7 && this.enemigos[i].posy >= 0 - this.enemigos[i].tamañoy && this.enemigos[i].posy < height - this.enemigos[i].tamañoy) {
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
        this.personajePerdio ();
      }
      if (this.personaje.posx > 350 && this.personaje.posy > 350) {
        this.llegaPuntoA();
      }
    }
    fill (0, 255, 0, 50);
    rect (width - 20, height - 20, 20, 20);
  }

  iniciar () {
    this.inicio = true;
  }

  crearPersonaje () {
    this.personaje = new Personaje (10, 10);
  }

  crearEnemigos () {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo (35+i*50, 0);
      if (i > 6) {
        this.enemigos[i] = new Enemigo (380, -300 + i * 50);
      }
      
    }
  }

  teclaPresionada (keyCode) {
    this.personaje.teclaPresionada (keyCode);
  }

  llegaPuntoA () {
    rect (90, 90, 90, 90);
  }

  personajeGano () {
  }

  personajePerdio () {
    this.personaje.morir ();
  }
}
