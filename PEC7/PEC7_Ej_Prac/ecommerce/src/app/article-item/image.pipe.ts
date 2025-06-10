import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'defaultPhoto'
})

export class ImagePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if (value === '') {
            return 'assets/images/default.jpg'
        }
        else return value;
    }
}