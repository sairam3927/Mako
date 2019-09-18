import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-output',
  templateUrl: './final-output.component.html',
  styleUrls: ['./final-output.component.scss']
})
export class FinalOutputComponent implements OnInit {

  List:any;
  constructor() { }

  ngOnInit() {
    this.List =[
      {id:"1",ReportVariable:"LCT Recommendation",Coverage:"Both Reports",Type:"Level 1",Summary:"Pregnancy",TestName:"LCT",Configured:"Yes"},
      {id:"2",ReportVariable:"LCT Recommendation",Coverage:"Summary Report",Type:"Level 2",Summary:"Pregnancy",TestName:"LCT",Configured:"Yes"},
      {id:"3",ReportVariable:"LCT Recommendation",Coverage:"Both Reports",Type:"Level 2",Summary:"Pregnancy",TestName:"LCT",Configured:"No"},
      {id:"4",ReportVariable:"LCT Recommendation",Coverage:"Detailed Report",Type:"Level 1",Summary:"Pregnancy",TestName:"LCT",Configured:"Yes"},
      {id:"5",ReportVariable:"LCT Recommendation",Coverage:"Both Reports",Type:"Level 2",Summary:"Pregnancy",TestName:"LCT",Configured:"Yes"},
      {id:"6",ReportVariable:"LCT Recommendation",Coverage:"Both Reports",Type:"Level 1",Summary:"Pregnancy",TestName:"LCT",Configured:"No"},
      {id:"7",ReportVariable:"LCT Recommendation",Coverage:"Summary Report",Type:"Level 1",Summary:"Pregnancy",TestName:"LCT",Configured:"No"},
      {id:"8",ReportVariable:"LCT Recommendation",Coverage:"Detailed Report",Type:"Level 2",Summary:"Pregnancy",TestName:"LCT",Configured:"Yes"},
    ];
  }

}
