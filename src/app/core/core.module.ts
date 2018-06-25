import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {AuthService} from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {RecipesService} from '../recipes/recipes.service';
import {MomentModule} from 'ngx-moment';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        MomentModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
    ],
    providers: [
        ShoppingListService,
        RecipesService,
        DataStorageService,
        AuthService,
    ]
})
export class CoreModule {

}