import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg > 10000)
      return "CODE20 (20% off)";
    else if (arg > 8000)     
      return "CODE10 (10% off)" ;
    else  
      return "CODE5 (5% off)" ;
  }

}
