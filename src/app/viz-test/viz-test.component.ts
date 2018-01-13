import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {View, Parse, parse, Spec} from 'vega';
declare var vega: any;

@Component({
  selector: 'app-viz-test',
  templateUrl: './viz-test.component.html',
  styleUrls: ['./viz-test.component.css']
})
export class VizTestComponent implements OnInit {
  @Input() id: any;
  @Output() outgoingData = new EventEmitter<any>();
  @Input() pathToData: string;
  view: View;

  constructor() {  }
  public vegaInit(spec: Spec) {
    this.view = new vega.View(vega.parse(spec))
      .renderer('svg')  // set renderer (canvas or svg)
      .initialize('#' + this.id)// initialize view within parent DOM container
//      .width(300)
//      .height(300)
      .hover()             // enable hover encode set processing
      .run();

    this.sendData(this.view);
  }

  public sendData(data: View) {
    this.outgoingData.emit(data);
  }

  ngOnInit() {
    vega.loader().load(this.pathToData)
    .then((data) => { this.vegaInit(JSON.parse(data)); });
  }

}
