import { Pipe, PipeTransform } from '@angular/core';
import { RegistroPlatillosModel } from 'src/app/models/RegistroPlatillos';

@Pipe({
  name: 'filtcategoria'
})
export class FiltcategoriaPipe implements PipeTransform {

  transform(Categoria:  RegistroPlatillosModel[], buscar: String): RegistroPlatillosModel[] {
    if (!Categoria || !buscar) {
      return Categoria;
    }

    return Categoria.filter(MenuAntojito =>
      MenuAntojito.strNombre.toLowerCase().indexOf(buscar.toLowerCase()) !== -1);
  }
}
