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
        {"name":"Orders","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Raw Data","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Set Up","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Dictionary","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Scope","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"DRI","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Messages","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Nutrients","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"SEQ Results","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Haplotype","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Tests","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Calculations","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Simulation","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Pregnancy / Lactation","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Adult Nutrition","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Report Variables","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Final Output Variables List ","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Detailed Report","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Summary Report","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Users","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Permissions","value1":true,"value2":true,"value3":true,"value4":true},
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