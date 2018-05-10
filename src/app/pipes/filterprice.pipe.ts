import { Pipe, PipeTransform } from '@angular/core';
import { course } from '../course';


@Pipe({
  name: 'filterprice'
})
export class FilterpricePipe implements PipeTransform {

  transform(courses: any, pricetype: any): any {
    let temp: course[] = [];

    for(let course in courses) {
      if(course[course].priee >= 0 && pricetype == "Highly priced")
        temp.push(courses[course]);
    }

  }

}
