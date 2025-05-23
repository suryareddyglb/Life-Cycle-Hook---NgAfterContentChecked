import {
  Component,
  AfterContentInit,
  AfterContentChecked,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `<div class="panelTitle">
  <ng-content></ng-content>
</div>`,
})
export class ChildComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild('panelTitle', { static: false }) title!: ElementRef;

  ngAfterContentInit() {
    this.title.nativeElement.style.textTransform = 'uppercase';
    const text = this.title?.nativeElement.textContent;
    console.log('ngAfterContentInit is intilized :', text);
  }

  ngAfterContentChecked() {
    const text = this.title?.nativeElement.textContent;
    console.log('ngAfterContentChecked is intilized :', text);
  }
}
