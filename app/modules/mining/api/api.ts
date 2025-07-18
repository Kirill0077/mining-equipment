import type { MiningEquipment } from "@/modules/mining/api";
import { validateMiningData } from "../lib/validate";

export const useMiningData = async () => {
    const { data, error } = await useFetch<MiningEquipment[]>("/api/mining-data");

    if (data.value && !error.value) {
        const result = data.value.filter((item) => validateMiningData(item));
        return result;
    }
    return [];
};
