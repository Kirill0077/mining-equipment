import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { IncomingMessage, ServerResponse } from "http";

export default async (req: IncomingMessage, res: ServerResponse) => {
    try {
        res.statusCode = 200;
        const dataPath = resolve("./server/data/miningEquipment.json");
        const fileContent = await readFile(dataPath, "utf-8");
        const miningData = JSON.parse(fileContent);
        res.end(JSON.stringify(miningData));
    } catch (error) {
        console.error("Error reading mining data:", error);
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            message: "Failed to load mining equipment data",
        });
    }
};
