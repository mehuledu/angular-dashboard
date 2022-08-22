import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, args: string, filterMetadata?: any): Array<any> {
    if (!value)
      return [];

    if (!args) {
      return value;
    }

    let filterVal = value.filter((obj: string) => obj.toLowerCase().includes(args.toLowerCase()));
    filterMetadata.count = filterVal.length;
    return filterVal;
  }
}