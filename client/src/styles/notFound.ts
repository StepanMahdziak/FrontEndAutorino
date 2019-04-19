import styled from "styled-components";
import notFoundImage from "../assets/images/notFound.png" 
import { WHITE } from "./colors";
import { Link } from "react-router-dom";
export const NotFoundContainer = styled.div`
width: 100%; height: 100%;
background-image: url(${notFoundImage});
`
export const TextSection  = styled.div`
margin-top:10%;
margin-left: 10%;
color: ${WHITE};
`
export const CodeErrorText  = styled.div`
font-family: "Lato";
font-size: 5em;
font-weight: bold;
height: 0.5em;
` 
export const Message = styled.div`
margin-top: 5%;
margin-bottom: 15%;
font-size: 2em;
`
export const StyledLink = styled(Link)`
margin-top: 20%;
text-decoration: none;
font-size: 1.5em;
color: ${WHITE};
:hover {
    text-decoration: underline
}
`