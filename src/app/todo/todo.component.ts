import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'firebase';

interface ToDo {
  name: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  inputItem: string;
  itemsList: AngularFirestoreCollection<ToDo>;
  items = []
  count = 0;
  user: User;

  constructor(private navbarService: NavbarService, private afStore: AngularFirestore) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.itemsList = this.afStore.collection(`users/${this.user.uid}/items`);
    this.itemsList.valueChanges().subscribe(item => {
      this.items = item;
    });
  }

  addItem() {

  }

  deleteItem(item: any) {
    // this.todoList = this.todoList.filter(todo => todo.name !== item.name);
  }

  ngOnInit() {
    this.navbarService.show();
  }

}
