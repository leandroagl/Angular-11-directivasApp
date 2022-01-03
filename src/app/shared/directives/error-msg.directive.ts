import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _mensaje: string = "Aqui va el mensaje";
  private _color  : string = "red";

  htmlElement: ElementRef<HTMLElement>

  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
  }

  @Input() set mensaje(valor:string) {
    this.htmlElement.nativeElement.innerHTML = valor;
  }

  @Input() set valid(valor:boolean) {
    if ( valor ) {
      this.htmlElement.nativeElement.classList.add('hidden')
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden')
    }
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje():void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
