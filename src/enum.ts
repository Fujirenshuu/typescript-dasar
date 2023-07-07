export enum CustomerType  {
    PERUNGGU = "PERUNGGU",
    PERAK = "PERAK",
    EMAS = "EMAS"
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}