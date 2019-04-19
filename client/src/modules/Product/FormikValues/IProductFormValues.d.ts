import { IProductEssence } from "../Types/IProductEssence";
import { ProductType } from "../Types/IProduct";

export interface IProductFormValues {
    productEssence: IProductEssence;
    logo: string;
    photos : string[];
    price: number;
    priceWithDiscount: number?;
    isPriceDiscounted : boolean;
    country: string;
    type : ProductType
}