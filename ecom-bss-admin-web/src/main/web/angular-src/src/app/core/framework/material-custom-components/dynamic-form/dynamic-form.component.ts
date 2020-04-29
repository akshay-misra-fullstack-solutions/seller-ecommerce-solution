import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnChanges {

  @Output() submit = new EventEmitter();
  @Input() details: any;
  private groups: any[] = [];
  form: FormGroup;
  formGroup: FormGroup;
  formGroups: FormGroup[] = [];
  object: any = {};
  private title: string;

  constructor() { }

  ngOnChanges() {
    if (this.details) {
      this.title = this.details.objectName;
      this.groups = this.details.groups;
    }
    const fieldCtrls = {};
    for (const g of this.groups) {
      for (const f of g.fields) {
        if (f.type !== 'checkbox') {
          fieldCtrls[f.name] = new FormControl(f.value);
        } else {
          const opts = {};
          for (const opt of f.options) {
            opts[opt.id] = new FormControl(opt.name);
          }
          fieldCtrls[f.name] = new FormGroup(opts);
        }
      }
      this.formGroup = new FormGroup(fieldCtrls);
      g.formGroup = this.formGroup;
      this.formGroups.push(this.formGroup);
    }
    this.form = new FormGroup(fieldCtrls);
  }

  isFormValid(): boolean {
    for (const form of this.formGroups) {
      console.log('isFormValid: ' + form.valid);
      if (!form.valid) {
        return false;
      }
    }
    return true;
  }

  onSubmit() {
    console.log('formGroups data: ' + JSON.stringify(this.form.value));
    for (const form of this.formGroups) {

      console.log('isFormValid: ' + JSON.stringify(form.controls['attribute'].value));
    }
  }

}
