import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form #todoForm="ngForm">
      <label for="todo-title">
        <input type="text" name="newTodo" [(ngModel)]="newTodo" />
        {{ newTodo }}
      </label>
    </form>
  `,
  styles: ``,
})
export class TodoFormComponent {
  newTodo: string = '';
}
