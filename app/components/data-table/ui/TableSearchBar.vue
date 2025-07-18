<script setup lang="ts">
import { useTableStore } from "../model/table.store";
import { useDebounceFn } from "@vueuse/core";

const props = defineProps<{
    placeholder?: string;
}>();

const placeholder = toRef(() => props.placeholder);
const storeTable = useTableStore();
const searchQuery = ref(storeTable.searchQuery);

const debouncedUpdate = useDebounceFn((value: string) => {
    storeTable.setSearchQuery(value);
}, 300);

watch(searchQuery, (newValue) => {
    debouncedUpdate(newValue);
});
</script>

<template>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="mdi:search" size="16" />
        </div>
        <input
            v-model="searchQuery"
            type="text"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-blue-500 sm:text-sm"
            :placeholder="placeholder"
            aria-label="Search"
        >
    </div>
</template>
