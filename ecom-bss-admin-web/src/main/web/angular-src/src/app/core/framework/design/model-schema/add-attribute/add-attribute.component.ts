import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MatReferenceFieldConfig } from '../../../material-custom-components/mat-reference-field/mat-reference-field-config';
import {Attribute} from '../models/attribute';
import {AttributeGroup} from '../models/attribute-group';
import {ApplicationSchemaService} from '../services/application-schema.service';
import {ObjectType} from '../models/object-type';

@Component({
  selector: 'add-attribute',
  templateUrl: './add-attribute.component.html',
  styleUrls: ['./add-attribute.component.scss']
})
export class AddAttributeComponent implements OnInit {
  private attribute: Attribute;
  private options: AttributeGroup[] = [];
  private attrGroupFieldConfig: MatReferenceFieldConfig;
  private objectTypeFieldConfig: MatReferenceFieldConfig;
  private submitted = false;
  private title = 'Add New Attribute';

  constructor(private route: ActivatedRoute,
              private applicationSchemaService: ApplicationSchemaService,
              private router: Router) { }

  ngOnInit() {
    this.attribute = {};
     this.route.paramMap.subscribe((params) => {
        if (params.has('id')) {
           this.title = 'Edit Attribute';
        }
      });

    this.attrGroupFieldConfig = {
      options: this.options,
      fieldName: 'Attribute Group',
      multiple: false,
      loadAPI: '/application/api//5e934da667ed1fb0bcf0fca8/load/all',
      required: true
    };

    this.objectTypeFieldConfig = {
      options: this.options,
      fieldName: 'Reference To Object Type',
      multiple: false,
      loadAPI: '/application/api//5ea86babc8ae3bed0b307a4d/load/all',
      required: true
    };
  }

  updateAttributeGroup(attributeGroup: AttributeGroup) {
    console.log('updateAttributes, attributeGroup: ' + attributeGroup);
    this.attribute.attributeGroup = attributeGroup;
  }

  updateObjectType(objectType: ObjectType) {
    console.log('updateObjectType, objectType: ' + objectType);
    this.attribute.referenceToObjectType = objectType.id;
  }


  public onSubmit() {
    if (this.attribute.id) {
      this.applicationSchemaService.updateAttribute(this.attribute)
        .subscribe(attribute => {
            console.log('updateAttribute response.body:  ' + attribute);
            if (attribute) {
              this.attribute = {};
            }
          },
        );
    } else {
      this.applicationSchemaService.addAttribute(this.attribute)
        .subscribe(newAttribute => {
          console.log('addAttribute response.body:  ' + newAttribute);
          // this.addProduct.emit(newObjectType);
          this.attribute = {};
          this.router.navigate(['/application/design/model']);
        });
    }
    this.submitted = true;
  }
}
