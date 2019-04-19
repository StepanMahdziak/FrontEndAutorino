import React, { Component } from "react";
import { ArrayHelpers, FormikProps, ErrorMessage } from "formik";
import {
  ProductPhotosContainer,
  ProductPhoto,
  ProductLayer,
  ProductLayerField,
  ProductLayerButton
} from "../styles/product/productForm";
import { IProductPhotosFieldArrayProps } from "./ProductPhotosFieldArray.d";
import { Box, Button } from "grommet";
import { PLACEHOLDER_GREY, RED, GREEN } from "../../../styles/colors";

export class ProductPhotosFieldArray extends Component<
  IProductPhotosFieldArrayProps
> {
  state = {
    showPhotoInput: false,
    photoInputIndex: 0
  };
  render() {
    return (
      <ProductPhotosContainer >
        {this.props.formikProps.values.photos.map((photo, index) => (
          <div>
            <Box
              width="100%"
              height="xsmall"
              background={PLACEHOLDER_GREY}
            >
              {photo && <ProductPhoto src={photo} />}
            </Box>
            
              {photo ? (
                <Button
                  key={index + 30}
                  label="delete"
                  color={RED}
                  alignSelf="center"
                  style={{width: "100%", marginTop: "0.8em"}}
                  onClick={() => this.props.arrayHelpers.replace(index, "")}
                />
              ) : (
                <Button
                  key={index + 3}
                  label="add"
                  color={GREEN}
                  
                  style={{width: "100%", marginTop: "0.8em"}}
                  onClick={() =>
                    this.setState({
                      showPhotoInput: true,
                      photoInputIndex: index
                    })
                  }
                />
              )}
            
          </div>
        ))}
        {this.state.showPhotoInput && (
          <ProductLayer
            onEsc={() =>
              this.setState({
                showPhotoInput: false,
                photoInputIndex: 0
              })
            }
            onClickOutside={() =>
              this.setState({
                showPhotoInput: false,
                photoInputIndex: 0
              })
            }
          >
            <ErrorMessage name={`photos.${this.state.photoInputIndex}`} />
            <ProductLayerField
              name={`photos.${this.state.photoInputIndex}`}
              placeholder="Write url of image"
            />
            <ProductLayerButton
              label="add "
              color={GREEN}
              onClick={() => {
                this.props.arrayHelpers.replace(
                  this.state.photoInputIndex || 0,
                  this.props.formikProps.values.photos[
                    this.state.photoInputIndex
                  ]
                );
                this.setState({showPhotoInput: false})}
              }
            />
          </ProductLayer>
        )}
      </ProductPhotosContainer>
    );
  }
}
