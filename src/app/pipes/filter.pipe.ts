import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<string>, args?: any): any {
    return value.filter((obj:string) => obj.startsWith(args[0]));
  }

}