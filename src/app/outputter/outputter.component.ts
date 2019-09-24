import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-outputter',
  templateUrl: './outputter.component.html',
  styleUrls: ['./outputter.component.scss']
})
export class OutputterComponent implements OnInit {
  message: string = "";
  @Output() outMessage = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onKey(event: any) {
    this.outMessage.emit(event.target.value);
  }
}
