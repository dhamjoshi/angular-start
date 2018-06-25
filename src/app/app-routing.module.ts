import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';
import {TableComponent} from './table/table.component';

const appRoute: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    {path: 'shoppinglist', component: ShoppingListComponent},
    {path: 'table', component: TableComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}