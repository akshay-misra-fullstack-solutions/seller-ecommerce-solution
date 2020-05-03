import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CompositeFormService} from './composite-form.service';

@Component({
  selector: 'composite-form',
  templateUrl: './composite-form.component.html',
  styleUrls: ['./composite-form.component.scss']
})
export class CompositeFormComponent implements OnInit {

  private loadAPI: string;
  private objectTypeId: string;
  private details: DynamicFormConfig;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private compositeFormService: CompositeFormService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('objectTypeId')) {
        this.objectTypeId = params.get('objectTypeId');
      }
      this.loadAPI = '/application/api/load/Form/config/' + this.objectTypeId;
      this.compositeFormService.loadFormConfig(this.loadAPI).subscribe(
        response => {
          console.log(' response : ' + response);
          this.details = response;
          // console.log('CompositeFormComponent, form config details: ' + JSON.stringify(this.details));
        },);
    });
  }

}

export interface DynamicFormConfig {
  formTitle?: string;
  groups?: any[];
  createAPI?: string;
  cancelLink?: string;
  objectTypeId?: string;
}
