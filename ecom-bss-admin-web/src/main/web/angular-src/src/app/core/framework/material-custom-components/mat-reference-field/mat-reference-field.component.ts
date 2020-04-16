import {Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import {debounceTime, finalize, map, startWith, switchMap, tap} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatReferenceFieldConfig} from './mat-reference-field-config';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatReferenceFieldService} from './mat-reference-field.service';

@Component({
  selector: 'mat-reference-field',
  templateUrl: './mat-reference-field.component.html',
  styleUrls: ['./mat-reference-field.component.scss']
})
export class MatReferenceFieldComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formControl = new FormControl();
  @Input() fieldConfig: MatReferenceFieldConfig;
  private options: any[] = [];
  private selectedOptions: any[];
  private fieldName: string;
  private filteredOptions: Observable<any>;
  private isLoading = false;
  private errorMsg: string;

  @ViewChild('chipsInput') chipsInput: ElementRef<HTMLInputElement>;
  @Output() updateSelectedOptions = new EventEmitter();

  constructor(private matReferenceFieldService: MatReferenceFieldService) { }


  /*
  *   TODO: Add prohibit selected feature in future.
  * */
  ngOnInit() {
    this.selectedOptions = [];
    this.fieldName = this.fieldConfig.fieldName;

    if (this.fieldConfig.options.length === 0 && this.fieldConfig.loadAPI) {
      this.formControl.valueChanges
        .pipe(
          debounceTime(500),
          tap(() => {
            this.errorMsg = '';
            this.isLoading = true;
          }),
          switchMap(value => this.matReferenceFieldService.loadObjects(
            this.fieldConfig.loadAPI)
            .pipe(
              finalize(() => {
                this.isLoading = false;
              }),
            )
          )
        )
        .subscribe(data => {
          this.filteredOptions = of(data);
        });
    } else {
      this.options = this.fieldConfig.options;
      this.filteredOptions = this.formControl.valueChanges
        .pipe(
          startWith(null),
          map((value: any | null ) => value ? this._filter(value) : this.options.slice())
        );
    }
  }

  remove(chip: any): void {
    const index = this.selectedOptions.indexOf(chip);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
    this.updateSelectedOptions.emit(this.selectedOptions);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.fieldConfig.multiple) {
      this.selectedOptions.push(event.option.value);
    } else {
      this.selectedOptions.splice(0, this.selectedOptions.length);
      this.selectedOptions.push(event.option.value);
    }
    this.chipsInput.nativeElement.value = '';
    this.formControl.setValue(null);
    this.updateSelectedOptions.emit(this.selectedOptions);
  }

  private _filter(value: any): any[] {
    const filterValue = value ? value.name.toLowerCase() : null;
    return this.options.filter(option => option.name.toLocaleLowerCase().indexOf(value) === 0);
  }
}
