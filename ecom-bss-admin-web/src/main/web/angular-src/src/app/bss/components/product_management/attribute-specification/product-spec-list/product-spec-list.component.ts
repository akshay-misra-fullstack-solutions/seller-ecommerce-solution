import { Component, OnInit } from '@angular/core';
import {DataTableConfig} from '../../../../views/data-table/data-table-config';
import { ProductSpecification } from '../../models/product-specification';


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
  selector: 'product-spec-list',
  templateUrl: './product-spec-list.component.html',
  styleUrls: ['./product-spec-list.component.scss']
})
export class ProductSpecListComponent implements OnInit {

  private productSpecifications: ProductSpecification[] = [];
  private columns: any[] = [];

  private tableConfig: DataTableConfig;

  constructor() {}

  ngOnInit() {
    this.productSpecifications = Array.from({length: 100}, (_, k) => createNewAttribute(k + 1));
    this.columns = this.getColumns();

    this.tableConfig = {
       data: this.productSpecifications,
       tableTitle: 'Product Specifications',
       columns: this.columns,
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
                   ] 
      } 

  }
  

  private getColumns(): string[] {
    const columns: any[] = [];
    columns.push({ columnDef: 'select'});
    for (const key of Object.keys(this.productSpecifications[0])) {
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
function createNewAttribute(id: number): ProductSpecification {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name
  };
}
