<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import type { ColumnTable } from "../model/types";
import { useUtilTable } from "../model/composable";
import TableHeader from "./TableHeader.vue";
import TableSearchBar from "./TableSearchBar.vue";

const props = defineProps<{
    columns: ColumnTable[];
    search?: boolean;
    items: any[];
    searchPlaceholder?: string;
}>();

const { sorter, sercher, filterByValue } = useUtilTable();
const filteredItems = computed(() => {
    let result = [...props.items];
    result = sercher(result);
    result = sorter(result);
    result = filterByValue(result);
    return result;
});
</script>

<template>
    <div class="overflow-x-auto flex flex-col gap-4">
        <div class="flex justify-between items-center gap-4">
            <TableSearchBar v-if="search" :placeholder="searchPlaceholder" />
            <slot name="header" />
        </div>
        <table class="min-w-full bg-white">
            <thead>
                <tr>
                    <TableHeader
                        v-for="column in columns"
                        :key="column.field"
                        :field="column.field"
                        :sortable="column.sortable ?? false"
                        :filterable="column.filterable ?? false"
                        >{{ column.title }}
                    </TableHeader>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in filteredItems" :key="index" class="hover:bg-gray-50">
                    <td v-for="column in columns" :key="column.field" class="px-4 py-4 whitespace-nowrap">
                        <slot :name="`cell-${column.field}`" :item="item" :value="item[column.field]">
                            {{ item[column.field] }}
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
