import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
