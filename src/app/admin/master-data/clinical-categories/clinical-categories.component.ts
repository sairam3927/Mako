import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddClinicalCategoryComponent } from './add-clinical-category/add-clinical-category.component'

@Component({
  selector: 'app-clinical-categories',
  templateUrl: './clinical-categories.component.html',
  styleUrls: ['./clinical-categories.component.scss']
})
export class ClinicalCategoriesComponent implements OnInit {
  
  tableList: any;
  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  
  filterToggle: boolean;
  
  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) {
      this.settings = this.appSettings.settings;
    }
    
    ngOnInit() {
      this.tableList = [  
        {clinicalCategory:"Prognosis" , status:true},
        {clinicalCategory:"Clinical Impression" , status:true},
        {clinicalCategory:"Radiological Examination" , status:true},
        {clinicalCategory:"Pertinent Clinical Findings" , status:true},
        {clinicalCategory:"Recommended Treatment Program" , status:true},      
      ]
    }
    
    
    public openClinicalDialog(id) {
      let dialogRef = this.dialog.open(AddClinicalCategoryComponent, {
        data: id,
        height: 'auto',
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    
    deleteBusinessCenter(){
      //this.alertService.createAlert('Successfully deleted.', 1);
    }
    
    
  }
  