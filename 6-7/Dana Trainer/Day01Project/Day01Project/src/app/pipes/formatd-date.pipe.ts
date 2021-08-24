import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdDate'
})
export class FormatdDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const data=new Date(value);
    //day/month/year 
    const formtdate=`${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()} ${args[0]} ${args[1]}`
    return formtdate;
  }

}
