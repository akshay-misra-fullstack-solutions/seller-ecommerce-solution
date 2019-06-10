import { Component, OnInit } from '@angular/core';
import {SideNavigationTab} from "../model/side-navigation-tab";
import {DataTableConfig} from "../../../material-custom-components/data-table/data-table-config";

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'side-navigation-tab',
  templateUrl: './side-navigation-tab.component.html',
  styleUrls: ['./side-navigation-tab.component.scss']
})
export class SideNavigationTabComponent implements OnInit {

  private attributes: SideNavigationTab[] = [];
  private columns: any[] = [];

  private tableConfig: DataTableConfig;

  constructor() {}

  ngOnInit() {
    this.attributes = Array.from({length: 100}, (_, k) => createNewAttribute(k + 1));
    this.columns = this.getColumns();

    this.tableConfig = {
      data: this.attributes,
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
          href: '/application/add/side/nav/tab',
          icon: 'note_add'
        }
      ],
      inlineToolbar: [
        {
          id: 'edit',
          type: 'anchor',
          name: 'Edit',
          href: '/application/edit/side/nav/tab',
          icon: 'edit'
        },
        {
          id: 'children',
          type: 'anchor',
          name: 'Attribute Values',
          href: '/catalog/attribute/values',
          icon: 'edit'
        }]
    }

  }

  private getColumns(): string[] {
    const columns: any[] = [];
    columns.push({ columnDef: 'select'});
    for (const key of Object.keys(this.attributes[0])) {
      columns.push({ columnDef: key, header: key.toLocaleUpperCase(),
        dataName: function(row) {return row[this.columnDef];} });
    }
    columns.push({ columnDef: 'actions', header: 'ACTIONS',
      dataName: function(row) {return row[this.columnDef];}});
    return columns;
  }

  deleteObject(attributeId) {
    console.log('Attribute, deleteObject, id: ', attributeId);
  }
}

/** Builds and returns a new Attribute. */
function createNewAttribute(id: number): SideNavigationTab {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const av = ['Red', 'Blue', 'Green', 'Yellow'];

  return {
    id: id.toString(),
    name: name,
    parentId: id.toString(),
    icon: '',
    subTabs: [],
    tabLayoutId: id.toString(),
    objectTypeId: 'SideNavigationTab1007'
  };
}

