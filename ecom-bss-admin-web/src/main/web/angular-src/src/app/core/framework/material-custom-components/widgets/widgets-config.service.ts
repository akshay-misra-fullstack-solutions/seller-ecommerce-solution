import { Injectable } from '@angular/core';

import { DataTableConfig } from '../data-table/data-table-config';
import {AttributeService} from '../../../../bss/components/product_management/attribute-specification/services/attribute.service';


@Injectable({
  providedIn: 'root'
})
export class WidgetsConfigService {

  constructor(private attributeService: AttributeService) {}

  tableConfig: DataTableConfig = <DataTableConfig> {
    data: [],
    tableTitle: 'Attributes',
    columns: [],
    topToolbar: [
      {
        type: 'button',
        name: 'Delete Attribute',
        icon: 'delete'
      },
      {
        type: 'anchor',
        name: 'Add Attribute',
        href: '/catalog/add/attribute',
        icon: 'note_add'
      }
    ],
    inlineToolbar: [{
      type: 'anchor',
      name: 'Edit',
      href: '/catalog/edit/attribute',
      icon: 'edit'
    }],
    attrService: this.attributeService,
    loadChildrens: function (parentId) {
      return this.attrService.getAttributeValues("1");
    }
  };
}
