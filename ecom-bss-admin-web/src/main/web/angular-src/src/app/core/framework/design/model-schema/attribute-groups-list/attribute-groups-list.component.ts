import { Component, OnInit } from '@angular/core';
import { DataTableConfig } from
  '../../../material-custom-components/data-table/data-table-config';
import {AttributeGroup} from "../models/attribute-group";

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
       loadAPI: '/application/api/5e934da667ed1fb0bcf0fca8/load/all',
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
