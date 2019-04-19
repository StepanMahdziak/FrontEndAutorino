import { object, string, number, array } from "yup";
import { countrySchema } from "./countrySchema";
import { nameSchema } from "./nameSchema";
import { DateSchema } from "./dateSchema";

export const logoShema = string().url("Should be valid url").required("Required");
export const photosShema = array()
  .min(1, "Should be more than one image")
  .max(3, "3 image is enough");
export const priceShema = number()
  .min(1, "Price should be greater than zero")
  .max(1000000, "Too expensive, maaaan");
export const specificationNumberShema = number()
  .min(0, "Only  positive  values")
  .max(500, "less than 500")
  .required("Required");

export const newProductsShema = object().shape({
  logo: logoShema,
  photos: photosShema,
  price: priceShema,
  priceWithDiscount: priceShema,
  country: countrySchema,
  productEssence: object().shape({
    make: nameSchema,
    model: nameSchema,
    color: nameSchema,
    yearOfManufactoring: nameSchema,
    engineVolume: specificationNumberShema,
    engine: specificationNumberShema,
    maxSpeed: specificationNumberShema,
    acceleration: specificationNumberShema,
    fuelType: nameSchema,
    bodyType: nameSchema
  })
});
