import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({

})
export class PricePipe implements PipeTransform {
  transform(input: Keg[], args) {
    return input;
  }
}
