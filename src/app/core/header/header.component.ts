import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() featureSelected = new EventEmitter<string>();

    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
    }

    ngOnInit() {
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe();
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

    checkLogin() {
        return this.authService.isAuthenticated();
    }

}
