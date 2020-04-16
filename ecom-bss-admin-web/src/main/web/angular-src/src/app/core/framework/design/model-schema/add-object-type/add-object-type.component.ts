import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ObjectType} from "../models/object-type";
import {MatReferenceFieldConfig} from '../../../material-custom-components/mat-reference-field/mat-reference-field-config';
import {Attribute} from "../models/attribute";
import {ApplicationSchemaService} from '../services/application-schema.service';

@Component({
  selector: 'app-add-object-type',
  templateUrl: './add-object-type.component.html',
  styleUrls: ['./add-object-type.component.scss']
})
export class AddObjectTypeComponent implements OnInit {
  private objectType: ObjectType;
  private title = "Add Object Type";
  private attributesFieldConfig: MatReferenceFieldConfig;
  private submitted = false;

  private options: Attribute[] = [];

  constructor(private route: ActivatedRoute,
              private applicationSchemaService: ApplicationSchemaService,
              private router: Router) { }

  ngOnInit() {
    this.objectType = {};
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.title = "Edit Object Type";
      }
    });

    this.attributesFieldConfig = {
      options: this.options,
      fieldName: 'Attributes',
      multiple: true,
      loadAPI: '/application/schema/get/attributes'
    };
  }

  updateAttributes(attributes: any[]) {
     console.log("updateAttributes, attributes: "+attributes);
     this.objectType.attributes = attributes;
  }

  public onSubmit() {
    if (this.objectType.id) {
      this.applicationSchemaService.updateObjectType(this.objectType).subscribe(
        objectType => {
          if(objectType) {
            this.objectType = {};
          }
        },
      );
    } else {
      this.applicationSchemaService.addObjectType(this.objectType)
        .subscribe(newObjectType => {
          console.log("addObjectType response.body:  "+newObjectType);
          //this.addProduct.emit(newObjectType);
          this.objectType = {};
          this.router.navigate(['/application/design/model']);
          this.applicationSchemaService.addObjectTypeEvent(newObjectType);
        });
    }
    this.submitted = true;
  }
}
