import { IProductEssence } from "./IProductEssence";

export interface IProduct<IProductEssence> {
    id : number,
    productEssence: IProductEssence;
    logo: string;
    photos : string[];
    price: number;
    createdAt : Date;
    priceWithDiscount: number?;
    isReserved: boolean;
    isPriceDiscounted : boolean;
    isSold: boolean;
    country: string;
    type : ProductType
}

export type ProductType = "CAR";

