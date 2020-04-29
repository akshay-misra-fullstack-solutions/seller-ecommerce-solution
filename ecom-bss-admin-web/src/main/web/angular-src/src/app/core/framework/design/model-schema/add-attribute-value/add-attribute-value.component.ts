import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApplicationRouteService} from '../../../services/application-route.service';
import {AttributeValue} from '../models/attribute-value';
import {ApplicationSchemaService} from '../services/application-schema.service';

@Component({
  selector: 'app-add-attribute-value',
  templateUrl: './add-attribute-value.component.html',
  styleUrls: ['./add-attribute-value.component.scss']
})
export class AddAttributeValueComponent implements OnInit {
  private title = 'Add New Attribute Value';
  private cancelLink: string;
  private attributeValue: AttributeValue;
  private submitted = false;

  constructor(private route: ActivatedRoute,
              private applicationRouteService: ApplicationRouteService,
              private applicationSchemaService: ApplicationSchemaService) { }

  ngOnInit() {
    this.attributeValue = {};
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.title = 'Edit Attribute Value';
      }
      if (params.has('parentId')) {
        this.attributeValue.parentId = params.get('parentId');
      }
    });

    this.calculateCancelLink();
  }

  public calculateCancelLink() {
    const previousRoute = this.applicationRouteService.getPreviousRoute();
    const currentRoute = this.applicationRouteService.getCurrentRoute();
    if (previousRoute === currentRoute) {
      if (currentRoute.includes('add')) {
        this.cancelLink = currentRoute.replace('add', '');
      } else {
        this.cancelLink = currentRoute.substring(0, currentRoute.indexOf('edit'));
      }
    } else {
      this.cancelLink = this.applicationRouteService.getPreviousRoute();
    }
    console.log('**** cancelLink: ' + this.cancelLink);
  }


  public onSubmit() {
    console.log('onSubmit, publicName: ' + this.attributeValue.publicName);
    console.log('onSubmit, name: ' + this.attributeValue.name);
    if (this.attributeValue.publicName === undefined) {
      this.attributeValue.publicName = this.attributeValue.name;
    }
    console.log('onSubmit, publicName 1: ' + this.attributeValue.publicName);
    if (this.attributeValue.id) {
      this.applicationSchemaService.updateAttributeValue(this.attributeValue)
        .subscribe(attributeValue => {
            console.log('updateAttributeValue response.body:  ' + attributeValue);
            if (attributeValue) {
              this.attributeValue = {};
            }
          },
        );
    } else {
      this.applicationSchemaService.addAttributeValue(this.attributeValue)
        .subscribe(newAttributeValue => {
          console.log('addAttributeValue response.body:  ' + newAttributeValue);
          // this.addProduct.emit(newObjectType);
          this.attributeValue = {};
          this.applicationRouteService.navigate(this.cancelLink);
        });
    }
    this.submitted = true;
  }
}
