import { Injectable } from '@angular/core';

import { DataTableConfig } from '../data-table/data-table-config';
import {ApplicationSchemaService} from '../../design/model-schema/services/application-schema.service';


@Injectable({
  providedIn: 'root'
})
export class WidgetsConfigService {

  constructor(private applicationSchemaService: ApplicationSchemaService) {}

  attributeTableConfig: DataTableConfig = <DataTableConfig> {
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
    inlineToolbar: [
      {
      id: 'edit',
      type: 'anchor',
      name: 'Edit',
      href: '/catalog/edit/attribute',
      icon: 'edit'
      },
      {
        id: 'children',
        type: 'anchor',
        name: 'Attribute Values',
        href: '/catalog/attribute/values',
        icon: 'edit'
      }]
  };

  attributeValueTableConfig: DataTableConfig = <DataTableConfig> {
    data: [],
    tableTitle: 'Attribute Values',
    columns: [],
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
      type: 'anchor',
      name: 'Edit',
      href: '/catalog/edit/attribute/value',
      icon: 'edit'
    }]
  };

  attributeGroupTableConfig: DataTableConfig = <DataTableConfig> {
    data: [],
    tableTitle: 'Attribute Groups',
    columns: [],
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
  };

  productSpecTableConfig: DataTableConfig = <DataTableConfig> {
    data: [],
    tableTitle: 'Product Specifications',
    columns: [],
    topToolbar: [
      {
        type: 'button',
        name: 'Delete Product Specification',
        icon: 'delete'
      },
      {
        type: 'anchor',
        name: 'Add Product Specification',
        href: '/catalog/add/product/specification',
        icon: 'note_add'
      }
    ],
    inlineToolbar: [{
      type: 'anchor',
      name: 'Edit',
      href: '/catalog/edit/product/specification',
      icon: 'edit'
    }]
  };


  CONFIG = new Map([
      ['Attribute1000', this.attributeTableConfig],
      ['AttributeGroup1001', this.attributeGroupTableConfig],
      ['ProductSpecification1002', this.productSpecTableConfig],
      ['AttributeValue1003', this.attributeValueTableConfig]
  ]);

}
