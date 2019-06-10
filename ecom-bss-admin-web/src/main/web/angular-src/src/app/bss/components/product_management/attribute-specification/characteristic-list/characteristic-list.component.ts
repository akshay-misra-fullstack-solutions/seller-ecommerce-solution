import { Component, OnInit } from '@angular/core';
import {Characteristic} from "../../models/characteristic";
import {DataTableConfig} from "../../../../../core/framework/material-custom-components/data-table/data-table-config";


const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'characteristic-list',
  templateUrl: './characteristic-list.component.html',
  styleUrls: ['./characteristic-list.component.scss']
})
export class CharacteristicListComponent implements OnInit {

  private characteristics: Characteristic[] = [];
  private columns: any[] = [];

  private tableConfig: DataTableConfig;

  constructor() {}

  ngOnInit() {
    this.characteristics = Array.from({length: 100}, (_, k) => createNewAttribute(k + 1));
    this.columns = this.getColumns();

    this.tableConfig = {
      data: this.characteristics,
      tableTitle: 'Characteristic',
      columns: this.columns,
      topToolbar: [
        {
          type: 'button',
          name: 'Delete Characteristic',
          icon: 'delete'
        },
        {
          type: 'anchor',
          name: 'Add Characteristic',
          href: '/catalog/add/product/specification',
          icon: 'note_add'
        }
      ],
      inlineToolbar: [{
        id: 'edit',
        type: 'anchor',
        name: 'Edit',
        href: '/catalog/edit//product/specification',
        icon: 'edit'
      }]
    }

  }

  private getColumns(): string[] {
    const columns: any[] = [];
    columns.push({ columnDef: 'select'});
    for (const key of Object.keys(this.characteristics[0])) {
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

/** Builds and returns a new Product Specification. */
function createNewAttribute(id: number): Characteristic {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    attribute: {},
    objectTypeId: 'Characteristic1018'
  };
}
