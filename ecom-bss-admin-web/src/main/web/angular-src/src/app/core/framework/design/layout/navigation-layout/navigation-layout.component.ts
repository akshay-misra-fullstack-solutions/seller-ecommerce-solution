import { Component, OnInit } from '@angular/core';
import {CompositeTableConfig} from '../../../composite/composite-table-wrapper/composite-table-wrapper.component';
import {ActivatedRoute} from '@angular/router';
import {NavigationLayoutService} from './navigation-layout.service';

@Component({
  selector: 'app-navigation-layout',
  templateUrl: './navigation-layout.component.html',
  styleUrls: ['./navigation-layout.component.scss']
})
export class NavigationLayoutComponent implements OnInit {

  compositeTableConfig: CompositeTableConfig;
  private loadAPI: string;

  constructor(private route: ActivatedRoute,
              private navigationLayoutService: NavigationLayoutService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('tabId')) {
        this.loadAPI = '/application/api/load/tab/config/' + params.get('tabId');

        this.navigationLayoutService.loadTabDetails(this.loadAPI).subscribe(
          response => {
            console.log(' response : ' + response);
            this.compositeTableConfig = response;
          }, );
      }
    });
  }

}
