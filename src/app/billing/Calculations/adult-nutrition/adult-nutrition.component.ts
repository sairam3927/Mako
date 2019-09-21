import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adult-nutrition',
  templateUrl: './adult-nutrition.component.html',
  styleUrls: ['./adult-nutrition.component.scss']
})
export class AdultNutritionComponent implements OnInit {

  List: any;

  constructor() { }

  ngOnInit() {
    this.List= [
      { id:'1', Manage:'-', Nutrient:'', Units:'', Recommendation:'' },
      { id:'2', Manage:'-', Nutrient:'', Units:'', Recommendation:'' },
      { id:'3', Manage:'-', Nutrient:'', Units:'', Recommendation:'' },
      { id:'4', Manage:'-', Nutrient:'', Units:'', Recommendation:'' },
      { id:'5', Manage:'-', Nutrient:'', Units:'', Recommendation:'' },
      { id:'6', Manage:'-', Nutrient:'', Units:'', Recommendation:'' },
      { id:'7', Manage:'-', Nutrient:'', Units:'', Recommendation:'' },
      { id:'8', Manage:'-', Nutrient:'', Units:'', Recommendation:'' },
      { id:'9', Manage:'-', Nutrient:'', Units:'', Recommendation:'' },
    ];
  }

}
