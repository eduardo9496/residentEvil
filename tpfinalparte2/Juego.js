class Juego {
  constructor() {
    this.personaje=new Personaje();
    this.paisaje=new Paisaje();
    this.obstaculo=new Obstaculo();
    this.portal=new Portal();
    this.enemigos=[];
    for (let i=0; i<10; i++) {
      this.enemigos[i]= new Enemigo( random(1400, 400), random(200, height - 100) );
    }
  }

  dibujar() {
    this.paisaje.dibujar();
    this.personaje.dibujar();
    this.personaje.mover();
    this.personaje.colisionPared(this.obstaculo);
    this.obstaculo.dibujar();
    for (let i=0; i<10; i++) {
      this.enemigos[i].dibujar();
    }
    this.controlDeDisparo();
    this.portal.dibujar();
  }
//verifica si se preciono click
  clickDisparo() {
    this.personaje.clickDisparo();
  }
//creacion disparo
  controlDeDisparo() {
    if (this.personaje.haDisaparado()) {
      for (let i=0; i<10; i++) {
        this.enemigos[i].colicionoBala(this.personaje.bala);
      }
    }
  }
//verificacion si el personaje llego al portal
  personajeLlego() {
    return this.personaje.x > this.portal.posX
  }
  //mis coliciones contra los enemigos
  personajeColiciono() {
    for (let i = 0; i < 10; i++) {
      if (this.enemigos[i].vida) {
        if (this.personaje.x < this.enemigos[i].posX + 80 &&
          this.personaje.x + 80 > this.enemigos[i].posX &&
          this.personaje.y < this.enemigos[i].posY + 80 &&
          this.personaje.y + 80 > this.enemigos[i].posY) {
          return true;
        }
      }
    }
    return false;
  }
}
