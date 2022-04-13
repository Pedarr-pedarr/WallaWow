import {Pipe, PipeTransform} from '@angular/core';

import {Item} from "../../models/item";


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(values: Item[], search: string, allowedParameters: string[]): Item[] {
    if (!search || search.length === 0) {
      return values;
    }

    // title, description, price or email
    return values.filter((item: Item) =>
      ((allowedParameters.includes('title')) ? item.title.toLowerCase().includes(search.toLowerCase()) : true) ||
      ((allowedParameters.includes('description')) ? item.description.toLowerCase().includes(search.toLowerCase()) : true) ||
      ((allowedParameters.includes('email')) ? item.email.toLowerCase().includes(search.toLowerCase()) : true) ||
      ((allowedParameters.includes('price')) ? item.price.toLowerCase().includes(search.toLowerCase()) : true )
    )}
}
