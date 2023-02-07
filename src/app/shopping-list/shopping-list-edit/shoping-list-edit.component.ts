import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component ({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
} )
export class ShoppingListEditComponent {

    constructor(private shoppingListService: ShoppingListService) { }

    onAddIngredient(form: NgForm) {
        const value = form.value;
        const ingredient = new Ingredient(value.name, value.amount);
        this.shoppingListService.addIngredient(ingredient);
    }

}