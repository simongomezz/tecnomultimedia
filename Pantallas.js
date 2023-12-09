let textos = [ "La ciudad esperaba desde hacía veinte mil años. El planeta se movió en el espacio, y las flores del campo crecieron y cayeron, y la ciudad todavía esperaba. Y los ríos del planeta crecieron y se secaron y se convirtieron en polvo, y la ciudad todavía esperaba. Los vientos, que habían sido impetuosos y jóvenes, se hicieron serenos y viejos, y las nubes del cielo, ayer desgarradas y rotas, flotaron libremente en una perezosa blancura. \nY la ciudad todavía esperaba.",
  " Y en la mitad del año veinte mil la ciudad dejó de esperar. Un cohete apareció en el cielo. El cohete pasó rugiendo sobre la ciudad, giró, volvió, y fue a posarse entre los guijarros del campo, a treinta metros de las paredes oscuras. ¿Qué eran?",
  " Clic-chac-chac-chac. Una máquina de calcular batió como un metrónomo: cinco, seis, siete, ocho, nueve. ¡Nueve hombres! Una instantánea máquina de escribir imprimió el mensaje en una hoja, que desapareció rápidamente entre dos rodillos. Clic-clic-chac-chac.",
  " Uno, tres, cuatro, seis. ¡Seis perros! Descendieron corriendo por la ciudad, olfateando y persiguiéndose unos a otros. Algo pasa, todos frenan de golpe, y se quedan oliendo el piso, algunos más lejos y otros más cerca, hay un olor que los perturba, cada vez más inquietos, el perro capitán decide… ",
  " Siguen olfateando, los más ágiles y eficaces van al frente guiando el camino, suben y bajan, rodean y atraviesan la ciudad dormida, las calles y las plazas… finalmente encuentran lo que habían buscado por tanto tiempo, era una manada de perros, pero no cualquiera, sino que eran gigantes… ",
  " Finaliza un viaje, pero que abrirá otros caminos. ",
  " -La ciudad está muerta, ¿para qué preocuparse? \n-No se puede saber –dice Smith- Creo que deberíamos volver al cohete, capitán\n-Soy yo quien da las órdenes, señor Smith. \n-Sí, señor. ",
  " Seis perros, en una manada de al menos, 50 perros gigantes, podría haber resultado catastrófico, pero esta raza era bastante amigable y ahora nuestros viajeros tienen un nuevo hogar.",
  " …Las Orejas despertaron y escucharon… La Nariz se movió y estudió el aire, como un catador que probase un viejo vino… las calles eran como lenguas. Chic-chic-chac-clic. Los humanos eran como peones de ajedrez continuando su marcha…Ahora los nublados Ojos de la ciudad se despojaron de sus nieblas y sus brumas. ¿Qué es lo que ven?",
  " El aroma que emerge de las plantas, dulce y sutil, el viento que rosa con sus mejillas y el cálido calor que emiten los cuerpos uno al lado del otro, encuentran este momento de tranquilidad… pero es momento de decidir que van a hacer",
  " Después de varios días de disfrutar la ciudad dormida, comenzaron a sentir efectos secundarios, desde el centro de la ciudad se expande por las calles un humo verde tóxico lleno de diferentes gases, poco a poco, van cayendo…",
  " -¡Capitán, las ventanas! Las ventanas de ese edificio. ¡Ese! ¡Se movieron! \n-No vi nada. \n-Sí. Cambiaron de color. Antes eran oscuras. Son claras ahora \n-Siga adelante. \n-Yo me vuelvo, señor. \n-¿Cómo? \n-Me vuelvo al cohete. \n-¡Smith! \n-¡No quiero caer en una trampa! \n-¿Tiene miedo de una ciudad desierta? Los otros se rieron, incómodos.",
  " La ciudad, después de haber escuchado, observado, gustado. sentido, pesado y comparado, tenía que realizar un último examen. \n En medio de la calle se abrió una trampa. El capitán, lejos de los otros, que corrían detrás de Smith, desapareció. ",
  " Y en el subterráneo eléctrico, la Mente, al fin, sacaba el total definitivo, y toda la maquinaria hacía un alto monstruoso y momentáneo. El total. Rápido. Sobre la mesa roja, en el cuerpo abierto y vacío del capitán, otras manos empezaron a agitarse, en sólo un instante el capitán reapareció en la calle. \n Un disparo, ¿quién muere? ",
  " Smith se da vuelta y ve toda la situación, sus compañeros corriendo detrás de él, la muerte del capitán, el miedo le recorría el cuerpo, y a pesar de que eso que se acercaba a él podía parecer su capitán, no lo era, junta fuerzas y… dispara. ",
  " Smith cayó con una bala en el corazón. \n Escúchenme -dijo el capitán-. Tengo que decirles algo muy importante. Ya no soy vuestro capitán. Ya no soy un hombre. Los hombres retrocedieron. -Soy la ciudad -dijo la voz. He esperado doscientos siglos. ¡Al fin habéis llegado! La venganza será total.La ciudad se estremeció. Las piedras de la calle se apartaron y los hombres cayeron gritando. Y vieron, mientras caían, unas brillantes navajas que se apresuraban a recibirlos.",
  " Nueve hombres introdujeron en el cohete las bombas de gérmenes patógenos. -Arrojaremos estas bombas sobre la Tierra.El cohete se perdió en el cielo. Lentamente, apaciblemente, la ciudad disfrutó del placer de morir.",
  " Estos son nuestros enemigos. El total es definitivo. Estos son los hombres de los que queremos vengarnos, de un planeta llamado Tierra, que hace veinte mil años declaró la guerra a Taollan, que nos esclavizó y nos arruinó y nos destruyó con una peste mortífera. Luego se fueron a vivir a otra galaxia, escapando a esa muerte que habían diseminado entre nosotros. Olvidaron aquella guerra, aquellos días, Nos olvidaron. Pero nosotros no olvidamos. Ha terminado nuestra espera. \nEl nombre de esta ciudad ha sido y es Venganza, en el planeta de las Sombras, a orillas del mar de los Siglos, al pie de la montaña de la Muerte."
  ]
  class Pantallas {
  constructor () {
    this.load ();
  }

  load () {
    this.fondos = [];
    for (let i = 0; i < 19; i++) {
      this.fondos [i] = loadImage ("data/ciudad" + i + ".jpg");
    }
  }

  displayfondo (num, alto, t) {
    image (this.fondos [num], 0, 0, 500, 500);
    noStroke();
    fill (0, 200);
    rect (20, 20, 460, alto, 30);
    fill (255);
    text (textos [t], 40, 20, 420, alto);
  }
  displaytextos () {
  }/*
  
   */
}
