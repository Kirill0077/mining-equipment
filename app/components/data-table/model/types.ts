export type DataTableItem = {
    field: string;
    value: string;
};
export type ColumnTable = {
    field: string;
    title: string;
    sortable?: boolean;
    filterable?: boolean;
};