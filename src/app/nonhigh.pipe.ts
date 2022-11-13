import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nonhigh'
})
export class NonhighPipe implements PipeTransform {

  transform(tags: any, ...args: any[]): any {
    const nonhigh = [];
    for (const tag of tags) {
      if (tag.type !== 'HIGH') {
        nonhigh.push(tag);
      }
    }
    return nonhigh;
  }

}
