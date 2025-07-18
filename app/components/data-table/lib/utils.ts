import type { SortOrder } from "../model/table.store";

export function sortByField(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: any[],
    sortOrder: SortOrder,
    field: string | null,
) {
    return items.toSorted((a, b) => {
        if (!field) return 0;
        const modifier = sortOrder === "asc" ? 1 : -1;
        if (a[field] < b[field]) return -1 * modifier;
        if (a[field] > b[field]) return 1 * modifier;
        return 0;
    });
}
