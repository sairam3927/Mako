import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
    selector: 'app-permissions',
    templateUrl: './permissions.component.html',
    styleUrls: ['./permissions.component.scss'],
    providers: [AlertService]
  })
  export class PermissionsComponent implements OnInit {
      constructor(private location:Location, private alertService: AlertService) {}
      public screens = [
        {"name":"Dashboard","value1":"true","value2":"false","value3":"true","value4":"true"},
        {"name":"Patients","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Raw Data","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Set Up","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Dictionary","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Algorithm","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Calculations","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Personal","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Sample Patient Data","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Scope","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"SEQ Result","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"DRI","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Message","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Users","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Master Data","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Settings","value1":true,"value2":true,"value3":true,"value4":true}
      ];
      ngOnInit() {

      }
      goBack() {
        this.location.back();
      }

      savePermissions() {
        this.alertService.createAlert('Successfully Saved.', 1);
      }
  }