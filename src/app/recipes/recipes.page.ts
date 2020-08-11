import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }
  ionViewDidEnter() {}
  ngOnInit() {}
}
