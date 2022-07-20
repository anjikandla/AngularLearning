import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], value: any) {
    console.log(list);
    console.log(value);
    return value ? list.filter((item) => {
      let rVal = item.id||  item.name;
      return rVal;
    }) : list;
  }

}
