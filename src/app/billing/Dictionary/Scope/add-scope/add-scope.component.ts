import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-scope',
  templateUrl: './add-scope.component.html',
  styleUrls: ['./add-scope.component.scss']
})
export class AddScopeComponent implements OnInit {

  List: any;
  constructor(public dialogRef: MatDialogRef<AddScopeComponent>) { }

  ngOnInit() {
    this.List = [ 'rs121908936', "rs228584", "rs6031682", "rs228584", "rs6031682","rs121908936"]
  }

  close(): void {
    this.dialogRef.close();
  }


}
