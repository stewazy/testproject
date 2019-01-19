import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRouts: Routes = [
    {
        path: '', redirectTo: '/recipies', pathMatch: 'full'
    },
    {
        path: 'recipies', component: RecipiesComponent
    },
    {
        path: 'shopping-list', component: ShoppingListComponent
    }
];

@NgModule(
    {
        imports: [RouterModule.forRoot(appRouts)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule() {

}