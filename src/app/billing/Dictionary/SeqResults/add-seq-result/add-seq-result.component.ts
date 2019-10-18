import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BillingService } from 'src/app/billing/billing.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddSectionComponent } from '../../sections/add-section/add-section.component';
import { DictionaryService } from '../../dictionary.service';

@Component({
  selector: 'app-add-seq-result',
  templateUrl: './add-seq-result.component.html',
  styleUrls: ['./add-seq-result.component.scss']
})
export class AddSeqResultComponent implements OnInit {
  id: any;
  action: any;
  item: any;
  varient = ['G', 'A', 'C', 'T'];
  AlleleCall = ['Heterozygous', 'Homozygous', 'Absent'];
  public addSeqResultForm: FormGroup;
  public gridObject: any = {};
  public formValue: any = {};
  public formData: any = {};
  constructor(public alertService: AlertService, private _fb: FormBuilder, public dialogRef: MatDialogRef<AddSectionComponent>, private dictionaryService: DictionaryService,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.addSeqResultForm = this.fb.group({
      AlleleName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Ref: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Variant: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Gene: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      AlleleCall: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
    })

    if (this.action == 'Update') {

      this.addSeqResultForm = this.fb.group({
        AlleleName: new FormControl(this.item.AlleleName, [Validators.required, this.noWhiteSpaceValidator]),
        Ref: new FormControl(this.item.Ref, [Validators.required, this.noWhiteSpaceValidator]),
        Variant: new FormControl(this.item.Variant, [Validators.required, this.noWhiteSpaceValidator]),
        Gene: new FormControl(this.item.Gene, [Validators.required, this.noWhiteSpaceValidator]),
        AlleleCall: new FormControl(this.item.AlleleCall, [Validators.required, this.noWhiteSpaceValidator]),
      })
      console.log('form Data', this.formData);
    }
    console.log("SeqResult ID", this.id);
    console.log("this is child action", this.action);

  }

  addSeqResult() {
    this.formValue = this.addSeqResultForm.value;
    console.log("values:", this.formValue);

    this.gridObject = {
      "SequenceResultsMasterId": this.id,
      "Ref": this.formValue['Ref'],
      "Variant": this.formValue['Variant'],
      "AlleleCall": this.formValue['AlleleCall'],
      AlleleName:this.formValue['AlleleName']
    };
    console.log("Entered data", this.gridObject);
    this.close()

    this.dictionaryService.editSequence_results_master(this.gridObject).subscribe(
      data => {
        console.log('add/update response', data)
        if (data['Success'] == true) {
          this.alertService.createAlert('Successfully Updated', 1);
        } else {
          this.alertService.createAlert('Something Went Wrong', 0);
        }
        this.close()
      }
    );

  }

  close(): void {
    this.dialogRef.close();
  }
  noWhiteSpaceValidator(control: FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid = !isWhiteSpace;
    return isValid ? null : { 'whitespace': true };
  }

}
