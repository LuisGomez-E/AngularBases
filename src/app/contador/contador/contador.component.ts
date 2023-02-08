import {Component} from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
        <h1>hola perros</h1>
        <h2>{{titulo}}</h2>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="operacion(base)"> + {{base}}</button>
        <span> {{numero}} </span>
        <button (click)="operacion(-base)"> - {{base}}</button>
    `
})
export class contadorComponent {
    public titulo: string = 'Contador APP';

    numero: number = 0;
    base: number = 5;
  
    operacion(n: number) {
      this.numero +=  n
    }
}