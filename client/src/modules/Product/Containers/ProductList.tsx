import React, { Component } from "react";
import { IProductListProps } from "./ProductList.d";
import { InfiniteScroll, Box, Heading, Text, Button } from "grommet";
import { MOCK_PRODUCTS } from "../../User/tests/mockProducts";
import {
  ProductsGrid,
  CardImg,
  CardText,
  ProductLink
} from "../styles/ProductList";
import {
  LIGHT_GREY,
  GREY,
  DARK_GREY,
  RED,
  GREEN
} from "../../../styles/colors";
import { IProduct } from "../Types/IProduct";
import { ICar } from "../Types/ICar";
import { Favorite } from "grommet-icons";
import { Link } from "react-router-dom";

const ProductList = ({ ...props }: IProductListProps) => {
  return (
    <>
      <div>
        <Link to="/products/new-product">
          <Button color={GREEN} label="new product" margin="large" />
        </Link>
      </div>
      <InfiniteScroll items={props.products}>
        {(car: IProduct<ICar>) => (
          <ProductLink to={`/products/${car.id}`}>
            <Box
              margin="medium"
              width="medium"
              height="40%"
              elevation="large"
              style={{
                display: "inline-block",
                background: `${LIGHT_GREY}`
              }}
              // onClick={() => this.setState({ productId: car.id })}
            >
              <CardImg src={car.logo} />
              <CardText>
                <div>
                  <Text size="large">
                    {car.productEssence.make}
                    {"   "}
                    {car.productEssence.model}
                  </Text>
                  <div>
                    {car.isPriceDiscounted ? (
                      <>
                        <Text
                          size="large"
                          margin="none"
                          style={{
                            textDecoration: "line-through"
                          }}
                        >
                          {car.price}$
                        </Text>
                        {"  "}
                        <Text size="large" color={RED}>
                          {car.priceWithDiscount}$
                        </Text>
                      </>
                    ) : (
                      <Text
                        size="large"
                        margin="none"
                        style={{
                          textDecoration: "line-through"
                        }}
                      >
                        {car.price}$
                      </Text>
                    )}
                  </div>
                </div>
                <Favorite size="large" />
              </CardText>
            </Box>
          </ProductLink>
        )}
      </InfiniteScroll>

      {/* </ProductsGrid> */}
    </>
  );
};

export default ProductList;
