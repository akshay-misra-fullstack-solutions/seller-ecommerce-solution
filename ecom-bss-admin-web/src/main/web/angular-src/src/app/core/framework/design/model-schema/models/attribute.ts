import {Base} from './base';

export interface Attribute extends Base {
  attributeGroup?: any;
  attributeValue?: any[];
  children?: string[];
  attributeType?: number;
  referenceToObjectType?: string;
  useAsFilter?: boolean;
  catalog?: boolean;
  system?: boolean;
  readonly?: boolean;
  hidden?: boolean;
  required?: boolean;
  multiple?: boolean;
  showInCreate?: boolean;
}
