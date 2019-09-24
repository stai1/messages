import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  message: string = "";
  constructor() { }

  ngOnInit() {
  }

  // occurs when outputter emits string
  onOutput(m: string) {
    this.message = m;
  }

}
