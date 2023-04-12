import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRowHighlight]'
})
export class RowHighlightDirective implements OnInit {


  @Input() defaultFlag = false;
  @Input() defaultColor = '';
  thisElement: any
  
  constructor(private el: ElementRef) {
    this.highlight('');
  }

  ngOnInit(): void {
    if (this.defaultFlag) {
      this.highlight(this.defaultColor);
    }
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }



}
