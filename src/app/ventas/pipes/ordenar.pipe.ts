import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], ordenarPor:string = ''): Heroe[] {
    switch(ordenarPor) {
      case 'nombre': 
        return heroes.sort((a, b) => {
          if (a.nombre > b.nombre) return 1;
          if (a.nombre < b.nombre) return -1;
          return 0;
        });
      case 'vuela': 
        return heroes.sort((a, b) => {
          if (a.vuela > b.vuela) return 1;
          if (a.vuela < b.vuela) return -1;
          return 0;
        });
      case 'color': 
        return heroes.sort((a, b) => {
          if (a.color > b.color) return 1;
          if (a.color < b.color) return -1;
          return 0;
      });
      default:
        return heroes;
    }
  }
}
