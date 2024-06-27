import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form #todoForm="ngForm" (ngSubmit)="onSubmit()">
      <label for="todo-title">
        <input type="text" name="newTodo" required [(ngModel)]="newTodo" />
        {{ newTodo }}
      </label>
      <button type="sumbit" [disabled]="newTodo.length < 1">
        Add new todo
      </button>
    </form>
  `,
  styles: ``,
})
export class TodoFormComponent {
  @Output() todoEmitter = new EventEmitter<string>();
  newTodo: string = '';

  onSubmit() {
    this.todoEmitter.emit(this.newTodo);
  }
}
