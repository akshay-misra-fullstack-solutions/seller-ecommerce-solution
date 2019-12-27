export interface DataTableConfig {
	data: any[];
	tableTitle: string;
	columns: any[];
	topToolbar?: any[];
	inlineToolbar?: any[];
	loadChildrens?:Function;
}