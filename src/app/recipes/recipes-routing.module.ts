import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipeAddedComponent} from './recipe-added/recipe-added.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';

const recipesRoutes: Routes = [
    {
        path: '', component: RecipesComponent, children: [
            {path: '', component: RecipeStartComponent},
            {path: 'new', component: RecipeAddedComponent, canActivate: [AuthGuardService]},
            {path: ':id', component: RecipeDetailsComponent},
            {path: ':id/edit', component: RecipeAddedComponent, canActivate: [AuthGuardService]},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuardService
    ]
})
export class RecipesRoutingModule {
}
