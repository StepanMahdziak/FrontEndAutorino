import * as productActions from "./productActions";
import { initialState } from "../../../rootStore/initialState";
import { productsReducer } from "./productsReducer";
import { FuelType } from "../Types/FuelType.d";
import { BodyType } from "../Types/BodyType.d";
import { AnyAction } from "redux";
import { IProduct } from "../Types/IProduct";
import { IProductEssence } from "../Types/IProductEssence";
import { IProductsState } from "../Types/productsState";

let state: IProductsState;
let mockAction: AnyAction;
let mockProduct: IProduct<IProductEssence>;
const setup = () => {
  state = initialState.products;
  mockAction = { type: "DO_NOTHING" };
  mockProduct = {
    id: 1,
    productEssence: {
      make: "Audi",
      model: "TT",
      color: "white",
      dateOfManufactoring: "2018",
      engineVolume: 1800,
      maxSpeed: 280,
      acceleration: 8,
      fuelType: FuelType.DIESEL,
      bodyType: BodyType.COUPE
    },
    logo: "path-to-photo",
    photos: ["path-to-photo"],
    price: 30,
    createdAt: new Date(),
    priceWithDiscount: 25,
    isReserved: true,
    isPriceDiscounted: true,
    isSold: false,
    country: "Germany"
  };
};

describe("productReducer", () => {
  beforeEach(() => {
    setup();
  });

  it("should return initialState while action is not provided", () => {
    expect(productsReducer(state, mockAction)).toEqual(state);
  }),
    it("should handle createProduct actions", () => {
      const expectedFromSuccess = {
        ...state,
        data: [{ ...mockProduct }] 
      };
      const expectedFromFailure = {
        ...state,
        errors: [{ message: "error" }] 
      };
      expect(
        productsReducer(state, productActions.createProductSuccess(mockProduct))
      ).toEqual(expectedFromSuccess);
      expect(
        productsReducer(state, productActions.createProductRequest(mockProduct))
      ).toEqual(state);
      expect(
        productsReducer(
          state,
          productActions.createProductFailure({ message: "error" })
        )
      ).toEqual(expectedFromFailure);
    });
  it("should handle updateProduct actions", () => {
    const newPrice = 50;
    const stateWithOneProducts = {
      ...state,
     data: [mockProduct] 
    };
    const expectedFromSuccess = {
      ...state,
      
        data: [{ ...mockProduct, price: newPrice }]
      
    };
    const expectedFromFailure = {
      ...state,
   errors: [{ message: "error" }] 
    };
    expect(
      productsReducer(
        stateWithOneProducts,
        productActions.updateProductSuccess({ ...mockProduct, price: newPrice })
      )
    ).toEqual(expectedFromSuccess);
    expect(
      productsReducer(
        stateWithOneProducts,
        productActions.updateProductRequest(mockProduct)
      )
    ).toEqual(stateWithOneProducts);
    expect(
      productsReducer(
        state,
        productActions.updateProductFailure({ message: "error" })
      )
    ).toEqual(expectedFromFailure);
  });
  it("should handle deleteProduct actions", () => {
    const stateWithOneProducts = {
      ...state,
      data: [mockProduct] 
    };
    
    const expectedFromFailure = {
      ...state,
      errors: [{ message: "error" }] 
    };
    expect(
      productsReducer(
        stateWithOneProducts,
        productActions.deleteProductSuccess(mockProduct)
      )
    ).toEqual(state);
    expect(
      productsReducer(
        stateWithOneProducts,
        productActions.deleteProductRequest(mockProduct)
      )
    ).toEqual(stateWithOneProducts);
    expect(
      productsReducer(
        state,
        productActions.deleteProductFailure({ message: "error" })
      )
    ).toEqual(expectedFromFailure);
  });
  it("should handle getProduct actions", () => {
    
    const expectedFromSuccess = {
        ...state,
        product : mockProduct
    }
    const expectedFromFailure = {
      ...state,
      errors: [{ message: "error" }] 
    };
    expect(
      productsReducer(
        state,
        productActions.getProductSuccess(mockProduct)
      )
    ).toEqual(expectedFromSuccess);
    expect(
      productsReducer(
        state,
        productActions.getProductRequest({id : 1})
      )
    ).toEqual(state);
    expect(
      productsReducer(
        state,
        productActions.getProductFailure({ message: "error" })
      )
    ).toEqual(expectedFromFailure);
  });
  it("should handle getProducts actions", () => {
    const expectedFromRequest = {
        ...state,
        loading: true 
    }
    const expectedFromSuccess = {
        ...state,
    data: [mockProduct,{...mockProduct , id : 2 },] 
    }
    const expectedFromFailure = {
      ...state,
       errors: [{ message: "error" }] 
    };
    expect(
      productsReducer(
        state,
        productActions.getProductsSuccess([mockProduct, {...mockProduct , id : 2 }])
      )
    ).toEqual(expectedFromSuccess);
    expect(
      productsReducer(
        state,
        productActions.getProductsRequest({id : 1})
      )
    ).toEqual(expectedFromRequest);
    expect(
      productsReducer(
        state,
        productActions.getProductsFailure({ message: "error" })
      )
    ).toEqual(expectedFromFailure);
  });
});
