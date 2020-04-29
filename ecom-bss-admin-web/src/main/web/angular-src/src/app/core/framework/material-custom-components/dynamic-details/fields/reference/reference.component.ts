import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import {debounceTime, finalize, map, startWith, switchMap, tap} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Field} from '../fields.component';
import {ReferenceService} from './reference.service';

@Component({
  selector: 'reference-view-field',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent extends Field implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formControl: FormControl;
  // @Input() field: ReferenceConfig;
  private options: any[] = [];
  private selectedOptions: any[];
  private label: string;
  private filteredOptions: Observable<any>;
  private isLoading = false;
  private errorMsg: string;

  @ViewChild('chipsInput') chipList: ElementRef<HTMLInputElement>;
  @Output() updateSelectedOptions = new EventEmitter();

  constructor(private referenceService: ReferenceService) {
    super();
  }

  get isValid() { return this.formControl.valid; }
  get isDirty() { return this.formControl.dirty; }

  /*
  *   TODO: Add prohibit selected feature in future.
  * */
  ngOnInit() {
    this.selectedOptions = [];
    this.label = this.field.label;
    this.formControl = this.form.controls[this.field.name];

    if (this.field.loadAPI && this.field.options.length === 0) {
      this.formControl.valueChanges
        .pipe(
          debounceTime(500),
          tap(() => {
            this.errorMsg = '';
            this.isLoading = true;
          }),
          switchMap(value => this.referenceService.loadObjects(
            this.field.loadAPI)
            .pipe(
              finalize(() => {
                this.isLoading = false;
              }),
            )
          )
        )
        .subscribe(data => {
          this.filteredOptions = of(data);
          if (this.selectedOptions.length === 0 && this.field.required) {
            this.formControl.setErrors(Validators.required);
          }
        });
    } else {
      if (this.field.options) {
        this.options = this.field.options;
        this.filteredOptions = this.formControl.valueChanges
          .pipe(
            startWith(null),
            map((value: any | null) => value ? this._filter(value) : this.options.slice())
          );
      }
    }
  }

  remove(chip: any): void {
    const index = this.selectedOptions.indexOf(chip);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
    this.emitValues();
    this.formControl.setValue(this.selectedOptions);
  }

  emitValues() {
    if (this.field.multiple) {
      this.updateSelectedOptions.emit(this.selectedOptions);
    } else {
      this.updateSelectedOptions.emit(this.selectedOptions.length === 0 ? null : this.selectedOptions.values().next().value);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.field.multiple) {
      this.selectedOptions.push(event.option.value);
    } else {
      this.selectedOptions.splice(0, this.selectedOptions.length);
      this.selectedOptions.push(event.option.value);
    }
    this.chipList.nativeElement.value = '';
    this.formControl.setValue(this.selectedOptions);
    this.emitValues();

    this.chipList.errorState = true; // mat-error not working
  }

  private _filter(value: any): any[] {
    const filterValue = value ? value.name.toLowerCase() : null;
    return this.options.filter(option => option.name.toLocaleLowerCase().indexOf(value) === 0);
  }
}
