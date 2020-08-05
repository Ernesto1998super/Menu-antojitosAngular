import { Pipe, PipeTransform } from '@angular/core';
import { MenuAntojitosModel } from '../models/MenuAntojitos';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(MenuAntojitos:  MenuAntojitosModel[], buscar: String): MenuAntojitosModel[] {
    if (!MenuAntojitos || !buscar) {
      return MenuAntojitos;
    }

    return MenuAntojitos.filter(MenuAntojito =>
      MenuAntojito.strNombre.toLowerCase().indexOf(buscar.toLowerCase()) !== -1);
  }
}
