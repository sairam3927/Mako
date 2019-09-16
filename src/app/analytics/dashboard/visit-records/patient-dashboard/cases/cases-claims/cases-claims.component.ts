import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeService } from '../tree.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../app.settings';
import { Settings } from '../../../../../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases-claims',
  templateUrl: './cases-claims.component.html',
  styleUrls: ['./cases-claims.component.scss']
})
export class CasesClaimsComponent implements OnInit {

  selectedFile: any = [];
  files = [];
  public settings: Settings;
  tableList:any;

  

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;
toggleFilter() {
  this.filterToggle = !this.filterToggle;
}
public dateTime2: Date;
public dateTime3: Date;
status = ["Active","Incative"];
stepsOptionSelected: any;
onStepsOptionsSelected(event){
 console.log(event); 
}



  constructor(public treeService: TreeService,public appSettings: AppSettings,public dialog: MatDialog,public router:Router) { 
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {

    var data = this.treeService.getTreeJSON();
    this.files = data['data'];
    console.log(this.files);
    //this.taskId = this.taskData.slice(-1);
    // this.globalTaskId = this.taskId[0]['id'];
    this.selectedFile = this.files[0]['children'][0]['children'][3];
    console.log(this.selectedFile);
    this.tableList = [  
      {visit:"Visit-1 08/08/2019 9:30PM" , symptoms:"Back Pain" , attorney:"Mark Wood" , insurance:"Aetna PRO" , claimRef:"110021" , schDate:"08/05/2018" , claimAmount:"$ 5000" , recDate:"08/06/2019" , recAmount:"$ 2250"},
      {visit:"Visit-2 08/09/2019 15:30PM" , symptoms:"Hair line Fracture" , attorney:"Jonny Bairstow" , insurance:"Aetna PRO" , claimRef:"201547" , schDate:"08/07/2018" , claimAmount:"$ 8000" , recDate:"08/07/2019" , recAmount:"$ 5417"}, 
       ]
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      console.log(node.children);
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  nodeSelect(event) {
    console.log(event);
    if(event.node.label == "Prescreening") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/cases/prescreening");
    }
    if(event.node.label == "Clinical Observations") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/cases/clinicalObservations");
    }
    if(event.node.label == "Notes") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/cases/notes");
    }
    if(event.node.label == "Claims") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/cases/Claims");
    }
  }

}
