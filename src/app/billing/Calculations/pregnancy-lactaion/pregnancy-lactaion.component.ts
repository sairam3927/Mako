import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregnancy-lactaion',
  templateUrl: './pregnancy-lactaion.component.html',
  styleUrls: ['./pregnancy-lactaion.component.scss']
})
export class PregnancyLactaionComponent implements OnInit {

  List: any;

  constructor() { }

  ngOnInit() {
    this.List= [
      { id: '1', Nutrient:'-',  Units:'', Logic:'', Pregnancy:'', Lactation:''},
      { id: '2', Nutrient:'-',  Units:'', Logic:'', Pregnancy:'', Lactation:''},
      { id: '3', Nutrient:'-',  Units:'', Logic:'', Pregnancy:'', Lactation:''},
      { id: '4', Nutrient:'-',  Units:'', Logic:'', Pregnancy:'', Lactation:''},
      { id: '5', Nutrient:'-',  Units:'', Logic:'', Pregnancy:'', Lactation:''},
      { id: '6', Nutrient:'-',  Units:'', Logic:'', Pregnancy:'', Lactation:''},
      { id: '7', Nutrient:'-',  Units:'', Logic:'', Pregnancy:'', Lactation:''},
      { id: '8', Nutrient:'-',  Units:'', Logic:'', Pregnancy:'', Lactation:''},
      { id: '9', Nutrient:'-',  Units:'', Logic:'', Pregnancy:'', Lactation:''},
    ];
  }

}
