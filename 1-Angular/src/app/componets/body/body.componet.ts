import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.componet.html'
})
export class BodyComponet {

  mostrar:boolean = true;
  frase:any = {
    mensaje: 'Un gran poder conlleva una gran responsabilidad',
    autor: 'Ben Parker'
  }

  personajes:string[] = ['SpiderMan', 'Venom', 'Dr. Octupus'];

  mostrarMensaje(mostrar){
    this.mostrar = mostrar;
  }
}