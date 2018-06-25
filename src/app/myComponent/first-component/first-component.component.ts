import {Component, OnInit} from '@angular/core';

@Component({
    // selector: '[app-first-component]',
    selector: 'app-first-component',
    // selector: '.app-first-component',
    templateUrl: './first-component.component.html',
    // template: '<app-root></app-root>',
    styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

    allowNewServer = false;
    createServerStatus = 'no server was created';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    serverId = 10;
    serverstatus = 'localhost';

    ngOnInit() {
    }

    onCreateServer() {
        this.createServerStatus = 'server created';
    }
}
