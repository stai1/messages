import { Component, OnInit, Output } from '@angular/core';
import { PropertyFieldService } from '../property-field.service';
import { PropertyField } from '../property-field';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss'],
  providers: [PropertyFieldService]
})
export class MiscComponent implements OnInit {
  message: string = "";
  propertyFields: PropertyField[];
  constructor(private propertyFieldService: PropertyFieldService) {
    // must do this instead of simply calling getPropertyFields() in html
    // because getter returns new value each time, causing directives to respond
    this.propertyFields = propertyFieldService.getPropertyFields();
  }

  ngOnInit() {
  }

  // occurs when outputter emits string
  onOutput(m: string) {
    this.message = m;
  }

}
