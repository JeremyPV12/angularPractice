import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstyleBrother]',
  standalone: true
})
export class EstyleBrotherDirective {

  constructor( private element: ElementRef ) {
    this.element.nativeElement.classList.add('bg-blue-900');
    
  }


}
