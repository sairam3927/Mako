import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-Report',
  templateUrl: './Report.component.html',
  styleUrls: ['./Report.component.scss']
})
export class ReportComponent implements OnInit {

  List: any;

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialog: MatDialog,private alertService : AlertService) {
    }
  ngOnInit() {

    this.List = [
      {id:"1",Batch:"B18.US",ID:"41001903296213",Name:"David",Prename:"john",Barcode:"IonCode_0129",Sex:"M",DOB:"20/7/1974",Age:"44",DataCollectedDate:"23/4/2019",SourceProvided:"Saliva",Region:"Asian"},
      {id:"2",Batch:"B18.US",ID:"41001903296214",Name:"Michael",Prename:"BRYCE",Barcode:"IonCode_0130",Sex:"M",DOB:"14/4/1977",Age:"41",DataCollectedDate:"23/4/2019",SourceProvided:"Saliva",Region:"Asian"},
      {id:"3",Batch:"B18.US",ID:"41001903296215",Name:"Lisa",Prename:"CARTER",Barcode:"IonCode_0131",Sex:"F",DOB:"2/6/1985",Age:"33",DataCollectedDate:"23/4/2019",SourceProvided:"Saliva",Region:"European"},
      {id:"4",Batch:"B18.US",ID:"41001903296216",Name:"Richard",Prename:"CLIFTON",Barcode:"IonCode_0132",Sex:"M",DOB:"12/1/1990",Age:"28",DataCollectedDate:"23/4/2019",SourceProvided:"Saliva",Region:"Australian"},
      {id:"5",Batch:"B18.US",ID:"41001903296217",Name:"Susan",Prename:"DARNELL",Barcode:"IonCode_0133",Sex:"F",DOB:"19/7/1972",Age:"46",DataCollectedDate:"23/4/2019",SourceProvided:"Saliva",Region:"Asian"},
      {id:"6",Batch:"B18.US",ID:"41001903296218",Name:"Thomas",Prename:"EDISON",Barcode:"IonCode_0134",Sex:"M",DOB:"30/4/1994",Age:"24",DataCollectedDate:"23/4/2019",SourceProvided:"Saliva",Region:"African"},
      {id:"7",Batch:"B18.US",ID:"41001903296219",Name:"Robert",Prename:"FLORENTINO",Barcode:"IonCode_0135",Sex:"M",DOB:"11/6/2000",Age:"18",DataCollectedDate:"23/4/2019",SourceProvided:"Saliva",Region:"Asian"},
      {id:"8",Batch:"B18.US",ID:"41001903296220",Name:"Linda",Prename:"GROVER	",Barcode:"IonCode_0136",Sex:"F",DOB:"27/10/1995",Age:"23",DataCollectedDate:"23/4/2019",SourceProvided:"Saliva",Region:"American"},
      {id:"9",Batch:"B18.US",ID:"41001903296221",Name:"Mary",Prename:"HILTON",Barcode:"IonCode_0137",Sex:"F",DOB:"7/2/1989",Age:"29",DataCollectedDate:"23/4/2019",SourceProvided:"Saliva",Region:"American"},
    ]
  }

  deletePatientOrder(){
    this.alertService.createAlert('Successfully deleted.', 1);       
  }

}
