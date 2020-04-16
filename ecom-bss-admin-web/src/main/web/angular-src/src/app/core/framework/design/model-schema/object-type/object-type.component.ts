import { Component, OnInit } from '@angular/core';
import {ObjectType} from "../models/object-type";
import {DataTableConfig} from "../../../material-custom-components/data-table/data-table-config";
import {Subscription} from 'rxjs';
import {ApplicationSchemaService} from '../services/application-schema.service';

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'object-type-list',
  templateUrl: './object-type.component.html',
  styleUrls: ['./object-type.component.scss']
})
export class ObjectTypeComponent implements OnInit {

  private objectTypes: ObjectType[] = [];
  private columns: any[] = [];
  private addObjectTypeSubscription: Subscription;

  private tableConfig: DataTableConfig;

  constructor(private applicationSchemaService: ApplicationSchemaService) {

    this.addObjectTypeSubscription = this.applicationSchemaService.addObjectTypeHandler().subscribe(objectType => {
      this.objectTypes.push(objectType);
      console.log('.... addObjectTypeSubscription, new objectType: '+objectType.name);
      console.log('.... addObjectTypeSubscription, objectTypes size: '+this.objectTypes.length);
    });
  }

  ngOnInit() {
    this.tableConfig = {
      data: this.objectTypes,
      loadAPI: '/application/schema/get/object-types',
      tableTitle: 'Object Types',
      columns: this.columns,
      topToolbar: [
        {
          type: 'button',
          name: 'Delete Object Type',
          icon: 'delete'
        },
        {
          type: 'anchor',
          name: 'Add Object Type',
          href: '/application/design/model/add/object/type',
          icon: 'note_add'
        }
      ],
      inlineToolbar: [
        {
          id: 'edit',
          type: 'anchor',
          name: 'Edit',
          href: '/application/design/model/edit/object/type',
          icon: 'edit'
        }]
    }
  }

  ngOnDestroy() {
    this.addObjectTypeSubscription.unsubscribe();
  }

  deleteObject(attributeId) {
    console.log('Attribute, deleteObject, id: ', attributeId);
  }
}

