import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
    public name;
    public description;
    public imagePath;
    public ingredients: Ingredient[];


    constructor(name, decription, imagepath, ingredients: Ingredient[]) {
        this.name = name;
        this.description = decription;
        this.imagePath = imagepath;
        this.ingredients = ingredients;
    }
}
