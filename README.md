# Vega Chart Examples
All chart examples are taken from the official Vega website (https://vega.github.io/vega/examples/).
Inspired by this Plunker https://embed.plnkr.co/5i5dIK/ and trying to implement different charts with Angular 5/2+ and Vega. 


# Using Vega with Angular 2+
Install Vega and typings for the library.
`npm install vega
npm install @types/vega`

Add Path to Vega library to the .angular-cli.json file:
`...
      "scripts": ["../node_modules/vega/build/vega.min.js"],
...`

Import the library where you want to use it.
`declare var vega: any;`

Using the library in your Angular Component:

```
@Component({
  selector: 'vega-chart',
  templateUrl: './vega-chart.component.html',
  styleUrls: ['./vega-chart.component.css']
})
export class VegaChartComponent implements OnInit {
  id: number;
  view: View;
  
  constructor() {  }
  
  public vegaInit(spec: Spec) {
    this.view = new vega.View(vega.parse(spec))
      .renderer('svg')          // set renderer (canvas or svg)
      .initialize('#' + this.id)// initialize view within parent DOM container
      .width(500)               // set chart width 
      .height(500)              // set chart height
      .hover()                  // enable hover encode set processing
      .run();
  }
  ngOnInit() {
    vega.loader().load('/path/to/data.json')
    .then((data) => { this.vegaInit(JSON.parse(data)); });
  }
}
```

# Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
