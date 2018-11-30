import { Recipie } from "./recipie.model";
import { EventEmitter } from "@angular/core";

export class RecipieService {
    recipieSelected = new EventEmitter<Recipie>();

    private recipies: Recipie[] = [
        new Recipie("A test recipie","This is simply a test","https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F02%2Fmain%2F2548601_qfsba_rice_with_scallops_152.jpg%3Fitok%3Dqvkz_lUq&w=700&q=85"),
        new Recipie("Another test recipie","This is simply a test","https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F02%2Fmain%2F2548601_qfsba_rice_with_scallops_152.jpg%3Fitok%3Dqvkz_lUq&w=700&q=85")
    ];

    getRecipies() {
        return this.recipies.slice();
    }
}