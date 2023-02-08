import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['IronMan','Goku','Vegeta', 'Gohan'];

  heroeB: string = '';
  

  borrarHeroe() {
  this.heroeB = this.heroes.pop() || '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
