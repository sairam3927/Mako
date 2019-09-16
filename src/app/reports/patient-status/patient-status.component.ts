import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-status',
  templateUrl: './patient-status.component.html',
  styleUrls: ['./patient-status.component.scss']
})
export class PatientStatusComponent implements OnInit {

  constructor() { }

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';

  ngOnInit() {
  }

}
