import { defineStore } from "pinia";

export type SortOrder = "asc" | "desc" | "none";
export type MiningStore = {
    searchQuery: string;
    filterField: string | null;
    filterValue: string | "All";
    sortBy: string | null;
    sortOrder: SortOrder;
};

export const useTableStore = defineStore("table", {
    state: (): MiningStore => ({
        searchQuery: "",
        filterField: null,
        filterValue: "All",
        sortBy: null,
        sortOrder: "asc",
    }),
    actions: {
        setSearchQuery(query: string) {
            this.searchQuery = query;
        },
        setFilter(field: string | null, value: string | "All") {
            this.filterField = field;
            this.filterValue = value;
        },
        setSort(sortBy: string) {
            if (this.sortBy === sortBy) {
                this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
            } else {
                this.sortBy = sortBy;
                this.sortOrder = "asc";
            }
        },
    },
});
