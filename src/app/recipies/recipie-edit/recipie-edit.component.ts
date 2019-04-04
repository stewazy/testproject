import { RecipieService } from './../recipie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipieForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipieService: RecipieService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        console.log(this.editMode);
      }
    );
  }

  onSubmit() {
    console.log(this.recipieForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipieForm.get('ingredients')).push(
      new FormGroup(
        {
          'name' : new FormControl(Validators.required),
          'amount' : new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
        }
      )
    );
  }

  private initForm() {

    let recipieName = '';
    let recipieImagePath = '';
    let recipieDescription = '';
    let recipieIngredients = new FormArray([]);

    if(this.editMode) {
      const recipie = this.recipieService.getRecipie(this.id);
      recipieName = recipie.name;
      recipieImagePath = recipie.imagePath;
      recipieDescription = recipie.description;
      if (recipie['ingredients']) {
        for (let ingredient of recipie.ingredients) {
          recipieIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name, Validators.required),
              'amount' : new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })  
          );
        }
      }
    }
    this.recipieForm = new FormGroup(
      {
        'name': new FormControl(recipieName, Validators.required),
        'imagePath': new FormControl(recipieImagePath, Validators.required),
        'description': new FormControl(recipieDescription, Validators.required),
        'ingredients' : recipieIngredients
      }
    );
  }

}
