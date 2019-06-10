import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataTableConfig } from
  '../../../material-custom-components/data-table/data-table-config';
import {AttributeService} from '../services/attribute.service';
import {AttributeValue} from "../models/attribute-value";



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
  selector: 'app-attribute-value-list',
  templateUrl: './attribute-value-list.component.html',
  styleUrls: ['./attribute-value-list.component.scss']
})
export class AttributeValueListComponent implements OnInit {

  private attributeValues: AttributeValue[] = [];
  private columns: any[] = [];

  private tableConfig: DataTableConfig;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private attributeService: AttributeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        console.log('___ attribute id: '+params.get('id'));

        console.log('########## ngOnInit, getAttributeValues: ',
          this.attributeService.getAttributeValues(params.get('id')));
      }
    });

    this.attributeValues = Array.from({length: 100}, (_, k) => createNewAttribute(k + 1));
    this.columns = this.getColumns();

    this.tableConfig = {
      data: this.attributeValues,
      tableTitle: 'Attributes',
      columns: this.columns,
      topToolbar: [
        {
          type: 'button',
          name: 'Delete Attribute Value',
          icon: 'delete'
        },
        {
          type: 'anchor',
          name: 'Add Attribute Value',
          href: '/catalog/add/attribute/value',
          icon: 'note_add'
        }
      ],
      inlineToolbar: [{
        id: 'edit',
        type: 'anchor',
        name: 'Edit',
        href: '/catalog/edit/attribute/value',
        icon: 'edit'
      }]
    }
  }

  private getColumns(): string[] {
    const columns: any[] = [];
    columns.push({ columnDef: 'select'});
    for (const key of Object.keys(this.attributeValues[0])) {
      columns.push({ columnDef: key, header: key.toLocaleUpperCase(),
        dataName: function(row) {return row[this.columnDef];} });
    }
    columns.push({ columnDef: 'actions', header: 'ACTIONS',
      dataName: function(row) {return row[this.columnDef];}});
    return columns;
  }

  deleteObject(attributeId) {
    console.log('AttributeValue, deleteObject, id: ', attributeId);
  }
}

/** Builds and returns a new Attribute. */
function createNewAttribute(id: number): AttributeValue {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const av = ['Red', 'Blue', 'Green', 'Yellow'];

  return {
    id: id.toString(),
    name: name,
    objectTypeId: 'AttributeValue1003'
  };
}
