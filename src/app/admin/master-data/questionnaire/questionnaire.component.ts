import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  constructor() { }

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';

  ngOnInit() {
  }

}
