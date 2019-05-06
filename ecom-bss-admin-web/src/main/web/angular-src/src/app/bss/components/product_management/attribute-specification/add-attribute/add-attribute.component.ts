import { Component, OnInit } from '@angular/core';

import { Attribute } from '../../models/attribute';
import { AttributeGroup } from '../../models/attribute-group';
import { MatReferenceFieldConfig } from '../../../../../core/framework/material-custom-components/mat-reference-field/mat-reference-field-config';

@Component({
  selector: 'add-attribute',
  templateUrl: './add-attribute.component.html',
  styleUrls: ['./add-attribute.component.scss']
})
export class AddAttributeComponent implements OnInit {
  private options: AttributeGroup[] = [{id: '100', name: 'AttributeGroup1'}, {id: '103', name: 'AttributeGroup2'}, {id: '120', name: 'AttributeGroup3'}];

  private attribute : Attribute;
  private attrGroupFieldConfig: MatReferenceFieldConfig;


  constructor() { }

  ngOnInit() {
    this.attribute = {};
    this.attrGroupFieldConfig = {
      options: this.options,
      fieldName: 'Attribute Group'
    };
  }
}
