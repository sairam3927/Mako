import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-help-video-dialog',
  templateUrl: './help-video-dialog.component.html',
  styleUrls: ['./help-video-dialog.component.scss']
})
export class HelpVideoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HelpVideoDialogComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
