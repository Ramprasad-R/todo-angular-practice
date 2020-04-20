import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // console.log('Delete:', todo);
    this.todoService.deleteTodo(todo).subscribe((res) => {
      console.log('Delete:', todo);
      console.log('inside http callback', res);
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }

  addTodo(todo) {
    console.log('add todo:', todo);
    this.todoService.addTodo(todo).subscribe((res) => {
      console.log('Add:', todo);
      console.log('inside http callback', res);
      this.todos.push(res);
    });
  }
}
