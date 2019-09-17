import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog } from '@angular/material';
import { UploadRawDataComponent } from './upload-raw-data/upload-raw-data.component';

@Component({
  selector: 'app-incoming-orders',
  templateUrl: './incoming-orders.component.html',
  styleUrls: ['./incoming-orders.component.scss']
})
export class IncomingOrdersComponent implements OnInit {
  filterToggle:boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  patientList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialog: MatDialog,
    private alertService: AlertService) { }

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';

  ngOnInit() {
    this.patientList = [
      { id: 1, DocumentTitle: "September 6 upload", UploadDate: "09/06/2019 5:00 PM", Samples: "243", TotalRecords: "1,00,453", Duplicates: "2300", OutofScope: "52", Incomplete: "6", Processed: "120 / 243", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "September 17 upload", UploadDate: "09/17/2019 10:46 AM", Samples: "252", TotalRecords: "1,01,756", Duplicates: "2400", OutofScope: "60", Incomplete: "8", Processed: "150 / 252", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "September 22 upload", UploadDate: "09/22/2019 2:15 PM", Samples: "215", TotalRecords: "99,254", Duplicates: "2500", OutofScope: "70", Incomplete: "9", Processed: "170 / 215", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "October 1 upload", UploadDate: "10/01/2019 1:06 PM", Samples: "328", TotalRecords: "1,22,695", Duplicates: "2800", OutofScope: "40", Incomplete: "1", Processed: "190 / 328", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "October 5 upload", UploadDate: "10/05/2019 12:00 PM", Samples: "248", TotalRecords: "1,01,265", Duplicates: "2700", OutofScope: "30", Incomplete: "8", Processed: "129 / 248", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "October 9 upload", UploadDate: "10/09/2019 9:00 AM", Samples: "190", TotalRecords: "1,00,000", Duplicates: "2000", OutofScope: "72", Incomplete: "7", Processed: "85 / 190", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "October 13 upload", UploadDate: "10/13/2019 10:30 PM", Samples: "268", TotalRecords: "95,058", Duplicates: "2100", OutofScope: "61", Incomplete: "10", Processed: "135 / 268", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "October 19 upload", UploadDate: "10/19/2019 11:20 AM", Samples: "290", TotalRecords: "1,20,589", Duplicates: "2200", OutofScope: "59", Incomplete: "12", Processed: "115 / 290", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "October 26 upload", UploadDate: "10/26/2019 7:00 AM", Samples: "195", TotalRecords: "1,00,565", Duplicates: "2600", OutofScope: "52", Incomplete: "7", Processed: "85 / 195", Download: "", Status: "Pending" },
    ];
  }

  public addPatientDataDialog() {
    let dialogRef = this.dialog.open(UploadRawDataComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deletePatientOrder() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

}
