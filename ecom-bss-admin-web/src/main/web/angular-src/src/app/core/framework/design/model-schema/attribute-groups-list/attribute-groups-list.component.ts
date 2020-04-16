import { Component, OnInit } from '@angular/core';
import { DataTableConfig } from
  '../../../material-custom-components/data-table/data-table-config';
import {AttributeGroup} from "../models/attribute-group";

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
  selector: 'attribute-groups-list',
  templateUrl: './attribute-groups-list.component.html',
  styleUrls: ['./attribute-groups-list.component.scss']
})
export class AttributeGroupsListComponent implements OnInit {

  private attributeGroups: AttributeGroup[] = [];
  private columns: any[] = [];

  private tableConfig: DataTableConfig;

  constructor() {}

  ngOnInit() {
    this.tableConfig = {
       data: this.attributeGroups,
       loadAPI: '/application/schema/get/attribute-groups',
       tableTitle: 'Attribute Groups',
       columns: this.columns,
       topToolbar: [
                    {
                      type: 'button',
                      name: 'Delete Attribute Group',
                      icon: 'delete'
                    },
                    {
                      type: 'anchor',
                      name: 'Add Attribute Group',
                      href: '/application/design/model/add/attribute/group',
                      icon: 'note_add'
                    }
                   ],
       inlineToolbar: [{
                          id: 'edit',
                          type: 'anchor',
                          name: 'Edit',
                          href: '/application/design/model/edit/attribute/group',
                          icon: 'edit'
                        }]
      }
  }

  deleteObject(attributeId) {
    console.log('Attribute Group, deleteObject, id: ', attributeId);
  }
}
