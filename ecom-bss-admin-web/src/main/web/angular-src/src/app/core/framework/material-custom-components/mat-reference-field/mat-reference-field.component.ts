import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {MatReferenceFieldConfig} from './mat-reference-field-config';

@Component({
  selector: 'mat-reference-field',
  templateUrl: './mat-reference-field.component.html',
  styleUrls: ['./mat-reference-field.component.scss']
})
export class MatReferenceFieldComponent implements OnInit {
  myControl = new FormControl();
  @Input() fieldConfig: MatReferenceFieldConfig;
  private options: any[];
  private fieldName: string;
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.options = this.fieldConfig.options;
    this.fieldName = this.fieldConfig.fieldName;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      option => option.name.toLowerCase().includes(filterValue)
    );
  }
}
