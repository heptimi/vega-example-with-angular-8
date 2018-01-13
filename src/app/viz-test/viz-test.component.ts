import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {View, Parse, parse, Spec} from 'vega';
import {DataLoaderService} from '../dataLoader.service';
declare var vega: any;

@Component({
  selector: 'app-viz-test',
  templateUrl: './viz-test.component.html',
  styleUrls: ['./viz-test.component.css']
})
export class VizTestComponent implements OnInit {
  @Input() id: any;
  @Input() chartWidth: number;
  @Input() chartHeight: number;
  @Output() outgoingData = new EventEmitter<any>();

  response: Spec;
  view: View;

  constructor(private dataLoader: DataLoaderService) {
  }
  public vegaInit(spec: Spec) {
    this.view(parse.spec(spec))
      .renderer('svg')  // set renderer (canvas or svg)
      .initialize('#' + this.id)// initialize view within parent DOM container
      .width(this.chartWidth)
      .height(this.chartHeight)
      .hover()             // enable hover encode set processing
      .run();

    this.sendData(this.view);
  }

  public sendData(data: any) {
    this.outgoingData.emit(data);
  }

  ngOnInit() {
    console.log("child init");
    this.dataLoader.getDataObservable('../assets/data.json').then(
      data => {
        this.response = data;
        this.vegaInit(this.response);
      }
    );
    console.log("data loaded");
  }

}
