import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converttospace'
})
export class ConverttospacePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
