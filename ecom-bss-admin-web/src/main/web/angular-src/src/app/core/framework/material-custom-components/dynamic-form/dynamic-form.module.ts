import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FieldsModule} from './fields/fields.module';
import {DynamicFormComponent} from './dynamic-form.component';
import {FieldsComposerComponent} from './fields-composer/fields-composer.component';
import {AngularMaterialModules} from '../../../../material-module';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    DynamicFormComponent,
    FieldsComposerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldsModule,
    RouterModule,
    AngularMaterialModules,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule { }
