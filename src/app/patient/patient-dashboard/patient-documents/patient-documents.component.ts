import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-documents',
  templateUrl: './patient-documents.component.html',
  styleUrls: ['./patient-documents.component.scss']
})
export class PatientDocumentsComponent implements OnInit {
  documentList: any;

  constructor() { }

  ngOnInit() {
    this.documentList = [
      { id: 1, DocumentTitle: "Document Name 1", UploadDate: "09/06/2019, 5:00 PM", Samples: "243", TotalRecords: "1,00,453", Duplicates: "2300", OutofScope: "52,000", Incomplete: "6", Processed: "120 / 243", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "Document Name 2", UploadDate: "09/17/2019, 10:46 AM", Samples: "252", TotalRecords: "1,01,756", Duplicates: "2400", OutofScope: "60,000", Incomplete: "8", Processed: "150 / 252", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "Document Name 3", UploadDate: "09/22/2019, 2:15 PM", Samples: "215", TotalRecords: "99,254", Duplicates: "2500", OutofScope: "70,000", Incomplete: "9", Processed: "170 / 215", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "Document Name 4", UploadDate: "10/01/2019, 1:06 PM", Samples: "328", TotalRecords: "1,22,695", Duplicates: "2800", OutofScope: "40,000", Incomplete: "1", Processed: "190 / 328", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "Document Name 5", UploadDate: "10/05/2019, 12:00 PM", Samples: "248", TotalRecords: "1,01,265", Duplicates: "2700", OutofScope: "30,000", Incomplete: "8", Processed: "129 / 248", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "Document Name 6", UploadDate: "10/09/2019, 9:00 AM", Samples: "190", TotalRecords: "1,00,000", Duplicates: "2000", OutofScope: "72,000", Incomplete: "7", Processed: "85 / 190", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "Document Name 7", UploadDate: "10/13/2019, 10:30 PM", Samples: "268", TotalRecords: "95,058", Duplicates: "2100", OutofScope: "61,000", Incomplete: "10", Processed: "135 / 268", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "Document Name 8", UploadDate: "10/19/2019, 11:20 AM", Samples: "290", TotalRecords: "1,20,589", Duplicates: "2200", OutofScope: "59,000", Incomplete: "12", Processed: "115 / 290", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "Document Name 9", UploadDate: "10/26/2019, 7:00 AM", Samples: "195", TotalRecords: "1,00,565", Duplicates: "2600", OutofScope: "52,000", Incomplete: "7", Processed: "85 / 195", Download: "", Status: "Pending" },
    ];
  }

}
