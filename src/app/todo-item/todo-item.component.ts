import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoType } from '../types';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `
    @if(todo){
    <li (click)="removeTodoEvent(todo.id)">{{ todo.title }}</li>
    }
  `,
  styles: ``,
})
export class TodoItemComponent {
  @Input() todo: TodoType | undefined;
  @Output() removeEmitter = new EventEmitter<TodoType['id']>();

  removeTodoEvent(todoId: TodoType['id']) {
    this.removeEmitter.emit(todoId);
  }
}
