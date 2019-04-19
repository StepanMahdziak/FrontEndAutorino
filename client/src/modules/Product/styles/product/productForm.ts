import { Layer, Box } from "grommet";
import { Button } from "grommet";
import { PLACEHOLDER_GREY, RED,DARK_GREY } from "./../../../../styles/colors";
import styled from "styled-components";
import { Field, ErrorMessage } from "formik";
export const ProductHeaderField = styled(Field)`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  -moz-appearance: textfield;
  height: 1.5em;
  margin: auto;
  font-size: 1.5em;
  border: none;
  width:100%;
  color: ${DARK_GREY};
  background: transparent;
`;
export  const  ProductHeaderPriceField = styled(ProductHeaderField)`
    width: 95%;
`
export const ProductPhoto = styled.img`
  width: 100%;
  height: 100%;
`;
export const ProductLogoPlaceHolder = styled.div`
  margin: auto;
`;
export const ProductGridContainer =styled.div`
    width: 90%;
    padding: 5%;
  height: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 10%;
`;
export const ProductPhotosContainer = styled.div`
  margin-top: 2em;
  width: 100%;
  display: grid;
  grid-template-columns: 31% 31% 31%;
  grid-gap:  1em;
`
export const ProductLayer = styled(Layer)`
  
  padding: 5%;
`;
export const ProductLayerField = styled(Field)`
  margin-bottom: 10%;
  font-size: 1.2em;
  border: none;
  color: ${DARK_GREY};
  background-color: transparent;
  border-bottom: 2px solid ${PLACEHOLDER_GREY};
`;
export const ProductLayerButton = styled(Button)`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;
export const ProductSpecContainer = styled(Box)`
width: 100%;
  border-bottom: 1px solid ${PLACEHOLDER_GREY};
`;
const ErrorMessageContainer = styled.div`
  height: 1.2em;

  overflow: hidden;
`
export const ProductSpecErrorMessageContainer = styled(ErrorMessageContainer)`
  width: 15%;
  margin-right: 0%;
  margin-left: auto;
  padding-right: 5%;
`;
export const ProductHeader  = styled(Box)`
  width: 100%;

`
export const ProductLogoErrorMessageContainer = styled(ErrorMessageContainer)`
  width: 7em;
`
export const ProductHeaderErrorMessageContainer = styled(ErrorMessageContainer)`
    height: 1.5em;
    font-size: 1.3em;
    width: 10%;
`
export const ProductErrorMessage = styled.div`
  color: ${RED};
`;
export const ProductSpecField = styled(Field)`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  -moz-appearance: textfield;
  width: 12%;
  font-size: 1em;
  border: none;
  color: ${DARK_GREY};
  background-color: transparent;
`;
