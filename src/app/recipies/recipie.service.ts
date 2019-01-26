import { Recipie } from "./recipie.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipieService {
    recipieSelected = new EventEmitter<Recipie>();

    private recipies: Recipie[] = [
        new Recipie("Tasty Schnitzel",
        "A super tasty Schnitzel - just awesome","https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg",
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
        new Recipie("Big Fat Burger",
        "What else do you need to say?","https://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2017/05/mcdonalds.jpg",
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipies() {
        return this.recipies.slice();
    }

    getRecipie(index: number) {
        return this.recipies[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngridients(ingredients);
    }
}
