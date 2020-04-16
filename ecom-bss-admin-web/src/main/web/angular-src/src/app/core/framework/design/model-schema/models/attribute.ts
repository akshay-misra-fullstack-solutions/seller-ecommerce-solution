import {Base} from './base';

export interface Attribute extends Base {
  attributeGroup?: any;
  attributeValue?: any[];
  children?: string[];
  attributeType?: number;
  useAsFilter?: boolean;
  catalog?: boolean;
}
