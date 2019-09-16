import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SamplePatientData',
  templateUrl: './SamplePatientData.component.html',
  styleUrls: ['./SamplePatientData.component.scss']
})
export class SamplePatientDataComponent implements OnInit {

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  
  constructor() {
    }
  ngOnInit() {
  }
}
