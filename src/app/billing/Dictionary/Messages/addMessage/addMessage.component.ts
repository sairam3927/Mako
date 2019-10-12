import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DictionaryService } from '../../dictionary.service';

@Component({
  selector: 'app-addMessage',
  templateUrl: './addMessage.component.html',
  styleUrls: ['./addMessage.component.scss']
})

export class AddMessageComponent implements OnInit {

  id: any;
  action: any;
  item: any;
  public addMessageForm: FormGroup;
  public gridObject: any = {};
  public formValue: any = {};
  public formData: any = {};
  constructor(public alertService: AlertService, public dialogRef: MatDialogRef<AddMessageComponent>, private dictionaryService: DictionaryService,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.addMessageForm = this.fb.group({
      AlleleName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Genotype: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Gene: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      RecommendationValue: new FormControl('', [Validators.required]),
      Comment: new FormControl('', [Validators.required]),
      Recommendation: new FormControl('', [Validators.required]),
    })

    if (this.action == 'Update') {

      this.addMessageForm = this.fb.group({
        AlleleName: new FormControl(this.item.AlleleName, [Validators.required, this.noWhiteSpaceValidator]),
        Genotype: new FormControl(this.item.Genotype, [Validators.required, this.noWhiteSpaceValidator]),
        Gene: new FormControl(this.item.Gene, [Validators.required, this.noWhiteSpaceValidator]),
        RecommendationValue: new FormControl(this.item.RecommendedValue, [Validators.required]),
        Comment: new FormControl(this.item.Comment, [Validators.required]),
        Recommendation: new FormControl(this.item.Recommendation, [Validators.required]),
      })
      console.log('form Data', this.formData);
    }
    console.log("message ID", this.id);
    console.log("this is child action", this.action);

  }

  addSelections() {
    this.formValue = this.addMessageForm.value;
    console.log("values:", this.formValue);

    this.gridObject = {
      "MessagesId": this.id,
      "RecommendedValue": this.formValue['RecommendationValue'],
      "Comment": this.formValue['Comment'],
      "Recommendation": this.formValue['Recommendation'],
    };
    console.log("Entered data", this.gridObject);
    this.close()

    this.dictionaryService.editmessages(this.gridObject).subscribe(
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