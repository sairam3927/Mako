import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-variables',
  templateUrl: './report-variables.component.html',
  styleUrls: ['./report-variables.component.scss']
})
export class ReportVariablesComponent implements OnInit {

  List: any;

  constructor() { }

  ngOnInit() {
    this.List= [
      {id:'1', Manage:'-', ReportVariable:'', Nutrient:'', Logic:'', Done:''},
      {id:'2', Manage:'-', ReportVariable:'', Nutrient:'', Logic:'', Done:''},
      {id:'3', Manage:'-', ReportVariable:'', Nutrient:'', Logic:'', Done:''},
      {id:'4', Manage:'-', ReportVariable:'', Nutrient:'', Logic:'', Done:''},
      {id:'5', Manage:'-', ReportVariable:'', Nutrient:'', Logic:'', Done:''},
      {id:'6', Manage:'-', ReportVariable:'', Nutrient:'', Logic:'', Done:''},
      {id:'7', Manage:'-', ReportVariable:'', Nutrient:'', Logic:'', Done:''},
      {id:'8', Manage:'-', ReportVariable:'', Nutrient:'', Logic:'', Done:''},
      {id:'9', Manage:'-', ReportVariable:'', Nutrient:'', Logic:'', Done:''},
    ];
  }

}
