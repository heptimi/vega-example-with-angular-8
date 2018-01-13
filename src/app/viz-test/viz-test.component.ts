import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {DataLoaderService} from '../dataLoader.service';
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

  constructor(private dataLoader: DataLoaderService) {
    console.log("viz constructor");
  }
  public vegaInit(spec: Spec) {
    this.view = new vega.View(vega.parse(spec))
      .renderer('svg')  // set renderer (canvas or svg)
      .initialize('#' + this.id)// initialize view within parent DOM container
      .hover()             // enable hover encode set processing
      .run();

    this.sendData(this.view);
  }

  public sendData(data: View) {
    this.outgoingData.emit(data);
  }

  ngOnInit() {
    this.dataLoader.getDataObservable(this.pathToData).then(
      data => {
        this.vegaInit(data);
      }
    );
    console.log("data loaded");

    console.log("child init");
  }

}
