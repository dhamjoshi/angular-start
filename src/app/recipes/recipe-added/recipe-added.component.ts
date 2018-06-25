import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Form, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-recipe-added',
    templateUrl: './recipe-added.component.html',
    styleUrls: ['./recipe-added.component.css']
})
export class RecipeAddedComponent implements OnInit, OnDestroy {
    id: number;
    recipeForm: FormGroup;
    editMode = false;
    subscription: Subscription;

    constructor(private route: ActivatedRoute, private recipeService: RecipesService, private router: Router) {
    }

    ngOnInit() {
        this.subscription = this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.editMode = isNaN(this.id) ? false : true;
                    this.initForm();
                }
            );

    }

    private initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new FormArray([]);

        if (this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            if (recipe) {
                recipeName = recipe.name;
                recipeImagePath = recipe.imagePath;
                recipeDescription = recipe.description;
                if (recipe['ingredients']) {
                    for (let ingredient of recipe.ingredients) {
                        recipeIngredients.push(
                            new FormGroup({
                                'name': new FormControl(ingredient.name, Validators.required),
                                'amount': new FormControl(ingredient.amount, [
                                    Validators.required,
                                    Validators.pattern(/^[1-9]+[0-9]*$/)
                                ])
                            })
                        );
                    }
                }
            }

        }

        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImagePath, Validators.required),
            'description': new FormControl(recipeDescription, Validators.required),
            'ingredients': recipeIngredients
        });
    }

    getControls() {
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }

    onSubmit() {
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        } else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.onCancel();
    }

    onAddIngredient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                'name': new FormControl(null, Validators.required),
                'amount': new FormControl(null, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
        );
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onDeleteIngredient(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }
}
