import { Component, OnInit } from '@angular/core';
import { DataTableConfig } from 
'../../../../../core/framework/material-custom-components/data-table/data-table-config';
import { AttributeGroup } from '../../models/attribute-group';

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
    this.attributeGroups = Array.from({length: 100}, (_, k) => createNewAttribute(k + 1));
    this.columns = this.getColumns();

    this.tableConfig = {
       data: this.attributeGroups,
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
                      href: '/catalog/add/attribute/group',
                      icon: 'note_add' 
                    }
                   ],
       inlineToolbar: [{ 
                          type: 'anchor', 
                          name: 'Edit', 
                          href: '/catalog/edit/attribute/group',
                          icon: 'edit' 
                        }]  
      } 

  }
  
  private getColumns(): string[] {
    const columns: any[] = [];
    columns.push({ columnDef: 'select'});
    for (const key of Object.keys(this.attributeGroups[0])) {
         columns.push({ columnDef: key, header: key.toLocaleUpperCase(),
           dataName: function(row) {return row[this.columnDef];} });
    }
    columns.push({ columnDef: 'actions', header: 'ACTIONS',
      dataName: function(row) {return row[this.columnDef];}});
    return columns;
  }

  deleteObject(attributeId) {
    console.log('Attribute Group, deleteObject, id: ', attributeId);
  }
}

/** Builds and returns a new Attribute Group. */
function createNewAttribute(id: number): AttributeGroup {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    sortOrder: id
  };
}