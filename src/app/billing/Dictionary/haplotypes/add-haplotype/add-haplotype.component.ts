import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-haplotype',
  templateUrl: './add-haplotype.component.html',
  styleUrls: ['./add-haplotype.component.scss']
})
export class AddHaplotypeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddHaplotypeComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

}
