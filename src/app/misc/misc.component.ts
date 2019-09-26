import { Component, OnInit, Output } from '@angular/core';
import { PropertyFieldService } from '../property-field.service';
import { PropertyField } from '../property-field';
import { of, interval, combineLatest } from 'rxjs';
import { zip, map } from 'rxjs/operators';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss'],
  providers: [PropertyFieldService]
})
export class MiscComponent implements OnInit {
  message: string = "";
  propertyFields: PropertyField[];
  bmiList: { w: number; h: number; bmi: number; }[] = [];
  constructor(private propertyFieldService: PropertyFieldService) {
    // must do this instead of simply calling getPropertyFields() in html
    // because getter returns new value each time, causing directives to respond
    this.propertyFields = propertyFieldService.getPropertyFields();
  }

  ngOnInit() {

    // outputting values at intervals and using combineLatest
    var height = of(1.76, 1.77, 1.78).pipe(zip(interval(1000), a => a));
    var weight = of(70, 72, 76, 79, 75).pipe(zip(interval(500), a => a));
    var bmi = combineLatest(weight, height).pipe(map(([w, h]) => { return { w: w, h: h, bmi: w / (h * h) } }));
    bmi.subscribe(result => this.bmiList.push(result));
  }

  // occurs when outputter emits string
  onOutput(m: string) {
    this.message = m;
  }

}
