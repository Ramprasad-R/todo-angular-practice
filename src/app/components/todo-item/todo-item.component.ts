import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }

  onToggle(todo) {
    console.log('toggle', todo);
    this.todo.completed = !this.todo.completed;

    this.todoService.toggleCompleted(todo).subscribe((todo) => {
      console.log('checking: ', todo);
    });
  }

  onDelete(todo) {
    console.log('delete', todo);
    this.deleteTodo.emit(todo);
  }
}
