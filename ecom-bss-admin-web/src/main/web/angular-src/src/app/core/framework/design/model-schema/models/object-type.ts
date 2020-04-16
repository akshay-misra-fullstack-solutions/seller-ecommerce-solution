import {Base} from './base';

export interface ObjectType extends Base {
  attributes?: any[];
  sameTypeChildren?: boolean;
  system?: boolean;
}
