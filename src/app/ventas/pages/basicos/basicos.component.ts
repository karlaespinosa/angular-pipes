import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreUpper: string = 'karla vanessa';
  nombreLower: string = 'KARLA VANESSA';
  nombreTitle: string = 'KaRLa vaNESSa EspINOSA';
  fecha: Date = new Date();
}
