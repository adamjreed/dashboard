import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./services/dashboard.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    context:string;
    chartLabel:string;
    slices:object;
    highlights:object;
    chartData:any = {labels: [], data: []};

    constructor(private dashboardService: DashboardService) { }

    ngOnInit():void {
        this.getStats();
    }

    getStats():void {
        this.dashboardService.getStats().then(stats => {
            this.context = stats.context;
            this.chartLabel = stats.center;
            this.slices = stats.slices;
            this.highlights = stats.highlights;

            stats.slices.forEach(item => {
                this.chartData.labels.push(item.name);
                this.chartData.data.push(Number(item.value.substring(0, item.value.length - 1)));
            });
        });
    }
}