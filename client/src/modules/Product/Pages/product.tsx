import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { IAppState } from "../../../rootStore/initialState.d";
import { IProductsState } from "../Types/productsState.d";
import { IUsersState } from "../../User/Types/usersState.d";
import { IViewerState } from "../../User/Types/viewerState.d";
import {
  ProductHeader,
  ProductGridContainer,
  ProductPhoto,
  ProductPhotosContainer,
  ProductSpecContainer,
  ProductSpecErrorMessageContainer
} from "../styles/product/productForm";
import { Heading, Box, Text } from "grommet";
import { IProduct } from "../Types/IProduct";
import { ICar } from "../Types/ICar";
import {
  ProductHeading,
  ProductNameContainer,
  AddToFavoritesIcon
} from "../styles/product/ProductPage";
import { RED, PLACEHOLDER_GREY, PURPLE } from "../../../styles/colors";
import { unCamelCaser } from "../../../helpers/unCamelCaser";
import { Favorite } from "grommet-icons";

export interface IProductPageProps {
  product: any;
}
const ProductPage = ({ product }: IProductPageProps) => {
  console.log("product");
  return (
    <div>
      {/* {product ? ( */}
      <ProductGridContainer>
        <div>
          <ProductHeader
            margin="none"
            direction="row"
            justify="between"
            alignContent="start"
            height="xsmall"
          >
            <ProductNameContainer>
              <ProductHeading level="2">
                {product.productEssence.make}
              </ProductHeading>

              <ProductHeading level="2">
                {product.productEssence.model}
              </ProductHeading>
            </ProductNameContainer>
            <ProductNameContainer>
              {product.priceWithDiscount ? (
                <>
                  <Heading level="2" style={{ textDecoration: "line-through" }}>
                    {product.price}$
                  </Heading>
                  <Heading level="2" color={RED}>
                    {product.priceWithDiscount}$
                  </Heading>
                </>
              ) : (
                <Heading level="2">{product.price}$</Heading>
              )}
            </ProductNameContainer>
          </ProductHeader>
          <Box
            width="100%"
            height="20em"
            align="center"
            margin="auto"
            background={PLACEHOLDER_GREY}
          >
            {product.logo ? (
              <ProductPhoto src={product.logo} />
            ) : (
              <Heading level="2">Image not found</Heading>
            )}
          </Box>
          <div>
            <ProductPhotosContainer>
              {product.photos.map((photo: any, _index: number) => (
                <div>
                  <Box
                    width="100%"
                    height="xsmall"
                    background={PLACEHOLDER_GREY}
                  >
                    {photo && <ProductPhoto src={photo} />}
                  </Box>
                </div>
              ))}
            </ProductPhotosContainer>
          </div>
        </div>
        <div>
          <Heading level="3" margin={{ top: "6%", bottom: "5%" }}>
            Specification
          </Heading>
          {Object.keys(product.productEssence).map((spec, index) => (
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

                    <Text key={index + 2} size="medium">
                      {product.productEssence[`${spec}`]}
                    </Text>
                  </ProductSpecContainer>
                </>
              )}
            </>
          ))}
          <AddToFavoritesIcon>
           <Favorite color={PURPLE} size="large"/>
          </AddToFavoritesIcon>
        </div>
      </ProductGridContainer>
      {/* ) : (
        <Redirect to="/not-found" />
      )} */}
    </div>
  );
};

// const mapStateToProps = (
//   state: IAppState<IProductsState, IUsersState, IViewerState>
// ) => {};
// export default connect(mapStateToProps)(ProductPage);
export default ProductPage;
