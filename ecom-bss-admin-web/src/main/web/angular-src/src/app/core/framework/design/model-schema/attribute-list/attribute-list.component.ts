import { Component, OnInit } from '@angular/core';
import { DataTableConfig } from
  '../../../material-custom-components/data-table/data-table-config';
import {Attribute} from "../models/attribute";


/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.scss']
})
export class AttributeListComponent implements OnInit {

  private attributes: Attribute[] = [];
  private columns: any[] = [];

  private tableConfig: DataTableConfig;

  constructor() {}

  ngOnInit() {
    this.tableConfig = {
        data: this.attributes,
        loadAPI: '/application/schema/get/attributes',
        tableTitle: 'Attributes',
        columns: this.columns,
        topToolbar: [
                    {
                      type: 'button',
                      name: 'Delete Attribute',
                      icon: 'delete'
                    },
                    {
                      type: 'anchor',
                      name: 'Add Attribute',
                      href: '/application/design/model/add/attribute',
                      icon: 'note_add'
                    }
                   ],
      inlineToolbar: [
        {
          id: 'edit',
          type: 'anchor',
          name: 'Edit',
          href: '/application/design/model/edit/attribute',
          icon: 'edit'
        },
        {
          id: 'children',
          type: 'anchor',
          name: 'Attribute Values',
          href: '/application/design/model/attribute/values',
          icon: 'edit'
        }]
      }
  }

  deleteObject(attributeId) {
    console.log('Attribute, deleteObject, id: ', attributeId);
  }
}
