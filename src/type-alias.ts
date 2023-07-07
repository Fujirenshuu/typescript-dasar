export type ID = String | Number;

export type Category = {
    id : ID,
    name : string,
    description? : string

}

export type Product = {
    id : ID,
    name : string,
    price : number,
    category: Category
    description? : string

}