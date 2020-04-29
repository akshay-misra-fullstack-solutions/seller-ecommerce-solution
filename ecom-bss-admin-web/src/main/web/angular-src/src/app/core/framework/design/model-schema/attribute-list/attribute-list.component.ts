import { Component, OnInit } from '@angular/core';
import { DataTableConfig } from
  '../../../material-custom-components/data-table/data-table-config';
import {Attribute} from "../models/attribute";

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
        loadAPI: '/application/api/5e934d4567ed1fb0bcf0fca7/load/all',
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
          href: '/application/api/load/details/5e934d4567ed1fb0bcf0fca7',
          icon: 'edit'
        }]
      };
  }

  deleteObject(attributeId) {
    console.log('Attribute, deleteObject, id: ', attributeId);
  }
}
