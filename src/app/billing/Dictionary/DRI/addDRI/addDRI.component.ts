import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DictionaryService } from '../../dictionary.service';

@Component({
  selector: 'app-addDRI',
  templateUrl: './addDRI.component.html',
  styleUrls: ['./addDRI.component.scss']
})

export class AddDRIComponent implements OnInit {
  item: any;
  id: any;
  action: any;
  public addDRIForm: FormGroup;
  public gridObject: any = {};
  public formValue: any = {};
  public formData: any = {};

  constructor(public alertService: AlertService, private _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddDRIComponent>, private dictionaryService: DictionaryService,
    public fb: FormBuilder,
  ) { }
  ngOnInit() {
    this.addDRIForm = this.fb.group({
      Nutrient: new FormControl('', [Validators.required]),
      Pregnant_G: new FormControl('', [Validators.required]),
      Pregnant_L: new FormControl('', [Validators.required]),
      Lactate_G: new FormControl('', [Validators.required]),
      Lactate_L: new FormControl('', [Validators.required]),
      Female_L: new FormControl('', [Validators.required]),
      Female_G: new FormControl('', [Validators.required]),
      Male_L: new FormControl('', [Validators.required]),
      Male_G: new FormControl('', [Validators.required]),
    })

    if (this.action == 'Update') {

      this.addDRIForm = this.fb.group({
        Nutrient: new FormControl(this.item.Nutrient, [Validators.required]),
        Pregnant_G: new FormControl(this.item.PregnantGthan30, [Validators.required ]),
        Pregnant_L: new FormControl(this.item.PregnantLthan30, [Validators.required  ]),
        Lactate_G: new FormControl(this.item.LactateGthan30, [Validators.required]),
        Lactate_L: new FormControl(this.item.LactateLthan30, [Validators.required]),
        Female_L: new FormControl(this.item.FemaleLthanEqualto50, [Validators.required]),
        Female_G: new FormControl(this.item.FemaleGthan50, [Validators.required]),
        Male_L: new FormControl(this.item.MaleLthanEqualto50, [Validators.required ]),
        Male_G: new FormControl(this.item.MaleGthan50, [Validators.required ]),
      })
      console.log('form Data', this.formData);
    }
    console.log("DRI ID", this.id);
    console.log("this is child action", this.action);

  }

  ConfigureDRI() {
    this.formValue = this.addDRIForm.value;
    console.log("values:", this.formValue);

    this.gridObject = {
      "DriId": this.id,
      "PregnantGthan30": this.formValue['Pregnant_G'],
      "PregnantLthan30": this.formValue['Pregnant_L'],
      "LactateGthan30": this.formValue['Lactate_G'],
      "LactateLthan30": this.formValue['Lactate_L'],
      "FemaleLthanEqualto50": this.formValue['Female_L'],
      "FemaleGthan50": this.formValue['Female_G'],
      "MaleLthanEqualto50": this.formValue['Male_L'],
      "MaleGthan50": this.formValue['Male_G'],
    };
    console.log("Entered data", this.gridObject);
    this.close()

    this.dictionaryService.DRIeditsections(this.gridObject).subscribe(
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