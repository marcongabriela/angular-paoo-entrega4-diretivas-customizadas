import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, Host } from '@angular/core';

@Directive({
  selector: '[appCursoDiretiva]',
  exportAs: 'bordaNoTexto'
})
export class CursoDiretivaDirective {

// background-clip: padding-box;
@HostBinding ('style.border-style') borda: string;
 @Input ('appCursoDiretiva') bordaEntrada: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2 )
  {

   }

}
