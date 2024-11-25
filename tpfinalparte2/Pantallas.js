class Pantalla {
  constructor() {
    this.estado= "inicio";
    this.cargarImagenes();
    this.juego=new Juego();
  }

  cargarImagenes() {
    this.portada= loadImage("data/portada.png");
    this.credito= loadImage("data/creditos.png");
    this.intrucciones= loadImage("data/creditos.png");
    this.juego= loadImage("data/portada.png");
    this.btnJugar= loadImage("data/btnJugar.png");
    this.btnCreditos= loadImage("data/btnCreditos.png");
    this.btnInstrucciones= loadImage("data/btnInstrucciones.png");
    this.btnVolver= loadImage("data/btnVolver.png");
    this.btnReiniciar= loadImage("data/btnReiniciar.png");
  }

  dibujar() {
    if (this.estado === "inicio") {
      this.pantallaInicio();
    } else if (this.estado === "creditos") {
      this.pantallaCreditos();
    } else if (this.estado === "juego") {
      this.pantallaJuego();
    } else if (this.estado === "instrucciones") {
      this.pantallaInstrucciones();
    }

    if (this.estado === "gano") {
      this.pantallaGano();
    }

    if (this.estado === "perdio") {
      this.pantallaPerdio();
    }
  }

  pantallaInicio() {
    image(this.portada, 0, 0, width, height);
    image(this.btnJugar, 275, 350, 100, 100);
    image(this.btnCreditos, 400, 350, 150, 80);
    image(this.btnInstrucciones, 100, 350, 150, 80);
  }

  pantallaCreditos() {
    image(this.credito, 0, 0, width, height);
    image(this.btnVolver, 280, 380, 100, 100);
  }

  pantallaInstrucciones() {
    background(155);
    image(this.credito, 0, 0, width, height);
    image(this.btnVolver, 280, 380, 100, 100);
  }

  pantallaJuego() {
    if (this.estado === "juego") {
      this.juego.dibujar();
      if (this.juego.personajeLlego()) {
        this.estado="gano";
      }
      if (this.juego.personajeColiciono()) {
        this.estado="perdio";
      }
    }
  }

  pantallaGano() {
    background(0);
    fill(255);
    textSize(60);
    text("ganaste", 200, 200);
    image(this.btnReiniciar, 280, 380, 100, 100);
  }

  pantallaPerdio() {
    background(0);
    fill(255);
    textSize(60);
    text("perdiste", 200, 200);
    image(this.btnReiniciar, 280, 380, 100, 100);
  }

  mousePresionado() {
    if (this.estado === "inicio") {

      if (mouseX > 275 && mouseX < 275+100 && mouseY > 350 && mouseY < 350+100) {
        this.estado = "juego";
        sonidoFondo.play();
      }

      if (mouseX > 400 && mouseX < 400+150 && mouseY > 350 && mouseY < 350+80) {
        this.estado = "creditos";
      }

      if (mouseX > 100 && mouseX < 100+150 && mouseY > 350 && mouseY < 350+80) {
        this.estado = "instrucciones";
      }
    } else if (this.estado === "creditos") {

      if (mouseX > 280 && mouseX < 280+100 && mouseY > 350 && mouseY < 350+80) {
        this.estado = "inicio";
      }
    } else if (this.estado === "instrucciones") {
      if (mouseX > 280 && mouseX < 280+100 && mouseY > 350 && mouseY < 350+80) {
        this.estado= "inicio";
      }
    } else if (this.estado === "gano") {
      if (mouseX > 280 && mouseX < 280+100 && mouseY > 350 && mouseY < 350+80) {
        this.reiniciarJuego() ;
      }
    } else if (this.estado === "perdio") {
      if (mouseX > 280 && mouseX < 280+100 && mouseY > 350 && mouseY < 350+80) {
        this.reiniciarJuego() ;
      }
    }

    if (this.estado === "juego") {
      this.juego.clickDisparo();
    }
  }

  reiniciarJuego() {
    this.juego = new Juego();
    this.estado = "inicio";
  }
}
