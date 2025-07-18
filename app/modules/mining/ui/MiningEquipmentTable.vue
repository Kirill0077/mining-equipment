<script setup lang="ts">
import { useMiningData } from "@/modules/mining";
import { DataTable } from "@/components/data-table";
import { columnsTable } from "../model";
import StatusFilter from "./StatusFilter.vue";

const miningData = await useMiningData();
const columns = columnsTable();
//TODO: По хорошему StatusFilter должен быть в компоненте DataTable, непосредственное в хедере каждого столбца, но для упрощения задачи я оставил его здесь
</script>
<template>
    <div class="min-h-screen bg-gray-50 py-6 px-12">
        <DataTable :items="miningData" :columns="columns" :search="true" :search-placeholder="'Поиск по модели оборудования...'">
            <template #header>
                <StatusFilter />
            </template>
            <template #cell-model="{ item }">
                <span class="font-semibold">
                    {{ item.model }}
                </span>
            </template>
            <template #cell-status="{ item }">
                <span
                    :class="{
                        'bg-green-100 text-green-800': item.status === 'Online',
                        'bg-red-100 text-red-800': item.status === 'Offline',
                    }"
                    class="px-2 py-1 rounded-full text-xs font-medium"
                >
                    {{ item.status }}
                </span>
            </template>
        </DataTable>
    </div>
</template>
