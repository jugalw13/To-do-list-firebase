import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  inputItem: string;
  todoList = [];
  count = 0;

  constructor(private navbarService: NavbarService) { }

  addItem() {
    const item = {
      complete: false,
      name: this.inputItem
    };
    if (this.todoList.filter(test => test.name === item.name).length === 0) {
      this.todoList.push(item);
    }
    this.inputItem = '';
  }

  deleteItem(item: any) {
    this.todoList = this.todoList.filter(todo => todo.name !== item.name);
  }

  editItem(item) {
    item.complete = !item.complete;
  }

  ngOnInit() {
    this.navbarService.show();
  }

}
