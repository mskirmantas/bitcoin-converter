export const currencyList: Currency[] = [
    {
        id: "EUR",
        name: "Euro",
        label: "EUR",
    },
    {
        id: "USD",
        name: "United States dollar",
        label: "USD",
    },
    {
        id: "GBP",
        name: "Great Britain pound",
        label: "GBP",
    },
];

export interface CardDisplayStatus {
    EUR: boolean;
    USD: boolean;
    GBP: boolean;
}

export type CurrencyType = "EUR" | "USD" | "GBP";

export interface Currency {
    id: CurrencyType;
    name: string;
    label: string;
}

export interface CurrentPrices {
    EUR: number | null;
    USD: number | null;
    GBP: number | null;
}