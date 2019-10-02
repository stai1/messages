import { Component, OnInit } from '@angular/core';
import { of, interval, combineLatest } from 'rxjs';
import { zip, map } from 'rxjs/operators';

@Component({
  selector: 'app-bmi-observable',
  templateUrl: './bmi-observable.component.html',
  styleUrls: ['./bmi-observable.component.scss']
})
export class BmiObservableComponent implements OnInit {
  bmiList: { w: number; h: number; bmi: number; }[] = [];
  constructor() { }

  ngOnInit() {
    var height = of(1.76, 1.77, 1.78).pipe(zip(interval(1000), a => a));
    var weight = of(70, 72, 76, 79, 75).pipe(zip(interval(500), a => a));
    var bmi = combineLatest(weight, height).pipe(map(([w, h]) => { return { w: w, h: h, bmi: w / (h * h) } }));
    bmi.subscribe(result => this.bmiList.push(result));
  }

}
