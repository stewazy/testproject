import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  recipie: Recipie;
  id: number;
  constructor(private recipieService: RecipieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipie = this.recipieService.getRecipie(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipieService.addIngredientsToShoppingList(this.recipie.ingredients);
  }
}
