import { Component, Input } from '@angular/core';

@Component({
    selector: 'chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.less']
})

export class ChartComponent {
    public chartType:string = 'doughnut';
    public colors:object[] = [{backgroundColor:['#3791c6', '#5ea7d2', '#86bddd', '#aed3e8', '#d6e8f3']}];
    public options:any = {
        layout: {
            padding: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10
            }
        }
    };

    @Input() centerLabel: string;
    @Input() labels: string[];
    @Input() data: any[];
}