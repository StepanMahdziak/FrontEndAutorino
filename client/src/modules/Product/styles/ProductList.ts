import { Box } from "grommet";
import styled from "styled-components";
import { GREY, LIGHT_GREY, DARK_GREY } from "../../../styles/colors";
import { Link } from "react-router-dom";

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5%;
`;
export const CardImg = styled.img`
    width: 100%;
    height: 80%;
    margin: 0px;
`;
export const CardText = styled.div`
    width: 80%;
    height: 25%;
    background: ${LIGHT_GREY};
    margin: 0px;
    padding-left: 10%;
    padding-right: 10%;
    display: grid;
    grid-template-columns: 90% 10%;
`;
export const ProductLink = styled(Link)`
    color: ${DARK_GREY};
    text-decoration: none;
`;
