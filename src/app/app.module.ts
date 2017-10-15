import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Import route component
import { RouterModule }   from '@angular/router';
//App component
import {AppComponent} from "./app.component";
//RealTime components
import { RealTimeComponent,TestComponent} from './real-time';
//Agents components
import { AgentsComponent,Test2Component } from './agents';
//import { Test2Component } from './agents/test2/test2.component';


@NgModule({
  declarations: [
    AppComponent,
    RealTimeComponent,
    TestComponent,
    AgentsComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'real-time',
        component: RealTimeComponent
      },
      {
        path: 'agents',
        component: AgentsComponent
      },
      {
        path: '',
        component: RealTimeComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
