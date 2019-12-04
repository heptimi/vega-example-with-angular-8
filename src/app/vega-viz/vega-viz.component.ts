import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {View, Parse, parse, Spec} from 'vega';

declare var vega: any;



@Component({
  selector: 'app-vega-viz',
  templateUrl: './vega-viz.component.html',
  styleUrls: ['./vega-viz.component.css']
})
export class VegaVizComponent implements OnInit {
  @Input() id: any;
  @Output() outgoingData = new EventEmitter<any>();
  @Input() pathToData: string;
  view: View;

  constructor(private modalService: NgbModal) {
  }

  public vegaInit(spec: Spec) {
    this.view = new vega.View(vega.parse(spec))
      .renderer('svg')  // set renderer (canvas or svg)
      .initialize('#' + this.id)// initialize view within parent DOM container
      //      .width(300)
      //      .height(300)
      .hover()             // enable hover encode set processing
      .run()
      .addEventListener('click', function(event, item) {
        console.log('CLICK', item);
      });

    this.sendData(this.view);
  }

  public sendData(data: View) {
    this.outgoingData.emit(data);
  }

  ngOnInit() {
    vega.loader().load(this.pathToData)
      .then((data) => {
        this.vegaInit(JSON.parse(data));
      });
    // this.view.addEventListener('click', function(event, item) {
    //   console.log(item.datum);
    // });

  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

}
