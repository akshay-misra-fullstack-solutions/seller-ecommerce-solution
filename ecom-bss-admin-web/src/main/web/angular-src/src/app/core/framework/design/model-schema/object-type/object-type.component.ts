import { Component, OnInit } from '@angular/core';
import {ObjectType} from "../models/object-type";
import {DataTableConfig} from "../../../material-custom-components/data-table/data-table-config";
import {ApplicationSchemaService} from '../services/application-schema.service';

@Component({
  selector: 'object-type-list',
  templateUrl: './object-type.component.html',
  styleUrls: ['./object-type.component.scss']
})
export class ObjectTypeComponent implements OnInit {

  private objectTypes: ObjectType[] = [];
  private columns: any[] = [];

  private tableConfig: DataTableConfig;

  constructor(private applicationSchemaService: ApplicationSchemaService) {}

  ngOnInit() {
    this.tableConfig = {
      data: this.objectTypes,
      loadAPI: '/application/api/5ea86babc8ae3bed0b307a4d/load/all',
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

  ngOnDestroy() {}

  deleteObject(attributeId) {
    console.log('Attribute, deleteObject, id: ', attributeId);
  }
}

