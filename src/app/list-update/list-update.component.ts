import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-update',
  templateUrl: './list-update.component.html',
  styleUrls: ['./list-update.component.scss']
})
export class ListUpdateComponent implements OnInit {
  private listItems: number[] = [];
  private value = 0;

  constructor() { }

  ngOnInit() {
  }

  addToList() {
    this.listItems.push(this.value++);
  }

  removeAt(i: number) {
    this.listItems.splice(i,1);
  }

}
