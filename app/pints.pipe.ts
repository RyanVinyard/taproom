import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "pints",
  pure: false

})
export class PintsPipe implements PipeTransform {
  transform(input: Keg[], desiredLowness) {
    var output: Keg[] = [];
    if(desiredLowness === "notLow") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints > 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLowness === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
