import { Component, OnInit } from '@angular/core';
import {VegaVizComponent} from './vega-viz/vega-viz.component';



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
  constructor() {  }

  ngOnInit() {
  }
  public handleMainChart(chartData: any) {
    this.mainChart = chartData;
    console.log(this.mainChart);
  }
}
