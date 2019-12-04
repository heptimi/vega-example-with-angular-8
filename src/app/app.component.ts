import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mainChart: any;

  // charts = [{name: 'world-map', path: '../assets/charts/world-map.json'},
  //   {name: 'airport-connections', path: '../assets/charts/airport-connections.json'},
  //   {name: 'egde-bundling', path: '../assets/charts/edge-bundling.json'},
  //   {name: 'circle-packing', path: '../assets/charts/circle-packing.json'},
  //   {name: 'timeline', path: '../assets/charts/timeline.json'},
  //   {name: 'piechart', path: '../assets/charts/pietart.json'}];


  charts = [{name: 'piechart', path: '../assets/charts/pietart.json'}];
  constructor() {
  }

  ngOnInit() {
  }

  public handleMainChart(chartData: any) {
    this.mainChart = chartData;
    console.log(this.mainChart);
  }
}
