import React from "react";
import { InfiniteScroll, Box, Heading, Text, Button } from "grommet";
import { MOCK_PRODUCTS } from "../tests/mockProducts";
import { LIGHT_GREY, GREY, RED, GREEN } from "../../../styles/colors";
import { Link } from "react-router-dom";
import { IProduct } from "../../Product/Types/IProduct";
import { ICar } from "../../Product/Types/ICar";
import { FavoritesLink, FavoritesImage } from "../styles/Favorites";
import { url } from "inspector";
import { Underline } from "grommet-icons";

export const FavoritesList = (props: any) => {
  return (
    <InfiniteScroll items={MOCK_PRODUCTS}>
      {(item: IProduct<ICar>) => {
        return (
          <Box
            pad="medium"
            direction="row"
            justify="between"
            background={LIGHT_GREY}
            style={{ borderBottom: `2px solid  ${GREY}` }}
          >
            <FavoritesLink to={`products/:${item.id}`}>
              <FavoritesImage src="https://img.gaadicdn.com/images/carexteriorimages/630x420/Audi/Audi-TT/6297/front-left-side-47.jpg" />
              <div>
                <Heading level="3" margin={{ top: "0", bottom: "20%" }}>
                  {item.productEssence.make}
                  {"   "}
                  {item.productEssence.model}
                </Heading>

                {item.isPriceDiscounted ? (
                  <>
                    <Text
                      size="large"
                      style={{ textDecoration: "line-through" }}
                    >
                      {item.price}$
                    </Text>
                    {"   "}
                    <Text size="large">{item.priceWithDiscount}$</Text>
                  </>
                ) : (
                  <Text size="large">{item.price}$</Text>
                )}
              </div>
            </FavoritesLink>
            <Button
              color={RED}
              label="remove"
              style={{ height: "20%" }}
              margin="none"
            />
          </Box>
        );
      }}
    </InfiniteScroll>
  );
};
