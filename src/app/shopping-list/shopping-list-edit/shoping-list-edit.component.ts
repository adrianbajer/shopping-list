import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component ({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
} )
export class ShoppingListEditComponent {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;

    @Output() ingredientAdded = new EventEmitter<Ingredient>();

    onAddIngredient() {
        const ingredientName = this.nameInput.nativeElement.value;
        const ingredientAmount = this.amountInput.nativeElement.value;
        const ingredient = new Ingredient(ingredientName, ingredientAmount);
        this.ingredientAdded.emit(ingredient);
    }

}