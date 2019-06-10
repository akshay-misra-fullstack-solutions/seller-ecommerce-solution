import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatReferenceFieldConfig} from "../../../material-custom-components/mat-reference-field/mat-reference-field-config";
import {LayoutConfig} from "../model/layout-config";
import {Attribute} from "../../model-schema/models/attribute";

@Component({
  selector: 'app-add-layout-config',
  templateUrl: './add-layout-config.component.html',
  styleUrls: ['./add-layout-config.component.scss']
})
export class AddLayoutConfigComponent implements OnInit {
  private layoutConfig: LayoutConfig;
  private options: Attribute[] = [{id: '100', name: 'Attribute1'},
    {id: '103', name: 'AttributeGroup2'}, {id: '120', name: 'Attribute2'}];
  private title = "Add Layout Config";
  private attributesFieldConfig: MatReferenceFieldConfig;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.title = "Edit Layout Config";
      }
    });

    this.attributesFieldConfig = {
      options: this.options,
      fieldName: 'Attributes'
    };
  }
}
