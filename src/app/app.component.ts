import { Component } from '@angular/core';
import {VizTestComponent} from './viz-test/viz-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mainChart: any;
  subChart: any;
  constructor() {

  }
  public handleMainChart(chartData: any) {
    console.log("main chart data");
    this.mainChart = chartData;
    console.log(this.mainChart);
  }
}
