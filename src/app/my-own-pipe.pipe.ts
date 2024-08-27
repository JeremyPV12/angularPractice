import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myOwnPipe',
  standalone: true
})
export class MyOwnPipePipe implements PipeTransform {

  transform(value: string | undefined ): string {
    return value?.toUpperCase() || "";
  }

}
