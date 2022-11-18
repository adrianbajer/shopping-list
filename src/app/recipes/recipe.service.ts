import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
  new Recipe('First Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Fried_camembert.jpg/640px-Fried_camembert.jpg'),
  new Recipe('Second Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Fried_camembert.jpg/640px-Fried_camembert.jpg')
];

getRecipes() {
  return this.recipes.slice();
}
/*
if use only return.this.recipes than return reference to the recipes array,
use of slice makes a copy of the array and prevent changes in the original array
*/

}
