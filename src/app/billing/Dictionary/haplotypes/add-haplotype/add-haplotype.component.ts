import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-haplotype',
  templateUrl: './add-haplotype.component.html',
  styleUrls: ['./add-haplotype.component.scss']
})
export class AddHaplotypeComponent implements OnInit {

  List:any;
  constructor(public dialogRef: MatDialogRef<AddHaplotypeComponent>) { }

  ngOnInit() {
    this.List = ["rs121908936","rs228584","rs6031682","rs228584","rs6031682","rs121908936"]
  }
  close(): void {
    this.dialogRef.close();
  }

}
