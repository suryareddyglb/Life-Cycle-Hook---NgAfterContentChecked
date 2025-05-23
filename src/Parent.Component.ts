import { Component } from '@angular/core';
import { ChildComponent } from './Child.Component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  template: `<input [(ngModel)]="title" placeholder="Enter title" />
  <button (click)="updateTitle()">Update Title</button>
  <app-child>
    <h3 #panelTitle>{{ title }}</h3>
  </app-child>`,
})
export class ParentComponent {
  title!: string;

  updateTitle() {
    this.title = this.title + '!';
  }
}
