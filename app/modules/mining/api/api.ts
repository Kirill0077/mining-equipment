import type { MiningEquipment } from "@/modules/mining/api";
import { validateMiningData } from "../lib/validate";

export const useMiningData = async () => {
    const data = await $fetch<MiningEquipment[]>("/api/mining-data");
    if (data) {
        const result = data.filter((item) => validateMiningData(item));
        return result;
    }
    return [];
};
