import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export default defineEventHandler(async () => {
    console.log('Trying to read file...')
    try {
        const dataPath = resolve("./server/data/miningEquipment.json");
        const fileContent = await readFile(dataPath, "utf-8");
        const miningData = JSON.parse(fileContent);
        return miningData;
    } catch (error) {
        console.error("Error reading mining data:", error);
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            message: "Failed to load mining equipment data",
        });
    }
});
