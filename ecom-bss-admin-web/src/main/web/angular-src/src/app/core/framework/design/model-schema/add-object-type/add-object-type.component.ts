import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {ObjectType} from "../models/object-type";

@Component({
  selector: 'app-add-object-type',
  templateUrl: './add-object-type.component.html',
  styleUrls: ['./add-object-type.component.scss']
})
export class AddObjectTypeComponent implements OnInit {
  private attributeGroup: ObjectType;
  private title = "Add Object Type";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.title = "Edit Object Type";
      }
    });
  }
}
