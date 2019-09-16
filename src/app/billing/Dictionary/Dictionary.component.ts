import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Dictionary',
  templateUrl: './Dictionary.component.html',
  styleUrls: ['./Dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  
  constructor() {
    }
  ngOnInit() {
  }
}
