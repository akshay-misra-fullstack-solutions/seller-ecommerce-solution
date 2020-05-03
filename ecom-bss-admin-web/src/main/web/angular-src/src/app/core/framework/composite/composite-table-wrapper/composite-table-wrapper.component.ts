import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';
import {DynamicTableConfig} from '../../material-custom-components/dynamic-table/dynamic-table.component';

@Component({
  selector: 'composite-table-wrapper',
  templateUrl: './composite-table-wrapper.component.html',
  styleUrls: ['./composite-table-wrapper.component.scss']
})
export class CompositeTableWrapperComponent implements OnInit, OnChanges {

  @Input() compositeTableConfig: CompositeTableConfig;
  private tableConfigs: DynamicTableConfig[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.compositeTableConfig) {
      this.tableConfigs = this.compositeTableConfig.tables;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.compositeTableConfig) {
      this.tableConfigs = this.compositeTableConfig.tables;
    }
  }

  onTabChange(event: MatTabChangeEvent) {
    console.log('..... selectedTabChange, event: ' + event);
  }
}

export interface CompositeTableConfig {
  tables?: DynamicTableConfig[];
}
