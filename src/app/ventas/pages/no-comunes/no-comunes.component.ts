import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  nombre: string = 'Aldo';
  genero: string = 'masculino';

  clientes: string[] = ['Karla', 'Alan', 'Aldo', 'María'];

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  }

  clientesMapa = {
    '=0': 'tenemos 0 clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': ' tenemos # clientes esperando'
  }

  cambiarCliente(): void {
    if (this.genero === 'masculino') {
      this.genero = 'femenino';
      this.nombre = 'Karla';
    } else {
      this.genero = 'masculino';
      this.nombre = 'Aldo';
    }
  }

  borrarCliente(): void {
    this.clientes.pop();
  }
}
