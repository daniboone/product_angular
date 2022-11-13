import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'high'
})
export class HighPipe implements PipeTransform {

  transform(tags: any, ...args: any[]): any {
    const highs = [];
    for (const tag of tags) {
      if (tag.type === 'HIGH') {
        const high: any = {};
        high.id = tag.id;
        high.name = 'a ' + tag.name;
        high.type = tag.type;
        highs.push(high);
      }
    }
    return highs;
  }
}
