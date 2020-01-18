import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'firebase';

interface ToDo {
  id: string;
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
  items = [];
  count = 0;
  user: User;

  constructor(private navbarService: NavbarService, private afStore: AngularFirestore) {
    this.refreshItems();
  }

  get User() { return JSON.parse(localStorage.getItem('user')); }

  refreshItems() {
    this.user = this.User;
    this.itemsList = this.afStore.collection(`users/${this.user.uid}/items`);
    this.itemsList.valueChanges().subscribe(item => {
      this.items = item;
    });
  }

  addItem() {
    const item = {
      name: this.inputItem
    };
    let id: string;
    this.afStore.collection(`users/${this.user.uid}/items`).add(item).then((ref) => {
      id = ref.id;
      this.afStore.collection(`users/${this.user.uid}/items`).doc(id).update({ id });
    });
    this.inputItem = '';
  }

  deleteItem(item: any) {
    this.afStore.collection(`users/${this.user.uid}/items`).doc(item.id).delete();
  }

  ngOnInit() {
    this.navbarService.show();
  }

}
