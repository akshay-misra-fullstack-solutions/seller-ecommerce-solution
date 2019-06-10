import { Component, OnInit } from '@angular/core';
import {ObjectType} from "../models/object-type";
import {DataTableConfig} from "../../../material-custom-components/data-table/data-table-config";

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

  private attributes: ObjectType[] = [];
  private columns: any[] = [];

  private tableConfig: DataTableConfig;

  constructor() {}

  ngOnInit() {
    this.attributes = Array.from({length: 100}, (_, k) => createNewAttribute(k + 1));
    this.columns = this.getColumns();

    this.tableConfig = {
      data: this.attributes,
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
function createNewAttribute(id: number): ObjectType {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const av = ['Red', 'Blue', 'Green', 'Yellow'];

  return {
    id: id.toString(),
    name: name,
  };
}

