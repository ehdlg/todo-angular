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
    <app-todo-item [todo]="todo" (removeEmitter)="removeTodo($event)" />
    }
    <app-todo-form (todoEmitter)="addTodo($event)" />
  `,
  styles: ``,
})
export class TodoComponent {
  todos: TodoType[] = [
    {
      title: 'First todo!',
      id: crypto.randomUUID(),
    },
    {
      title: 'Another todo!',
      id: crypto.randomUUID(),
    },
  ];

  addTodo(title: TodoType['title']) {
    this.todos.push({
      title,
      id: crypto.randomUUID(),
    });
  }

  removeTodo(id: TodoType['id']) {
    this.todos = this.todos.filter((todo) => {
      return todo.id !== id;
    });
  }
}
