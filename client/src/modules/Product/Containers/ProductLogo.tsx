import React, { Component } from "react";
import { Box, Text } from "grommet";
import { PLACEHOLDER_GREY, WHITE, GREEN } from "../../../styles/colors";
import { IProductFormProps } from "./ProductLogo.d";
import {
  ProductPhoto,
  ProductLogoPlaceHolder,
  ProductLayer,
  ProductLogoErrorMessageContainer,
  ProductErrorMessage,
  ProductLayerField,
  ProductLayerButton
} from "../styles/product/productForm";
import { Add } from "grommet-icons";
import { ErrorMessage } from "formik";

export default class ProductLogo extends Component<IProductFormProps> {
  state = {
    showLogoInput: false
  };
  render() {
    return (
      <div>
        <Box
          width="100%"
          height="20em"
          align="center"
          margin="auto"
          background={PLACEHOLDER_GREY}
          onClick={() => this.setState({ showLogoInput: true })}
        >
          {this.props.formikProps.values.logo ? (
            <ProductPhoto src={this.props.formikProps.values.logo} />
          ) : (
            <ProductLogoPlaceHolder>
              <Add color={WHITE} size="xlarge" />
              <Text size="large" style={{ display: "block" }}>
                add logo
              </Text>
            </ProductLogoPlaceHolder>
          )}
        </Box>
        {this.state.showLogoInput && (
          <ProductLayer
            onEsc={() => this.setState({ showLogoInput: false })}
            onClickOutside={() => this.setState({ showLogoInput: false })}
            // style={{paddingTop: "2%"}}
          >
            <ProductLogoErrorMessageContainer>
              <ErrorMessage name="logo" component={ProductErrorMessage} />
            </ProductLogoErrorMessageContainer>
            <ProductLayerField
              type="text"
              name="logo"
              placeholder="Url to logo"
            />
            <ProductLayerButton
              color={GREEN}
              label="add logo"
              onClick={() => this.setState({ showLogoInput: false })}
            />
          </ProductLayer>
        )}
      </div>
    );
  }
}
