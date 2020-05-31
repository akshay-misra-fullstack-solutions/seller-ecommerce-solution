import {Column} from './column';

export interface DynamicTableConfig {
  name?: string;
  loadAPI?: string;
  createAPI?: string;
  deleteAPI?: string;
  detailsAPI?: string;
  columns?: Column[];
}
