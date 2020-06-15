import { Pipe, PipeTransform } from '@angular/core';
import {Clients} from './models/Clients';

@Pipe({
  name: 'rechClient'
})
export class RechClientPipe implements PipeTransform {

  transform(value: Clients[], args: string): Clients[] {
      return  value.filter(cl => cl.nom.includes(args));
  }

}
