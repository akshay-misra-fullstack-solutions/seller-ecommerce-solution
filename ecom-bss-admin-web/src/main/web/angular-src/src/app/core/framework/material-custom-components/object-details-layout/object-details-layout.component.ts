import {Component, OnInit} from '@angular/core';
import {AttributeValue} from '../../design/model-schema/models/attribute-value';
import {DataTableConfig} from '../data-table/data-table-config';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ObjectDetailsLayoutService} from './object-details-layout.service';
import {Observable} from 'rxjs';
import {DynamicTableConfig} from '../dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-object-details-layout',
  templateUrl: './object-details-layout.component.html',
  styleUrls: ['./object-details-layout.component.scss']
})
export class ObjectDetailsLayoutComponent implements OnInit {

  private object: any = {};
  private title: string;
  private form: FormGroup;
  private unsubcribe: any;
  private attributeValues: AttributeValue[] = [];
  private columns: any[] = [];
  private loadAPI: string;
  private detailsAPI: string;
  private objectTypeId: string;
  private objectId: string;
  public objectLayoutWrapper: any;
  private groups: Observable<any[]>;
  private details: Observable<any>;
  private compositeTableConfig: any;
  private showChildren: boolean;


  private tableConfig: DataTableConfig;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private objectDetailsService: ObjectDetailsLayoutService) {}

  onUpload(e) {
    console.log(e);

  }

  ngDestroy() {
    this.unsubcribe();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('objectId')) {
        this.objectId = params.get('objectId');
        this.loadAPI = '/application/api/5e934d4567ed1fb0bcf0fca7/load/children/' + params.get('objectId');
      }

      if (params.has('objectTypeId')) {
        this.objectTypeId = params.get('objectTypeId');
      }
      this.detailsAPI = '/application/api/load/details/' + this.objectTypeId + '/' + this.objectId;
      this.objectDetailsService.loadObjectDetails(this.detailsAPI).subscribe(
        response => {
          console.log(' response : ' + response);
          this.objectLayoutWrapper = response;
          this.init();
        },);
    });

    this.tableConfig = {
      data: this.attributeValues,
      loadAPI: this.loadAPI,
      tableTitle: 'Attributes',
      columns: this.columns,
      topToolbar: [
        {
          type: 'button',
          name: 'Delete Attribute Value',
          icon: 'delete'
        },
        {
          type: 'anchor',
          name: 'Add Attribute Value',
          href: 'add',
          icon: 'note_add'
        }
      ],
      inlineToolbar: [{
        id: 'edit',
        type: 'anchor',
        name: 'Edit',
        href: 'edit',
        icon: 'edit'
      }]
    };
  }

  init() {
    this.title = this.objectLayoutWrapper.objectName;
    this.details = this.objectLayoutWrapper.detail;
    this.groups = this.objectLayoutWrapper.detail.groups;
    this.compositeTableConfig = this.objectLayoutWrapper.children;
    console.log('---- ObjectDetailsLayoutComponent, init, compositeTableConfig: ' + JSON.stringify(this.compositeTableConfig));
    if (this.compositeTableConfig && this.compositeTableConfig.tables.length > 0) {
      this.showChildren = true;
    }

    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.groups))
    });
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log('@@@@@@ form value change event: ' + update);
      console.log('@@@@@@ form value change event fields: ' + update.fields);
      this.groups = JSON.parse(update.fields);
    });
  }

}
