class Personaje {
  constructor() {
    this.x = 10;
    this.y = 320;
    this.alto= 100;
    this.ancho= 100;
    this.tamano= 20;
    this.velocidadY = 0;
    this.gravedad = 0.5;
    this.enSuelo = true;
    this.soldado=[];
    this.cargarSprites();
    this.frame=0;
    this.bala= new Bala();
  }

  cargarSprites() {
    for (let i=0; i<5; i++) {
      this.soldado[i]= loadImage("data/per"+i+".png")
    }
  }

  dibujar() {
    this.bala.dibujar();
    image(this.soldado[this.frame], this.x - 20, this.y -90, this.ancho, this.alto);
  }

  mover() {
    if (keyIsPressed) {
      if (key === 'a') {
        this.x -= 5;
      }
      if (key === 'd') {
        this.x += 5;
        if (frameCount % 11 === 0) {
          this.frame = (this.frame + 1) % this.soldado.length;
        }
      }
    }
    // Gravedad y salto
    this.y += this.velocidadY;
    this.velocidadY += this.gravedad;
    // Evitar que caiga fuera de la pantalla
    if (this.y >= height - this.tamano) {
      this.y = height - this.tamano;
      this.velocidadY = 0;
      this.enSuelo = true;
    }

    if (keyIsPressed) {
      if (key === ' ' || key === 'w') { // Espacio para saltar
        this.saltar();
      }
    }
  }

  saltar() {
    if (this.enSuelo) {
      this.velocidadY = -14; // Impulso hacia arriba
      this.enSuelo = false;
    }
  }

  colisionPared(obstaculo) {
    this.enSuelo = false;
    if ( this.x + this.tamano > obstaculo.posX && this.x < obstaculo.posX + obstaculo.ancho && 
      this.y + this.tamano >= obstaculo.posY && this.y <= obstaculo.posY || 
      this.x + this.tamano > obstaculo.posX2 && this.x < obstaculo.posX2 + obstaculo.ancho &&
      this.y + this.tamano >= obstaculo.posY && this.y <= obstaculo.posY ||
      this.x + this.tamano > obstaculo.posX3 && this.x < obstaculo.posX3 + obstaculo.ancho && 
      this.y + this.tamano >= obstaculo.posY && this.y <= obstaculo.posY 
      ) {
      this.y = obstaculo.posY - this.tamano;
      this.velocidadY = 0;
      this.enSuelo = true;
      return obstaculo.estoyArriba= this.enSuelo;
    } else {
      return obstaculo.estoyArriba= false;
    }
  }

  clickDisparo() {
    if (mouseButton === LEFT ) {
      this.dispararBala();
    }
  }

  dispararBala() {
    this.bala= new Bala(this.x, this.y);
    this.bala.disparar();
  }

  haDisaparado() {
    return this.bala.disparar;
  }
}
