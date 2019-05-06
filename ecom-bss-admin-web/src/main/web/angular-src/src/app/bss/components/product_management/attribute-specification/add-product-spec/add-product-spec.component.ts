import { Component, OnInit } from '@angular/core';

import { Attribute } from '../../models/attribute';
import { ProductSpecification } from '../../models/product-specification';
import { MatReferenceFieldConfig } from '../../../../../core/framework/material-custom-components/mat-reference-field/mat-reference-field-config';

@Component({
  selector: 'add-product-spec',
  templateUrl: './add-product-spec.component.html',
  styleUrls: ['./add-product-spec.component.scss']
})
export class AddProductSpecComponent implements OnInit {

private options: Attribute[] = [{id: '100', name: 'Attribute1'}, {id: '103', name: 'Attribute2'}, 
   {id: '120', name: 'Attribute3'}];
private productSpecification: ProductSpecification;
private attributesFieldConfig: MatReferenceFieldConfig;

  constructor() { }

  ngOnInit() {
  	this.productSpecification = {};
  	this.attributesFieldConfig = {
      options: this.options,
      fieldName: 'Attributes'
    };
  }

}
