import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWords'
})
export class LimitWordsPipe implements PipeTransform {

  transform(value?: string): string {
    return value?.split(" ").splice(0,10).join(" ")+"...";
  }

}
