import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    
    console.log(value);
    if (!value || !args) {
      return value;
    }
    
    return value.filter((obj:string) => obj.includes(args));
  }

}