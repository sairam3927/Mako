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
      {id:"1",ReportVariable:"LCT Recommendation",Coverage:"Both Reports",Type:"Level 1",Summary:"Pregnancy",TestName:"LCT",Configured:"", ResultValue:"In the absence of other causes, the newborn can consume breast milk / formula containing lactose."},
      {id:"2",ReportVariable:"LCT Recommendation",Coverage:"Summary Report",Type:"Level 2",Summary:"Pregnancy",TestName:"LCT",Configured:"Checked", ResultValue:"It may be necessary to test the other parent or the fetus / newborn."},
      {id:"3",ReportVariable:"LCT Recommendation",Coverage:"Both Reports",Type:"Level 2",Summary:"Pregnancy",TestName:"LCT",Configured:"", ResultValue:"Daily Thiamine intake of at least 5 mg during pregnancy and lactation."},
      {id:"4",ReportVariable:"LCT Recommendation",Coverage:"Detailed Report",Type:"Level 1",Summary:"Pregnancy",TestName:"LCT",Configured:"Checked", ResultValue:"Daily Thiamine intake of at least 1,4 mg during pregnancy and lactation."},
      {id:"5",ReportVariable:"LCT Recommendation",Coverage:"Both Reports",Type:"Level 2",Summary:"Pregnancy",TestName:"LCT",Configured:"Checked", ResultValue:"In the absence of other causes, the newborn can consume breast milk / formula containing lactose."},
      {id:"6",ReportVariable:"LCT Recommendation",Coverage:"Both Reports",Type:"Level 1",Summary:"Pregnancy",TestName:"LCT",Configured:"", ResultValue:"It may be necessary to test the other parent or the fetus / newborn."},
      {id:"7",ReportVariable:"LCT Recommendation",Coverage:"Summary Report",Type:"Level 1",Summary:"Pregnancy",TestName:"LCT",Configured:"", ResultValue:"In the absence of other causes, the newborn can consume breast milk / formula containing lactose."},
      {id:"8",ReportVariable:"LCT Recommendation",Coverage:"Detailed Report",Type:"Level 2",Summary:"Pregnancy",TestName:"LCT",Configured:"Checked", ResultValue:"Daily Thiamine intake of at least 1,4 mg during pregnancy and lactation."},
    ];
  }

}
