import { Component, OnInit } from '@angular/core';
import {NavigationTab} from '../model/navigation-tab';
import {MatReferenceFieldConfig} from '../../../material-custom-components/mat-reference-field/mat-reference-field-config';
import {ObjectType} from '../../model-schema/models/object-type';
import {ApplicationSchemaService} from '../../model-schema/services/application-schema.service';
import {Router} from '@angular/router';

@Component({
  selector: 'add-side-navigation-tab',
  templateUrl: './add-side-navigation-tab.component.html',
  styleUrls: ['./add-side-navigation-tab.component.scss']
})
export class AddSideNavigationTabComponent implements OnInit {

  private tab: NavigationTab;
  private objectTypes: MatReferenceFieldConfig;
  private submitted = false;
  private title = 'Add New Navigation Tab';

  constructor(private router: Router,
              private applicationSchemaService: ApplicationSchemaService) { }

  ngOnInit() {
    this.tab = {};
    this.objectTypes = {
      options: [],
      fieldName: 'Object Types',
      multiple: true,
      loadAPI: '/application/api//5ea86babc8ae3bed0b307a4d/load/all',
      required: true
    };
  }

  updateObjectTypes(objectTypes: any[]) {
    const otIds: any[] = [];
    console.log('updateObjectTypes, objectTypes: ' + objectTypes);
    if ( objectTypes === undefined || objectTypes.length === 0 ) {
      console.log('updateObjectTypes, objectTypes is empty ' + objectTypes);
      this.tab.objectTypeIds = objectTypes;
    } else {
      objectTypes.forEach(function (value) {
        console.log(value);
        otIds.push(value.id);
      });
      console.log('updateObjectTypes, otIds ' + otIds);
      this.tab.objectTypeIds = otIds;
    }
  }


  public onSubmit() {
    console.log('addNavigationTab response.body:  ' + JSON.stringify(this.tab));
      this.applicationSchemaService.addNavigationTab(this.tab)
        .subscribe(newTab => {
          console.log('addNavigationTab response.body:  ' + newTab);
          // this.addProduct.emit(newObjectType);
          this.tab = {};
          this.router.navigate(['/application/design/layout']);
        });
    this.submitted = true;
    }
}
