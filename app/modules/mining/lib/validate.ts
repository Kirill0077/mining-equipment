import type { MiningEquipment } from "@/modules/mining/api";

function validateIP(ip: string): boolean {
    const octet = "(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    const ipRegex = new RegExp(`^${octet}(?:\\.${octet}){3}$`);
    return ipRegex.test(ip);
}

export function validateMiningData(item: MiningEquipment): boolean {
    const isValidHashRate = item.hashRate >= 0;
    const isValidPowerConsumption = item.powerConsumption >= 0;
    const isValidIP = validateIP(item.ipAddress);
    const isValidStatus = item.status === "Online" || item.status === "Offline";
    const isValidModel = item.model.length > 0;
    switch (true) {
        case !isValidHashRate:
            console.error(`Неверное значение хэш-рейта : ${item.hashRate} \n [Модель : ${item.model}]`);
            return false;
        case !isValidPowerConsumption:
            console.error(`Неверное значение потребляемой мощности : ${item.powerConsumption} \n [Модель : ${item.model}]`);
            return false;
        case !isValidIP:
            console.error(`Неверный IP-адрес : ${item.ipAddress} \n [Модель : ${item.model}]`);
            return false;
        case !isValidStatus:
            console.error(`Неверный статус : ${item.status} \n [Модель : ${item.model}]`);
            return false;
        case !isValidModel:
            console.error(`Неверное значение модели : ${item.model} \n [Модель : ${item.model}]`);
            return false;
        default:
            return true;
    }
}
