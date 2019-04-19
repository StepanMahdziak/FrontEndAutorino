import { AnyAction } from "redux";

import { Observable, of } from "rxjs";
import { ofType } from "redux-observable";
import { IAppState } from "../../../../rootStore/initialState.d";
import { IProductsState } from "../../../Product/Types/productsState";
import { map, switchMap, catchError, mergeMap } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';
import { getProductsRequest, getProductsSuccess } from "../productActions";
import { IProduct } from "../../Types/IProduct";
import { ICar } from "../../Types/ICar";


export interface IProductResponse {

    id: number,
    name: string,
    price: number,
   priceWithDiscount: number,
   isReserved: boolean,
   isSold: boolean,
   isDiscount: boolean,
   createdAt: Date,
   country: string,
   logo: string,
   productEssence: {
       id: number,
       color: string,
       yearOfManufactoring: number,
       engineVolume: number,
       engine: string,
       maxSpeed: number,
       acceleration: number,
       fuelType: string;
       newCar: boolean,
       bodyType: {
           id: number,
           name: string
       },
    model: {
      id: number,
        name: string,
        make: {
            id: number,
            name: string
        }
    }
}
} 

// action creators

// epic
export const getProductsEpic = (action$: Observable<AnyAction>) => action$.pipe(
  ofType(getProductsRequest.type),
  mergeMap(action =>
    ajax.getJSON("http://localhost:8000/products").pipe(
      map((response: any) => {let PRODUCTS: IProduct<ICar>[]= []
          console.log(response)
           response.forEach((productResponse: IProductResponse) => {
              PRODUCTS.push({
                  id: productResponse.id,
                  logo: productResponse.logo,
                  photos: ["","",""],
                  price: productResponse.price,
                  createdAt: productResponse.createdAt,
          
                  priceWithDiscount: productResponse.priceWithDiscount,
                  isReserved: productResponse.isReserved,
                  isSold: productResponse.isSold,
                  isPriceDiscounted: productResponse.isDiscount,
                  country: productResponse.country,
                  type: "CAR",
                  productEssence: {
                    make: productResponse.productEssence.model.make.name,
                    model: productResponse.productEssence.model.name,
                    color: productResponse.productEssence.color,
                    yearOfManufactoring: productResponse.productEssence.yearOfManufactoring,
                    engineVolume: productResponse.productEssence.engineVolume,
                    engine: productResponse.productEssence.engine,
                    maxSpeed: productResponse.productEssence.maxSpeed,
                    acceleration: productResponse.productEssence.acceleration,
                    fuelType: productResponse.productEssence.fuelType,
                    bodyType:productResponse.productEssence.bodyType.name
                  },

            });
            return productResponse})
          return getProductsSuccess(PRODUCTS)})
      // catchError(error => )
    )
  )
);
