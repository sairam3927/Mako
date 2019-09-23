import { AddPatientDataComponent } from './addPatientData/addPatientData.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddIncomingOrderComponent } from './add-incoming-order/add-incoming-order.component';
import { ProfileAndInsuranceDialogComponent } from './profile-and-insurance-dialog/profile-and-insurance-dialog.component'
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddDocumentsComponent } from './add-documents/add-documents.component';

@Component({
  selector: 'app-incoming-order-queue',
  templateUrl: './incoming-order-queue.component.html',
  styleUrls: ['./incoming-order-queue.component.scss'],
})
export class IncomingOrderQueueComponent implements OnInit {

  patientList: any;
  tableList: any;
  config: any;

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
    public dialog: MatDialog,
    private alertService: AlertService) {
    this.settings = this.appSettings.settings;
  }

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  public dateTime2: Date;
  public dateTime3: Date;
  referringOptions = ["Stephen McGill", "Otto Rieder", "Joe Deu-Ngoc", "Chris Soles", "Brad Kewalramani", "Michael Persaud", "Habib Kharsa"];
  stepsOptionSelected: any;
  age = [">30", "<30", ">=50", "<=50"];
  onStepsOptionsSelected(event) {
    console.log(event);
  }
  ngOnInit() {






    this.patientList = [
      { id: 1, Country: "USA", State: "New York", City: "Newyork City", Zip: "10001", Patient: "Fabrice bryce", Age: "21", Gender: "M", dob: "21-08-1998", Ethnicity: "Non-Hispanic White", SampleName: "H170600552", FEDEX: "7948 0175 0851", OrderDate: "21-08-2019", DateCompleted: "-", Pregnant: "checked", Lactating: "", Reports: "", Status: "Pending", Docs: "Add" },
      { id: 2, Country: "Canada", State: "Alberta", City: "Edmonton", Zip: "T7S", Patient: "Stephen Carter", Age: "48", Gender: "M", dob: "14-07-1971", Ethnicity: "Other", SampleName: "HG01879", FEDEX: "7654 3542 6571", OrderDate: "14-07-2019", DateCompleted: "-", Pregnant: "", Lactating: "checked", Reports: "", Status: "Pending", Docs: "1" },
      { id: 3, Country: "USA", State: "Califonia", City: "Sacramento", Zip: "94203", Patient: "Otto Clifton", Age: "28", Gender: "M", dob: "01-04-1991", Ethnicity: "Asian", SampleName: "41001903123551", FEDEX: "6842 5872 5122", OrderDate: "01-04-2019", DateCompleted: "07-04-2019", Pregnant: "checked", Lactating: "", Reports: "", Status: "Done", Docs: "2" },
      { id: 4, Country: "Canada", State: "British Columbia", City: "Victoria", Zip: "3294", Patient: "Joe Grover", Age: "36", Gender: "M", dob: "28-06-1983", Ethnicity: "African American", SampleName: "41001903296266", FEDEX: "7846 1221 4113", OrderDate: "28-06-2019", DateCompleted: "-", Pregnant: "", Lactating: "checked", Reports: "", Status: "Pending", Docs: "3" },
      { id: 5, Country: "Canada", State: "Ontario", City: "Quebec City", Zip: "G0A 4V0", Patient: "Chris Darnell", Age: "50", Gender: "M", dob: "12-08-1969", Ethnicity: "Asian", SampleName: "H170600560", FEDEX: "6432 5215 1223", OrderDate: "12-08-2019", DateCompleted: "31-08-2019", Pregnant: "", Lactating: "checked", Reports: "", Status: "Done", Docs: "4" },
      { id: 6, Country: "Canada", State: "Yukon", City: "Whitehorse", Zip: "Y1A0A4", Patient: "Mary Hilton", Age: "20", Gender: "M", dob: "24-03-1999", Ethnicity: "Hispanic", SampleName: "41001903296263", FEDEX: "7463 5563 3332", OrderDate: "24-03-2019", DateCompleted: "29-03-2019", Pregnant: "checked", Lactating: "", Reports: "", Status: "Done", Docs: "1" }
    ];
    this.tableList = [
      { id: 1, firstName: "Fabrice", normal: 5, faxNumber: "+1-403-444-5207", eFaxNumber: "1202584", lastName: "Vanegas", dob: "02/05/1964", orderingPhysician: "David", receivedDate: "03/03/2019" },
      { id: 2, firstName: "Stephen", normal: 6, faxNumber: "+1-780-142-5207", eFaxNumber: "3021478", lastName: "McGill", dob: "09/07/1985", orderingPhysician: "Stokes", receivedDate: "21/04/2019" },
      { id: 3, firstName: "Otto", normal: 6, faxNumber: "+1-604-0257-3614", eFaxNumber: "2015478", lastName: "Rieder", dob: "25/11/2010", orderingPhysician: "Morgan", receivedDate: "29/04/2019" },
      { id: 4, firstName: "Joe", normal: 5, faxNumber: "+1-403-205-5691", eFaxNumber: "2015697", lastName: "Deu-Ngoc", dob: "17/09/1966", orderingPhysician: "Steven", receivedDate: "17/05/2019" },
      { id: 5, firstName: "Chris", normal: 5, faxNumber: "+1-403-293-9696", eFaxNumber: "6365471", lastName: "Soles", dob: "31/01/2000", orderingPhysician: "Liam Plunkeet", receivedDate: "22/05/2019" }
    ];

  }

  public addPatientDataDialog() {
    let dialogRef = this.dialog.open(AddPatientDataComponent, {
      height: 'auto',
      width: '400px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openPatientDialog(id) {
    let dialogRef = this.dialog.open(AddIncomingOrderComponent, {
      data: id,
      height: 'auto',
      width: '500px',
      autoFocus: false,

    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openDocumentDialog() {
    let dialogRef = this.dialog.open(AddDocumentsComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  public openInsuranceDialog(id) {
    let dialogRef = this.dialog.open(ProfileAndInsuranceDialogComponent, {
      data: id,
      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deletePatientOrder() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }


}
