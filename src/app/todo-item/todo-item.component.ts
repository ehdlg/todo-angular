import { Component, Input } from '@angular/core';
import { TodoType } from '../types';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: ` <li>{{ todo?.title }}</li> `,
  styles: ``,
})
export class TodoItemComponent {
  @Input() todo: TodoType | undefined;
}
