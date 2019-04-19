import React, { Component } from "react";
import { IProductFormProps } from "./ProductLogo.d";
import { Heading, Text } from "grommet";
import {
  ProductSpecContainer,
  ProductSpecErrorMessageContainer,
  ProductErrorMessage,
  ProductSpecField
} from "../styles/product/productForm";
import { ErrorMessage } from "formik";
import { unCamelCaser } from "../../../helpers/unCamelCaser";
import { getFirstWordinCamelCase } from "../../../helpers/getFirstWord";

export default class ProductSpecForm extends Component<IProductFormProps> {
  render() {
    return (
      <div>
        <Heading level="3" margin={{top: "0", bottom: "10%"}}>Specification</Heading>
        {Object.keys(this.props.formikProps.values.productEssence).map(
          (spec, index) => (
            <>
              {spec != "model" && spec != "make" && (
                <>
                  <ProductSpecContainer
                    direction="row"
                    pad="small"
                    justify="between"
                    key={`${index}`}
                  >
                    <Text size="medium">{unCamelCaser(spec)}</Text>
                    <ProductSpecErrorMessageContainer>
                      <ErrorMessage
                        key={index + 1}
                        name={`productEssence.${spec}`}
                        component={ProductErrorMessage}
                      />
                    </ProductSpecErrorMessageContainer>
                    {typeof this.props.formikProps.values[`${spec}`]  == typeof 3 ? (
                      <ProductSpecField
                        key={index + 2}
                        name={`productEssence.${spec}`}
                        type="number"
                        placeholder={getFirstWordinCamelCase(spec)}
                      />
                    ) : (
                      <ProductSpecField
                        key={index + 2}
                        name={`productEssence.${spec}`}
                        type="text"
                      //  placeholder={}
                        placeholder={getFirstWordinCamelCase(spec)}
                      />
                    )}
                  </ProductSpecContainer>
                </>
              )}
            </>
          )
        )}
      </div>
    );
  }
}
