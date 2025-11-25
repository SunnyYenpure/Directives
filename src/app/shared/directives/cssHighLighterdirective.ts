import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[basiccss]',
})
export class cssHighLighterdirective implements OnInit {
  constructor(private _eleRef: ElementRef) {}
  ngOnInit(): void {
    // console.log('csshighlighter bind..!!!1')
    console.log(this._eleRef.nativeElement);
    console.log(this._eleRef);
    this._eleRef.nativeElement.style.backgroundColor = 'orange';
    this._eleRef.nativeElement.style.color = '#fff';
    this._eleRef.nativeElement.style.padding = '10px';
  }
}
