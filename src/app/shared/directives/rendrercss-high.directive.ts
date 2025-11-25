import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendrercssHigh]',
})
export class RendrercssHighDirective implements OnInit {
  constructor(private _rendrer: Renderer2, private _eleRef: ElementRef) {}

  // byusing style props:-
  ngOnInit(): void {
    // this._rendrer.setStyle(this._eleRef.nativeElement,'background-color',"blueviolet")
    // this._rendrer.setStyle(this._eleRef.nativeElement,'color',"white")
    // this._rendrer.setStyle(this._eleRef.nativeElement,'padding',"20px")

    // byusing classs :-

    this._rendrer.addClass(this._eleRef.nativeElement, 'alert');
    this._rendrer.addClass(this._eleRef.nativeElement, 'alert-info');

    setTimeout(() => {
      this._rendrer.removeClass(this._eleRef.nativeElement, 'alert');
      this._rendrer.removeClass(this._eleRef.nativeElement, 'alert-info');
    }, 5000);
  }
}

// example:2

@Directive({
  selector: '[appRendrercssHigh2]',
})
export class RendrercssHighDirective2 implements OnInit {
  constructor(private _rendrer: Renderer2, private _eleRef: ElementRef) {}

  ngOnInit(): void {
    //  this._rendrer.setStyle(this._eleRef.nativeElement,'background-color',"hotpink")
    //  this._rendrer.setStyle(this._eleRef.nativeElement,'color',"black")
    //  this._rendrer.setStyle(this._eleRef.nativeElement,'padding',"20px")

    this._rendrer.addClass(this._eleRef.nativeElement, 'alert');
    this._rendrer.addClass(this._eleRef.nativeElement, 'alert-danger');
  }
}

// exapmple:3

@Directive({
  selector: '[appRendrercssHigh3]',
})
export class RendrercssHighDirective3 implements OnInit {
  constructor(private _rendrer: Renderer2, private _eleRef: ElementRef) {}

  ngOnInit(): void {
    this._rendrer.setStyle(
      this._eleRef.nativeElement,
      'background-color',
      'red'
    );
    this._rendrer.setStyle(this._eleRef.nativeElement, 'color', 'black');
    this._rendrer.setStyle(this._eleRef.nativeElement, 'padding', '10px');
  }
}

// example:4

@Directive({
  selector: '[appRendrercssHigh4]',
})
export class RendrercssHighDirective4 implements OnInit {
  constructor(private _rendrer: Renderer2, private _eleRef: ElementRef) {}

  ngOnInit(): void {
    this._rendrer.addClass(this._eleRef.nativeElement, 'alert');
    this._rendrer.addClass(this._eleRef.nativeElement, 'alert-dark');

    setTimeout(() => {
      this._rendrer.removeClass(this._eleRef.nativeElement, 'alert');
      this._rendrer.removeClass(this._eleRef.nativeElement, 'alert-dark');
    }, 5000);
  }
}

// example:5

@Directive({
  selector: '[appRendrercssHigh5]',
})
export class RendrercssHighDirective5 implements OnInit {
  constructor(private _rendrer: Renderer2, private _eleRef: ElementRef) {}

  ngOnInit(): void {
    this._rendrer.setStyle(
      this._eleRef.nativeElement,
      'background-color',
      'aqua'
    );
    this._rendrer.setStyle(this._eleRef.nativeElement, 'color', 'black');
    this._rendrer.setStyle(this._eleRef.nativeElement, 'padding', '20px');
  }
}
