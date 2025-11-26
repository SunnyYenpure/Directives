import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToLowercase]'
})
export class ToLowercaseDirective {

  constructor(

    private _eleref:ElementRef,
    private _renderer:Renderer2
  ) { }


  @HostListener('keyup')
  onkeyup(){
    let val:string=this._renderer.selectRootElement(this._eleref.nativeElement).value
    console.log(val)
    this._renderer.selectRootElement(this._eleref.nativeElement).value=val.toLowerCase()
     this._renderer.setStyle(this._eleref.nativeElement, 'color', 'black');
     this._renderer.setStyle(this._eleref.nativeElement, 'background-color', '#FFFDD0');
    this._renderer.setStyle(this._eleref.nativeElement, 'padding', '20px');
  }
}
