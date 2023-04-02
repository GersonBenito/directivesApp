import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  @Input() public color: string = '#dc3545';
  @Input() public mensaje: string = 'Completa este campo';
  @Input() public classList: string = 'form-text';
  
  constructor( private elementR: ElementRef<HTMLElement> ) {}

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setClass();
  }

  setColor(): void {
    // const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.elementR.nativeElement.style.color = this.color;
    this.elementR.nativeElement.style.marginLeft = '16px';
  }

  setMessage(): void {
    this.elementR.nativeElement.textContent = this.mensaje;
  }

  setClass(): void {
    let clases = this.classList.split(' ');
    clases.forEach(clase => this.elementR.nativeElement.classList.add(clase));
  }

}
