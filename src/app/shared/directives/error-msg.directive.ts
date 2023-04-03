import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  private _color: string = '#dc3545';
  private _mensaje: string = 'Completa este campo';

  @Input() set color(value: string){
    this.setColor();
    this._color = value;
  };

  @Input() set mensaje(value: string){
    this.setMessage();
    this._mensaje = value;
  };

  @Input() set valid(value: boolean){
    // si se desea mantener el bloque donde aparece el mensaje y solo se necesita ocultarlo
    // se debe de usar la propiedad visibility = 'hidden' o visibility = 'initial' en vez display

    let display = '';
    value ? display = 'block' : display = 'none';
    this.elementR.nativeElement.style.display = display;

    // TODO: agregar que el input cambie de color
    // console.log(this.elementR.nativeElement.parentElement?.children[1]);
    // const input = document.querySelector('input');
    // console.log(input);
    
    
  };

  @Input() public classList: string = 'form-text';
  
  constructor( private elementR: ElementRef<HTMLElement> ) {}

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setClass();
  }

  setColor(): void {
    // const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.elementR.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.elementR.nativeElement.textContent = this._mensaje;
  }

  setClass(): void {
    let clases = this.classList.split(' ');
    clases.forEach(clase => this.elementR.nativeElement.classList.add(clase));
    this.elementR.nativeElement.style.marginLeft = '16px';
  }

}
