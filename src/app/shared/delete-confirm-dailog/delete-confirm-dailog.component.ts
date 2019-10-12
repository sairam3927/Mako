import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-confirm-dailog',
  templateUrl: './delete-confirm-dailog.component.html',
  styleUrls: ['./delete-confirm-dailog.component.scss']
})
export class DeleteConfirmDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmDailogComponent>,
  @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
  delete(data){
    this.dialogRef.close(data);
  }
}
