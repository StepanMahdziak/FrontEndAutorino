import React, { Component } from "react";
import { FieldArray, ArrayHelpers } from "formik";
import { Form, Button, Layer, Box, Text, Heading } from "grommet";
import { IProductFormValues } from "../FormikValues/IProductFormValues";
import { newProductsShema } from "../../User/yupSchemas/shemasElements/newProductsShema";
import { RED, GREEN, PLACEHOLDER_GREY, WHITE } from "../../../styles/colors";
import { ProductGridContainer } from "../styles/product/productForm";
import { Add } from "grommet-icons";
import { ProductPhotosFieldArray } from "./ProductPhotosFieldArray";
import { ProductFormHeader } from "./ProductHeader";
import ProductLogo from "./ProductLogo";
import ProductSpecForm from "./ProductSpecForm";
import { IProductFormProps } from "./ProductForm.d";

export default class ProductForm extends Component<IProductFormProps> {
  render() {
    return (
      <div>
        <ProductGridContainer>
          <div>
            <ProductFormHeader />
            <ProductLogo formikProps={this.props.formikProps} />
            <FieldArray
              name="photos"
              render={(arrayHelpers: ArrayHelpers) => (
                <div>
                  <ProductPhotosFieldArray
                    formikProps={this.props.formikProps}
                    arrayHelpers={arrayHelpers}
                  />
                </div>
              )}
            />
          </div>
          <div>
            <ProductSpecForm formikProps={this.props.formikProps} />
            <Box direction="row" pad="medium" justify="between">
              {/* <Button type="button" color={RED} label="reset" />

                <Button type="submit" color={GREEN} label="submit" /> */}
            </Box>
          </div>
        </ProductGridContainer>
      </div>
    );
  }
}
