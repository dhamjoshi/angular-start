import {Component, OnInit} from '@angular/core';
import * as  firebase from 'firebase/app';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedFeature = 'recipe';

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }

    ngOnInit(): void {
        firebase.initializeApp({
            apiKey: "AIzaSyA0kietLD8XFIVPhHwrsaMXArf0C0lI5ow",
            authDomain: "ng-recipebook-9b103.firebaseapp.com",
        });
    }

}
