import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.scss']
})
export class MasterDataComponent implements OnInit {

  constructor() { }

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';
  
  ngOnInit() {
  }

}
