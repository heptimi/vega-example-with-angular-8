import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataLoaderService} from './dataLoader.service';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { VizTestComponent } from './viz-test/viz-test.component';


@NgModule({
  declarations: [
    AppComponent,
    VizTestComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [DataLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
