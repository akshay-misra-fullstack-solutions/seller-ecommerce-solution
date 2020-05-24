export interface MenuItem {
  id?: string;
  parent?: string;
  name?: string;
  items?: MenuItem[];
  dummy?: boolean;
}
