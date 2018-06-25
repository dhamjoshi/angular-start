import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipesService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.recipe = this.recipeService.getRecipe(this.id);
                }
            );
    }

    onAddShoopingList() {
        this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    }

    onEditRecipe() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
}
