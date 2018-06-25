import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FirstComponentComponent} from './myComponent/first-component/first-component.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {TableComponent} from './table/table.component';


@NgModule({
    declarations: [
        AppComponent,
        FirstComponentComponent,
        TableComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        ShoppingListModule,
        SharedModule,
        AuthModule,
        CoreModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
