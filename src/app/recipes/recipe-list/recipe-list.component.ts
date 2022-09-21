import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input()
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Fried_camembert.jpg/640px-Fried_camembert.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Fried_camembert.jpg/640px-Fried_camembert.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getRecipes() {
    return this.recipes;
  }

}
