import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <app-todo />
  `,
  styles: [],
})
export class AppComponent {
  title = 'todo-angular';
}
