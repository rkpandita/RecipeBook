import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Baingan kaa bharta','Bakwaas hai, mat khaana',
    'https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg'),
    new Recipe('Paneer bhurji','This is tasty',
    'https://www.cookforindia.com/wp-content/uploads/2016/02/Paneer-Bhurji7.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
