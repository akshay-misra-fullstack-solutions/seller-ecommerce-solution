import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AttributeGroup} from "../models/attribute-group";


@Component({
  selector: 'add-attribute-groups',
  templateUrl: './add-attribute-groups.component.html',
  styleUrls: ['./add-attribute-groups.component.scss']
})
export class AddAttributeGroupsComponent implements OnInit {
  private attributeGroup: AttributeGroup;
  private title = "Add New Attribute Group";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
        if (params.has('id')) {
           this.title = "Edit Attribute Group";
        }
    });
  }
}
