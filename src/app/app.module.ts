import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from "ng2-charts";

import { AppComponent } from './app.component';
import { ChartComponent } from "./components/chart.component"
import { StatComponent } from "./components/stat.component";

import { DashboardService } from "./services/dashboard.service";

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
