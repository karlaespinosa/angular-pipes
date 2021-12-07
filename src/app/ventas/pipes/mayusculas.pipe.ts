import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, toUpperCaseVal: boolean = true): string {
    return toUpperCaseVal ?  value.toUpperCase() : value.toLocaleLowerCase();
  }
}
