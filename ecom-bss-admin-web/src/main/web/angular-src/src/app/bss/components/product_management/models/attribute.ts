export interface Attribute {
  id?: string;
  name?: string;
  publicName?: string;
  attributeGroup?: string;
  attributeValue?: any[];
  children?: string[];
  sortOrder?: number;
  attributeType?: string;
  useAsFilter?: boolean;
}