
import { ProductType } from "./../Types/IProduct.d";
import { IProductFormValues } from "./IProductFormValues.d";
import { FuelType } from "../Types/FuelType.d";
import { BodyType } from "../Types/BodyType.d";


export const INITIAL_CREATE_PRODUCT_FORM_VALUES: IProductFormValues = {
  productEssence: {
    make: "",
    model: "",
    color: "",
    yearOfManufactoring: 0,
    engineVolume: 0,
    engine: "",
    maxSpeed: 0,
    acceleration: 0,
    fuelType: "",
    bodyType:""
  },
  logo: "",
  photos: ["","",""],
  price: 0,
  priceWithDiscount: 0,
  isPriceDiscounted: false,
  country: "",
  type: "CAR"
};
