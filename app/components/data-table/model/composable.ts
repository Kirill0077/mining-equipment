/* eslint-disable @typescript-eslint/no-explicit-any */
import { sortByField } from "../lib/utils";
import { useTableStore } from "./table.store";

export const useUtilTable = () => {
    const storeTable = useTableStore();
    const sorter = (items: any[]) => sortByField(items, storeTable.sortOrder, storeTable.sortBy);
    const sercher = (items: any[]) => {
        if (storeTable.searchQuery) {
            return items.filter((item) => item.model.toLowerCase().includes(storeTable.searchQuery.toLowerCase()));
        }
        return items;
    };
    const filterByValue = (items: any[]) => {
        if (storeTable.filterField !== null && storeTable.filterValue !== "All") {
            return items.filter((item) => item[storeTable.filterField!] === storeTable.filterValue);
        } else {
            return items;
        }
    };
    return {
        sorter,
        sercher,
        filterByValue,
    };
};
