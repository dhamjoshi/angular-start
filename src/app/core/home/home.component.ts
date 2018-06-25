import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    date = new Date('2018-06-10');
    dateText = '';

    dateVar: string;

    constructor() {
    }

    ngOnInit() {
    }

    onDateClick(data: string) {
        this.dateText = data;
    }


}
