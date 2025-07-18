export type MiningEquipment = {
    id: string;
    model: string;
    hashRate: number; // TH/s
    powerConsumption: number; // W
    status: 'Online' | 'Offline';
    ipAddress: string;
  }