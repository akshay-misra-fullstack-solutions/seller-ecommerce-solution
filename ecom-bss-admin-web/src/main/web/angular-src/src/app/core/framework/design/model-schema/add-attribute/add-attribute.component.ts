import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MatReferenceFieldConfig } from '../../../material-custom-components/mat-reference-field/mat-reference-field-config';
import {Attribute} from "../models/attribute";
import {AttributeGroup} from "../models/attribute-group";

@Component({
  selector: 'add-attribute',
  templateUrl: './add-attribute.component.html',
  styleUrls: ['./add-attribute.component.scss']
})
export class AddAttributeComponent implements OnInit {
  private attribute: Attribute;
  private options: AttributeGroup[] = [{id: '100', name: 'AttributeGroup1'}, 
    {id: '103', name: 'AttributeGroup2'}, {id: '120', name: 'AttributeGroup3'}];
  private title = "Add New Attribute";
  private attrGroupFieldConfig: MatReferenceFieldConfig;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     this.route.paramMap.subscribe((params) => {
        if (params.has('id')) {
           this.title = "Edit Attribute";
        }
      }); 

    this.attrGroupFieldConfig = {
      options: this.options,
      fieldName: 'Attribute Group'
    };
  }
}
