import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AttributeGroup} from '../models/attribute-group';
import {ApplicationSchemaService} from '../services/application-schema.service';


@Component({
  selector: 'add-attribute-groups',
  templateUrl: './add-attribute-groups.component.html',
  styleUrls: ['./add-attribute-groups.component.scss']
})
export class AddAttributeGroupsComponent implements OnInit {
  private attributeGroup: AttributeGroup;
  private submitted = false;
  private title = 'Add New Attribute Group';

  constructor(private route: ActivatedRoute,
              private applicationSchemaService: ApplicationSchemaService,
              private router: Router) { }

  ngOnInit() {
    this.attributeGroup = {};
    this.route.paramMap.subscribe((params) => {
        if (params.has('id')) {
           this.title = 'Edit Attribute Group';
        }
    });
  }

  public onSubmit() {
    if (this.attributeGroup.id) {
      this.applicationSchemaService.updateAttributeGroup(this.attributeGroup)
        .subscribe(attributeGroup => {
          console.log('updateAttributeGroup response.body:  ' + attributeGroup);
          if (attributeGroup) {
            this.attributeGroup = {};
          }
        },
      );
    } else {
      this.applicationSchemaService.addAttributeGroup(this.attributeGroup)
        .subscribe(newAttributeGroup => {
          console.log('addAttributeGroup response.body:  ' + newAttributeGroup);
          // this.addProduct.emit(newObjectType);
          this.attributeGroup = {};
          this.router.navigate(['/application/design/model']);
        });
    }
    this.submitted = true;
  }
}
