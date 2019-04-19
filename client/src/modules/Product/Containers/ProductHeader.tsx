import React from "react";
import {
  ProductHeader,
  ProductHeaderField,
  ProductErrorMessage,
  ProductHeaderPriceField
} from "../styles/product/productForm";
import { ErrorMessage } from "formik";

export const ProductFormHeader = () => {
  return (
    <ProductHeader
      margin="none"
      direction="row"
      justify="start"
      alignContent="start"
      height="xsmall"
    >
      <div>
        <ProductHeaderField
          type="text"
          name="productEssence.make"
          placeholder="Make"
        />
        {/* <ProductHeaderErrorMessageContainer> */}
        <ErrorMessage
          name="productEssence.make"
          component={ProductErrorMessage}
        />
        {/* </ProductHeaderErrorMessageContainer> */}
      </div>
      <div>
        <ProductHeaderField
          type="text"
          name="productEssence.model"
          placeholder="Model"
        />
        {/* <ProductHeaderErrorMessageContainer> */}
        <ErrorMessage
          name="productEssence.model"
          component={ProductErrorMessage}
        />
        {/* </ProductHeaderErrorMessageContainer> */}
      </div>
      <div>
        <ProductHeaderPriceField
          type="number"
          name="price"
          placeholder="Price"
        />
        <ErrorMessage name="price" component={ProductErrorMessage} />
      </div>

      <div>
        <ProductHeaderPriceField
          type="number"
          name="priceWithDiscount"
          placeholder="Discount"
        />
        <ErrorMessage
          name="priceWithDiscount"
          component={ProductErrorMessage}
        />
      </div>
    </ProductHeader>
  );
};
