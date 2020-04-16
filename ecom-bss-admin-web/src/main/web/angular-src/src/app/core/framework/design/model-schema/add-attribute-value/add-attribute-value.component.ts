import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-attribute-value',
  templateUrl: './add-attribute-value.component.html',
  styleUrls: ['./add-attribute-value.component.scss']
})
export class AddAttributeValueComponent implements OnInit {
  private title = "Add New Attribute Value";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.title = "Edit Attribute Value";
      }
    });
  }

}
