<script setup lang="ts">
import { useTableStore } from "@/components/data-table";

const storeTable = useTableStore();

type StatusOption = {
    id: number;
    value: string;
    label: string;
};

const statusOptions: StatusOption[] = [
    { id: 1, value: "All", label: "Все статусы" },
    { id: 2, value: "Online", label: "Online" },
    { id: 3, value: "Offline", label: "Offline" },
];

const handleChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    storeTable.setFilter("status", target.value);
};
</script>

<template>
    <div class="relative min-w-48">
        <select
            :value="storeTable.filterField"
            class="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm rounded-md"
            @change="handleChange"
        >
            <option v-for="option in statusOptions" :key="option.id" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>
