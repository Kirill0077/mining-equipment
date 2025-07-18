import type { ColumnTable } from "@/components/data-table";

export const columnsTable = ():Ref<ColumnTable[]> =>
    ref<ColumnTable[]>([
        {
            field: "model",
            title: "Модель",
            sortable: true,
        },
        {
            field: "hashRate",
            title: "Хешрейт (TH/s)",
            sortable: true,
        },
        {
            field: "powerConsumption",
            title: "Энергопотребление (W)",
            sortable: true,
        },
        {
            field: "status",
            title: "Статус",
            sortable: true,
        },
        {
            field: "ipAddress",
            title: "IP-адрес",
            sortable: true,
        },
    ]);
