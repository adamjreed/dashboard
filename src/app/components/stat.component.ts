import { Component, Input } from "@angular/core";

@Component({
    selector: "stat",
    templateUrl: "./stat.component.html",
    styleUrls: ['./stat.component.less']
})

export class StatComponent {
    @Input() target:string;
    @Input() stat:string;
    @Input() label:string;
}