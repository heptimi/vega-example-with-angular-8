import { Component, OnInit } from '@angular/core';
import {VizTestComponent} from './viz-test/viz-test.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mainChart: any;
  subChart: any;
  pieChart = '../assets/charts/data.json';
  mapGermany = '../assets/charts/germany.json';
  airportConnections = '../assets/charts/airport-connections.json';
  circlePacking = '../assets/charts/circle-packing.json';
  edgeBundling = '../assets/charts/edge-bundling.json';
  timeline = '../assets/charts/timeline.json';
  worldMap = '../assets/charts/world-map.json';

  charts = [{name: 'world-map', path: '../assets/charts/world-map.json'},
            {name: 'airport-connections', path: '../assets/charts/airport-connections.json'},
            {name: 'egde-bundling', path: '../assets/charts/edge-bundling.json'},
            {name: 'circle-packing', path: '../assets/charts/circle-packing.json'},
            {name: 'timeline', path: '../assets/charts/timeline.json'}];
  constructor() {
    console.log("app constructor");


  }

  ngOnInit() {
  }
  public handleMainChart(chartData: any) {
    console.log("main chart data");
    this.mainChart = chartData;
    console.log(this.mainChart);
  }
}
