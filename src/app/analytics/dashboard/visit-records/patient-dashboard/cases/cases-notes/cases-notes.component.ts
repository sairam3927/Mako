import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeService } from '../tree.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../app.settings';
import { Settings } from '../../../../../../app.settings.model';
import { Router } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';

@Component({
  selector: 'app-cases-notes',
  templateUrl: './cases-notes.component.html',
  styleUrls: ['./cases-notes.component.scss']
})
export class CasesNotesComponent implements OnInit {

  selectedFile: any = [];
  files = [];
  public settings: Settings;
  tableList: any;

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

    public searchText: string;
    public page: any;

  constructor(public treeService: TreeService,public appSettings: AppSettings,public dialog: MatDialog,public router:Router) { 
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {

    var data = this.treeService.getTreeJSON();
    this.files = data['data'];
    console.log(this.files);
    //this.taskId = this.taskData.slice(-1);
    // this.globalTaskId = this.taskId[0]['id'];
    this.selectedFile = this.files[0]['children'][0]['children'][2];
    console.log(this.selectedFile);
    this.tableList = [  
      {visit:"Visit-1 08/08/2019 9:30PM" , symptoms:"Accident" , note:"Neck or shoulder pain or stiffness,Numbness" , recordedBy:"Candice"},
      {visit:"Visit-2 08/09/2019 15:30PM" , symptoms:"Right rib fracture" , note:"Right rib fracture observed " , recordedBy:"Staff User"},
      {visit:"Visit-3 08/10/2019 11:45PM" , symptoms:"Left leg hair line fracture" , note:"X-Ray reveals hair line fracture on the left leg" , recordedBy:"Gilchrist"},     
      ]
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  public openNoteDialog(id) {
    let dialogRef = this.dialog.open(AddNoteComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
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
