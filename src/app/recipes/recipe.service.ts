import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Fried camembert with cranberries',
      'Delicious camembert',
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Fried_camembert.jpg/640px-Fried_camembert.jpg',
      [
        new Ingredient('Camembert', 1),
        new Ingredient('Cranberry jam', 10)
      ]),
    new Recipe(
      'Pad-Thai',
      'The Real taste of Asia',
      'https://upload.wikimedia.org/wikipedia/commons/2/27/Chicken_Pad_Thai_dish_served_at_Indooroopilly_Shopping_Centre%2C_Brisbane.jpg',
      [
        new Ingredient('Noodles', 250),
        new Ingredient('Vegetables', 200)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
