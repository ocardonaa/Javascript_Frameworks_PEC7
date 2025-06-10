import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formatPrice'
})

export class PricePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return parseFloat(value).toFixed(2) + '€';
    }
}