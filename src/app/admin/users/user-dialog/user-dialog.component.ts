import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AddSectionComponent } from 'src/app/billing/Dictionary/sections/add-section/add-section.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
  providers: [AlertService]
})
export class UserDialogComponent implements OnInit {

  id: any;
  action: any;
  item: any;
  public addUserForm: FormGroup;
  public gridObject: any = {};
  public formValue: any = {};
  public formData: any = {};

  constructor(public alertService: AlertService, public dialogRef: MatDialogRef<AddSectionComponent>, public usersService: UsersService,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.addUserForm = this.fb.group({
      UserName: new FormControl('', [Validators.required]),
<<<<<<< HEAD
      Email: new FormControl('', [Validators.required, ]),
      Mobile: new FormControl('', [Validators.required, ]),
      Status: new FormControl(false, [Validators.required, ]),
=======
      Email: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Mobile: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Status: new FormControl(false, [Validators.required, this.noWhiteSpaceValidator]),
>>>>>>> 6e95d525468b7e1898a2dc0e47e03741e2389243
    })

    if (this.action == 'Update') {

      this.addUserForm = this.fb.group({
        UserName: new FormControl(this.item.UserName, [Validators.required]),
<<<<<<< HEAD
        Email: new FormControl(this.item.Email, [Validators.required]),
        Mobile: new FormControl(this.item.Mobile, [Validators.required]),
        Status: new FormControl(this.item.Status, [Validators.required]),
=======
        Email: new FormControl(this.item.Email, [Validators.required, this.noWhiteSpaceValidator]),
        Mobile: new FormControl(this.item.Mobile, [Validators.required, this.noWhiteSpaceValidator]),
        Status: new FormControl(this.item.Status, [Validators.required, this.noWhiteSpaceValidator]),
>>>>>>> 6e95d525468b7e1898a2dc0e47e03741e2389243
      })
      console.log('form Data', this.formData);
    }
    console.log("Section ID", this.id);
    console.log("this is child action", this.action);
  }

  addUser() {
    this.formValue = this.addUserForm.value;
    console.log("values:", this.formValue);

    this.gridObject = {
      "UserId": this.id,
      "UserName": this.formValue['UserName'],
      "Email": this.formValue['Email'],
      "Mobile": this.formValue['Mobile'],
      "Status": this.formValue['Status']
    };
    console.log("Entered data", this.gridObject);
    this.close()

    this.usersService.upsertuser(this.gridObject).subscribe(
      data => {
        console.log('add/update response', data)
        if (data['Success'] == true) {
          this.alertService.createAlert(data['Message'], 1);
        } else {
          this.alertService.createAlert(data['Message'], 0);
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
