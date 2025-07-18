<script setup lang="ts">
import { Icon } from "#components";
import { useTableStore, type SortOrder } from "../model/table.store";

const props = defineProps<{
    field: string;
    sortable:boolean;
    filterable:boolean;
}>();

const storeMining = useTableStore();
const sortable = toRef(()=>props.sortable)
const field = toRef(() => props.field);
const isActive = computed(() => storeMining.sortBy === field.value);
const sortedIcon = computed<SortOrder>(() => {
    if (!isActive.value) return "none";
    return storeMining.sortOrder;
});

const handleSort = () => {
    if (!sortable.value) return 
    storeMining.setSort(field.value);
};

</script>

<template>
    <th
        :class="{
            'bg-gray-100': !isActive,
            'bg-blue-500 text-white': isActive,
        }"
        class="px-6 py-3 text-left text-xs font-medium truncate text-gray-500 uppercase tracking-wider cursor-pointer"
        @click="handleSort"
    >
        <div class="flex items-center justify-between">
            <slot />
            <span
                v-if="sortable"
                :class="{
                    'text-gray-400': !isActive,
                    'text-white': isActive,
                }"
                class="ml-2 text-gray-400"
            >
                <Icon v-if="sortedIcon === 'asc'" name="mdi:arrow-up" size="16" />
                <Icon v-else-if="sortedIcon === 'desc'" name="mdi:arrow-down" size="16" />
                <Icon v-else name="mdi:arrow-up-down" size="16" />
            </span>
        </div>
    </th>
</template>
