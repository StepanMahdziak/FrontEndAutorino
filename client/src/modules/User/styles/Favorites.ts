import { url } from 'inspector';
import { DARK_GREY } from './../../../styles/colors';
import { Link } from 'react-router-dom';
import styled from "styled-components";
export const FavoritesContainer =  styled.div`
width: 80%;
margin-top: 2%;
margin-left: 10%;
`
export  const  FavoritesLink = styled(Link)`
color: ${DARK_GREY};
font-size: 2em;
width: 100%;
height: 3.2em;
display: grid;
grid-template-columns: 20% 30%;
grid-gap: 0.5em; 
text-decoration: none;
`
export const FavoritesImage = styled.img`
display: inline-block;
width: 100%;
height: 100%;
background-color: ${DARK_GREY};
`