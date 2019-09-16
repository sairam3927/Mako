import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private http: HttpClient) {

    this.treeData = {
      "data": [{
        "label": "Visit 1",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": false,
        "expanded": true,
        "children": [
          {
          "label": "Prescreening",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        },
        {
          "label": "Clinical Observations",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        },
        {
          "label": "Notes",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        },
        {
          "label": "Claims",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true
        }
        ]
      },
      {
        "label": "Visit 2",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": false,
        "expanded": false,
        "children": [
          {
            "label": "Prescreening",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true
          },
          {
            "label": "Clinical Observations",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true
          },
          {
            "label": "Notes",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true
          },
          {
            "label": "Claims",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true
          }
        ]
      },
      {
        "label": "Visit 3",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": false,
        "expanded": false,
        "children": [
          {
            "label": "Prescreening",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true
          },
          {
            "label": "Clinical Observations",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true,
          },
          {
            "label": "Notes",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true,
            click:""
          },
          {
            "label": "Claims",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true
          }
        ]
      },
      {
        "label": "Visit 4",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": false,
        "expanded": false,
        "children": [
          {
            "label": "Prescreening",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true
          },
          {
            "label": "Clinical Observations",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true
          },
          {
            "label": "Notes",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true
          },
          {
            "label": "Claims",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true
          }
        ]
      },
      ]
    }
  }
  treeData: any;

  public getTreeJSON() {
    return this.treeData;
  }


}
