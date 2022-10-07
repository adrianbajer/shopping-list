import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input()
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Fried_camembert.jpg/640px-Fried_camembert.jpg'),
    new Recipe('Second Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Fried_camembert.jpg/640px-Fried_camembert.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  getRecipes() {
    return this.recipes;
  }

  onRecipeSelected(recipeElement: Recipe){
    this.recipeSelected.emit(recipeElement);
  }

}
