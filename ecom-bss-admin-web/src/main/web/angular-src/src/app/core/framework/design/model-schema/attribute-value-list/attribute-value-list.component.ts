import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataTableConfig } from
  '../../../material-custom-components/data-table/data-table-config';
import {AttributeValue} from "../models/attribute-value";
import {ApplicationSchemaService} from '../services/application-schema.service';

@Component({
  selector: 'app-attribute-value-list',
  templateUrl: './attribute-value-list.component.html',
  styleUrls: ['./attribute-value-list.component.scss']
})
export class AttributeValueListComponent implements OnInit {

  private attributeValues: AttributeValue[] = [];
  private columns: any[] = [];
  private loadAPI: string;

  private tableConfig: DataTableConfig;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private applicationSchemaService: ApplicationSchemaService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('parentId')) {
        this.loadAPI = '/application/api//5e934d4567ed1fb0bcf0fca7/load/children/' + params.get('parentId');
      }
    });

    this.tableConfig = {
      data: this.attributeValues,
      loadAPI: this.loadAPI,
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
          href: 'add',
          icon: 'note_add'
        }
      ],
      inlineToolbar: [{
        id: 'edit',
        type: 'anchor',
        name: 'Edit',
        href: 'edit',
        icon: 'edit'
      }]
    }
  }

  deleteObject(attributeId) {
    console.log('AttributeValue, deleteObject, id: ', attributeId);
  }
}
