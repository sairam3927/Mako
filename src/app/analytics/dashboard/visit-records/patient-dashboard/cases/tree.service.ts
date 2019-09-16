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
        "label": "Case-1",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": false,
        "expanded": true,
        "children": [
          {
          "label": "Visit-1",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": false,
          "expanded": false,
          "children":[
            {
              "label":"Prescreening",
              "icon":"fa fa-folder goodColor",
              "data":"Express"
            },
            {
              "label":"Clinical Observations",
              "icon":"fa fa-folder goodColor",
              "data":"Express"
            },
            {
              "label":"Notes",
              "icon":"fa fa-folder goodColor",
              "data":"Express"
            },
            {
              "label":"Claims",
              "icon":"fa fa-folder goodColor",
              "data":"Express"
            },
          ]
        },
        {
          "label": "Visit-2",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": false,
          "expanded": false,
          "children":[
            {
              "label":"Prescreening",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
            {
              "label":"Clinical Observations",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
            {
              "label":"Notes",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
            {
              "label":"Claims",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
          ]
        },
        {
          "label": "Visit-3",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": false,
          "expanded": false,
          "children":[
            {
              "label":"Prescreening",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
            {
              "label":"Clinical Observations",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
            {
              "label":"Notes",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
            {
              "label":"Claims",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
          ]
        },
        {
          "label": "Visit-4",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": false,
          "expanded": false,
          "children":[
            {
              "label":"Prescreening",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
            {
              "label":"Clinical Observations",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
            {
              "label":"Notes",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
            {
              "label":"Claims",
              "icon":"fa fa-briefcase gold",
              "data":"Express"
            },
          ]
        }
        ]
      },
      {
        "label": "Case-2",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": false,
        "expanded": false,
        "children": [
          {
            "label": "Visit-1",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": false,
            "expanded": true,
            "children":[
              {
                "label":"Prescreening",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Clinical Observations",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Notes",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Claims",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
            ]
          },
          {
            "label": "Visit-2",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true,
            "children":[
              {
                "label":"Prescreening",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Clinical Observations",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Notes",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Claims",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
            ]
          },
          {
            "label": "Visit-3",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true,
            "children":[
              {
                "label":"Prescreening",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Clinical Observations",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Notes",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Claims",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
            ]
          },
          {
            "label": "Visit-4",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true,
            "children":[
              {
                "label":"Prescreening",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Clinical Observations",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Notes",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
              {
                "label":"Claims",
                "icon":"fa fa-briefcase gold",
                "data":"Express"
              },
            ]
          }
        ]
      }
      ]
    }
  }
  treeData: any;

  public getTreeJSON() {
    return this.treeData;
  }


}
