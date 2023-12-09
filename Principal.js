class Principal {
  constructor () {
    this.fondo = new Pantallas ();
    this.bot0 = new Botones (200, 440, 100, 40); //boton central/reinicio
    this.bot1 = new Botones (20, 420, 140, 50); //boton izquierda
    this.bot2 = new Botones (340, 420, 140, 50); //boton derecha
    this.bot3 = new Botones (100, 430, 300, 50); //boton juegos
    this.escena = 20;
    this.objJuego = new Juego (13, 3, 2, 0, 4);
    this.objJuegoperros = new Juego (13, 8, 5, 6, 7);
    this.jueguito = new Jueguito (30);
  }

  dibujar () {
    if (this.escena === 20) { // Portada
      this.fondo.displayfondo (18);
      this.bot0.dibujarboton (20, 0, "Inicio");
    }
    if (this.escena === 0) { // Imagen 0: Ciudad.
      this.fondo.displayfondo (0, 120, 0);
      this.bot1.dibujarboton (0, 1, "aterrizar");
    }
    if (this.escena === 1) { // Imagen 1: Cohete.
      this.fondo.displayfondo (1, 100, 1);
      this.bot1.dibujarboton (1, 3, "perros");
      this.bot2.dibujarboton (1, 2, "humanos");
    }
    if (this.escena === 2) { // Imagen 2: Conjunto de hombres.
      this.fondo.displayfondo (2, 80, 2);
      this.bot1.dibujarboton (2, 6, "continuar");
    }
    if (this.escena === 3) { // Imagen 3: Encuentran perros
      this.fondo.displayfondo (3, 80, 3);
      this.bot1.dibujarboton (3, 5, "volver al cohete");
      this.bot2.dibujarboton (3, 4, "seguir el olor");
    }
    if (this.escena === 4) { //  Imagen 4: perros
      this.fondo.displayfondo (4, 80, 4);
      this.bot1.dibujarboton (4, 19, "ir al juego");
    }
    if (this.escena === 5) { // Imagen 5: Fin. Cohete.
      this.fondo.displayfondo (5, 28, 5);
      this.bot0.dibujarboton (5, 20, "Inicio");
    }
    if (this.escena === 6) { // Imagen 6: Smith y cap.
      this.fondo.displayfondo (6, 90, 6);
      this.bot1.dibujarboton (6, 5, "volvemos al cohete");
      this.bot2.dibujarboton (6, 8, "investigamos la ciudad");
    }
    if (this.escena === 7) { // Imagen 7: Perros juntos
      this.fondo.displayfondo (7, 60, 7);
      this.bot0.dibujarboton (7, 20, "reiniciar");
    }
    if (this.escena === 8) { // Imagen 8: Ciudad
      this.fondo.displayfondo (8, 90, 8);
      this.bot1.dibujarboton (8, 9, "atardecer");
      this.bot2.dibujarboton (8, 11, "ventanas");
    }
    if (this.escena === 9) { // Imagen 9: atardecer
      this.fondo.displayfondo (9, 70, 9);
      this.bot1.dibujarboton (9, 5, "cohete");
      this.bot2.dibujarboton (9, 10, "se quedan");
    }
    if (this.escena === 10) { // Imagen 10: mueren
      this.fondo.displayfondo (10, 60, 10);
      this.bot0.dibujarboton (10, 20, "reiniciar");
    }
    if (this.escena === 11) { // Imagen 11: Smith corre
      this.fondo.displayfondo (11, 170, 11);
      this.bot1.dibujarboton (11, 12, "lo siguen");
      this.bot2.dibujarboton (11, 18, "smith escapa");
    }
    if (this.escena === 12) { // JUEGO b
      this.jueguito.dibujar();
      this.jueguito.teclapresionada (keyCode);
     if (this.jueguito.perder === true) {
        this.bot3.dibujarboton (12, 13, " el capitán se transforma en la ciudad ");
      }
      //this.fondo.displayfondo (12,80,12);
      // this.bot1.dibujarboton (12, 5, "escapaste al cohete");
      // this.bot2.dibujarboton (12, 13, "el cap muere");
    }
    if (this.escena === 13) { // Imagen 13: El capitan revive.
      this.fondo.displayfondo (13, 95, 13);
      this.bot1.dibujarboton (13, 14, "capitan");
      this.bot2.dibujarboton (13, 15, "smith");
    }
    if (this.escena === 14) { // Imagen 14: Smith mata al capitan.
      this.fondo.displayfondo (14, 80, 14);
      this.bot1.dibujarboton (14, 5, "cohete");
    }
    if (this.escena === 15) { // Imagen 15: Mueren todos y el planeta.
      this.fondo.displayfondo (15, 120, 15);
      this.bot1.dibujarboton (15, 16, "continuar");
    }
    if (this.escena === 16) { // Imagen 16: Envian en el cohete bombas a la tierra.
      this.fondo.displayfondo (16, 80, 16);
      this.bot0.dibujarboton (16, 17, "¿Por que?");
    }
    if (this.escena === 17) { // Imagen 17: Fin. ¿Por qué la ciudad es asesina?.
      this.fondo.displayfondo (17, 150, 17);
      this.bot0.dibujarboton (17, 20, "reiniciar");
    }
    if (this.escena === 18) { // JUEGO a
      this.objJuego.dibujar ();
      this.objJuego.teclaPresionada (keyCode);
      if (this.objJuego.ganar === true) {
        this.bot3.dibujarboton (18, 5, "ganaste");
      }
      // this.bot1.dibujarboton (18, 5, "ganaste");
      // this.bot2.dibujarboton (18, 6, "perdiste");
    }
    if (this.escena === 19) { // Escena 17, Imagen 17: Fin. ¿Por qué la ciudad es asesina?.
      background (200, 300, 40);
      this.objJuegoperros.dibujar ();
      this.objJuegoperros.teclaPresionada (keyCode);
      if (this.objJuegoperros.ganar === true) {
        this.bot3.dibujarboton (19, 7, "ganaste");
      }
      //this.bot1.dibujarboton (19, 7, "ganaste");
      //this.bot2.dibujarboton (19, 19, "perdiste");
    }
    //text("Pantalla "+ this.escena, width/2, 280); // para saber en q pantalla estamos
  }


  presionaboton () {
    if (this.bot0.arribaboton () && this.escena === this.bot0.estoy) {
      this.escena = this.bot0.voy;
    }
    if (this.bot1.arribaboton () && this.escena === this.bot1.estoy) {
      this.escena = this.bot1.voy;
    }
    if (this.bot2.arribaboton () && this.escena === this.bot2.estoy) {
      this.escena = this.bot2.voy;
    }
    if (this.bot3.arribaboton () && this.escena === this.bot3.estoy) {
      this.escena = this.bot3.voy;
    }
  }
}
