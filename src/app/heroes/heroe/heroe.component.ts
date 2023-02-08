import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class heroreComponent {
    nombre: string = 'IronMan';
    edad: number = 45;

    get nombreC(): string {
       return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return `${this.nombre} - ${this.edad}`;
    }

    CambiarNombre():void {
        this.nombre = 'SpiderMen';
    }

    CambiarEdad():void {
        this.edad= 20;
    }

}