import { IProduct } from "../../Product/Types/IProduct.d";
import { ICar } from "../../Product/Types/ICar.d";
import { FuelType } from "../../Product/Types/FuelType.d";
import { BodyType } from "../../Product/Types/BodyType.d";

export const MOCK_PRODUCT: IProduct<ICar> = {
    id: 1,
    productEssence: {
      make: "Audi",
      model: "TT",
      color: "white",
      yearOfManufactoring: 2018,
      engineVolume: 1800,
      engine: "Porshe V8",
      maxSpeed: 280,
      acceleration: 8,
      fuelType: "Gasoline",
      bodyType: "Sedan"
    },
    logo: "https://img.gaadicdn.com/images/carexteriorimages/630x420/Audi/Audi-TT/6297/front-left-side-47.jpg",
    photos: ["","https://img.gaadicdn.com/images/carexteriorimages/630x420/Audi/Audi-TT/6297/front-left-side-47.jpg"," "],
    price: 30000,
    createdAt: new Date(2018, 3, 1),
    priceWithDiscount: 25,
    isReserved: true,
    isPriceDiscounted: true,
    isSold: false,
    country: "Germany",
    type: "CAR"
  };