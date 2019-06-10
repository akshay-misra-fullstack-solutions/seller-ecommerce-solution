import { Component, OnInit } from '@angular/core';
import { DataTableConfig } from "../../../material-custom-components/data-table/data-table-config";
import { LayoutConfig } from "../model/layout-config";


const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'layout-config',
  templateUrl: './layout-config.component.html',
  styleUrls: ['./layout-config.component.scss']
})
export class LayoutConfigComponent implements OnInit {

  private attributes: LayoutConfig[] = [];
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
          href: '/application/add/layout/config',
          icon: 'note_add'
        }
      ],
      inlineToolbar: [
        {
          id: 'edit',
          type: 'anchor',
          name: 'Edit',
          href: '/application/edit/layout/config',
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
function createNewAttribute(id: number): LayoutConfig {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const av = ['Red', 'Blue', 'Green', 'Yellow'];

  return {
    id: id.toString(),
    layoutTitle: 'Layout Configs',
    loadAPI: '/get/layout/configs/:objectTypeId/:id',
    addAPI: '/add/layout/configs/',
    updateAPI: '/update/layout/configs/',
    deleteAPI: '/delete/layout/configs/',
    pageSize: 10,
    objectTypeId: 'LayoutConfig1006'
  };
}
