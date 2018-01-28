import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Button]'
})

export class ButtonDirective{
	constructor(el:ElementRef) {
		el.nativeElement.style.color = 'black';
		el.nativeElement.style.fontSize = '30px';
		el.nativeElement.style.border = '1px solid black';
		el.nativeElement.style.margin = '50px, 100px';
  }
}