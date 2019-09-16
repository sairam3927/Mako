import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { SpeechRecognizerService } from '../shared/services/speech-recognizer.service';
import { TreeNode } from 'primeng/api';
import { SpeechNotification } from '../shared/model/speech-notification';
import { SpeechError } from '../shared/model/speech-error';
import { ActionContext } from '../shared/model/strategy/action-content';
import { TreeService } from './tree.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { Router } from '@angular/router';
import { AddPatientVisitDashboardDialogComponent } from './add-patient-visit-dashboard-dialog/add-patient-visit-dashboard-dialog.component';

@Component({
  selector: 'app-patient-clinical-notes',
  templateUrl: './patient-clinical-notes.component.html',
  styleUrls: ['./patient-clinical-notes.component.scss']
})
export class PatientClinicalNotesComponent implements OnInit {

  finalTranscript = '';
  taskId: any;
  globalTaskId: number;
  selectedFile: any = [];
  files = [];
  status:boolean;
  groups:any;
  newGroups:any;
  selectedItem:any;
  selectedListItem:any;
  public settings: Settings;
  recognizing = false;
  notification: string;
  languages: string[] =  ['en-US', 'es-ES'];
  currentLanguage: string;
  actionContext: ActionContext = new ActionContext();

  constructor(private changeDetector: ChangeDetectorRef,public appSettings: AppSettings,private router : Router,
    public dialog: MatDialog,
              private speechRecognizer: SpeechRecognizerService,public treeService: TreeService) { 
                this.settings = this.appSettings.settings;
              }

  ngOnInit() {
    this.currentLanguage = this.languages[0];
    this.speechRecognizer.initialize(this.currentLanguage);
    this.initRecognition();
    this.notification = null;
    var data = this.treeService.getTreeJSON();
    this.files = data['data'];
    console.log(this.files);
    //this.taskId = this.taskData.slice(-1);
    // this.globalTaskId = this.taskId[0]['id'];
    this.selectedFile = this.files[0]['children'][0];
    console.log(this.selectedFile);
    this.groups = [
      {name:"Visit-1 08/08/2019 9:30PM"},
      {name:"Visit-2 08/09/2019 15:30PM"},
      {name:"Visit-3 08/10/2019 11:45PM"},
    ];
    this.newGroups = [
      {name:"Prognosis"},
      {name:"Clinical Impression"},
      {name:"Radiological Examination"},
      {name:"Pertinent Clinical Findings"},
      {name:"Recommended Treatment"},
    ];
    this.selectedListItem = this.newGroups[0] ;
    this.selectedItem = this.groups[0];
    console.log(this.selectedListItem); 
  }

  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue; 
    // don't forget to update the model here
    // ... do other stuff here ...
}

listNewClick(event, newValue) {
  console.log(newValue);
  this.selectedListItem = newValue;
  // don't forget to update the model here
  // ... do other stuff here ...
}


  

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  public openVisistDialog(id) {
    let dialogRef = this.dialog.open(AddPatientVisitDashboardDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

clickEvent(){
  this.status = !this.status;       
}


  nodeSelect(event) {
    console.log(event);
    if(event.node.label == "Prescreening") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/prescreening");
    }
    if(event.node.label == "Clinical Observations") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/cases");
    }
    if(event.node.label == "Notes") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/testnotes");
    }
    if(event.node.label == "Claims") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/dashboardclaims");
    }
  }

  startButton(event) {
    if (this.recognizing) {
      this.speechRecognizer.stop();
      return;
    }

    this.speechRecognizer.start(event.timeStamp);
  }

  onSelectLanguage(language: string) {
    this.currentLanguage = language;
    this.speechRecognizer.setLanguage(this.currentLanguage);
  }

  private initRecognition() {
    this.speechRecognizer.onStart()
      .subscribe(data => {
        this.recognizing = true;
        this.notification = 'I\'m listening...';
        this.detectChanges();
      });

    this.speechRecognizer.onEnd()
      .subscribe(data => {
        this.recognizing = false;
        this.detectChanges();
        this.notification = null;
      });

    this.speechRecognizer.onResult()
      .subscribe((data: SpeechNotification) => {
        const message = data.content.trim();
        if (data.info === 'final_transcript' && message.length > 0) {
          this.finalTranscript = `${this.finalTranscript}\n${message}`;
          this.actionContext.processMessage(message, this.currentLanguage);
          this.detectChanges();
          this.actionContext.runAction(message, this.currentLanguage);
        }
      });

    this.speechRecognizer.onError()
      .subscribe(data => {
        switch (data.error) {
          case SpeechError.BLOCKED:
          case SpeechError.NOT_ALLOWED:
            this.notification = `Cannot run the demo.
            Your browser is not authorized to access your microphone. Verify that your browser has access to your microphone and try again.
            `;
            break;
          case SpeechError.NO_SPEECH:
            this.notification = `No speech has been detected. Please try again.`;
            break;
          case SpeechError.NO_MICROPHONE:
            this.notification = `Microphone is not available. Plese verify the connection of your microphone and try again.`;
            break;
          default:
            this.notification = null;
            break;
        }
        this.recognizing = false;
        this.detectChanges();
      });
  }

  detectChanges() {
    this.changeDetector.detectChanges();
  }

}
