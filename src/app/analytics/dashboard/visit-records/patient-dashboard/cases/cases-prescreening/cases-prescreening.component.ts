import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeService } from '../tree.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../app.settings';
import { Settings } from '../../../../../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases-prescreening',
  templateUrl: './cases-prescreening.component.html',
  styleUrls: ['./cases-prescreening.component.scss']
})
export class CasesPrescreeningComponent implements OnInit {

  selectedFile: any = [];
  files = [];
  public settings: Settings;
  tableList:any;

  constructor(public treeService: TreeService,public appSettings: AppSettings,public dialog: MatDialog,public router:Router) { 
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {

    var data = this.treeService.getTreeJSON();
    this.files = data['data'];
    console.log(this.files);
    //this.taskId = this.taskData.slice(-1);
    // this.globalTaskId = this.taskId[0]['id'];
    this.selectedFile = this.files[0]['children'][0]['children'][0];
    console.log(this.selectedFile);

    this.tableList = [
      {sNo:1 , description:"Are you currently taking aspirin (or any medicines that contain aspirin) or any blood thinners?"},
      {sNo:2 , description:"Are you pregnant or possibly pregnant?"},
      {sNo:3 , description:"Do you have high blood pressure?"},
      {sNo:4 , description:"Do you have any heart problems?"},
      {sNo:5 , description:"Do you have ulcers or gastritis?"},
      {sNo:6 , description:"Do you have diabetes?"},
      {sNo:7 , description:"Do you have any liver problems/Hepatitis?"},
      {sNo:8 , description:"Do you have any kidney diseases?"},
      {sNo:9 , description:"Do you have cancer?"},
      {sNo:10 , description:"Do you smoke or chew tobacco?"},
      {sNo:11 , description:"Do you have HIV or Hepatitis C?"},
      {sNo:12 , description:"Do you have any blood clots or embolus?"}
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
