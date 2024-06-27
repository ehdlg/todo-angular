import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoType } from '../types';
import { TodoFormComponent } from '../todo-form/todo-form.component';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoItemComponent, TodoFormComponent],
  template: `
    @for(todo of todos; track todo.id){
    <app-todo-item [todo]="todo" />
    }
    <app-todo-form />
  `,
  styles: ``,
})
export class TodoComponent {
  todos: TodoType[] = [
    {
      title: 'First todo!',
      id: 1,
    },
    {
      title: 'Another todo!',
      id: 2,
    },
  ];

  addTodo(newTodo: TodoType) {
    this.todos.push(newTodo);
  }
}
