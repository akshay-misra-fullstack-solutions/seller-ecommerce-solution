import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductSpecification } from '../../models/product-specification';
import { MatReferenceFieldConfig } from '../../../../../core/framework/material-custom-components/mat-reference-field/mat-reference-field-config';
import {Attribute} from "../../../../../core/framework/design/model-schema/models/attribute";

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
private title = "Add New Product Specification";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.productSpecification = {};
    this.route.paramMap.subscribe((params) => {
        if (params.has('id')) {
           this.title = "Edit Product Specification";
        }
    }); 
  	this.attributesFieldConfig = {
      options: this.options,
      fieldName: 'Attributes'
    };
  }

}
