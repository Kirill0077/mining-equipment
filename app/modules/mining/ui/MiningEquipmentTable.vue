<script setup lang="ts">
import { useMiningData } from "@/modules/mining";
import { DataTable } from "@/components/data-table";
import { columnsTable } from "../model";
import StatusFilter from "./StatusFilter.vue";
import type { MiningEquipment } from "@/modules/mining/api";
const miningData = ref<MiningEquipment[]>([]);
const isLoading = ref(true);
onMounted(async () => {
    isLoading.value = true;
    miningData.value = await useMiningData();
    isLoading.value = false;
});

const columns = columnsTable();
//TODO: По хорошему StatusFilter должен быть в компоненте DataTable, непосредственное в хедере каждого столбца, но для упрощения задачи я оставил его здесь
</script>
<template>
    <div v-if="isLoading" class="min-h-screen bg-gray-50 py-6 px-12">
        <div class="flex justify-center items-center h-full">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
        </div>
    </div>
    <div v-else class="min-h-screen bg-gray-50 py-6 px-12">
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
            <template #cell-ipAddress="{ item }">
                <a :href="`https://${item.ipAddress}`" target="_blank" class="text-shadow-blue-600 hover:text-shadow-blue-500 underline">
                    {{ item.ipAddress }}
                </a>
            </template>
        </DataTable>
    </div>
</template>
