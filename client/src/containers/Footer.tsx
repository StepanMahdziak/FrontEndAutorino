import React from 'react'

import { FooterBox } from "../components/FooterBox";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { WHITE } from "../styles/colors";
import { FooterSocial } from "../components/FooterSocial";
const FooterTextLink = styled(NavLink)`
  font-family: "Lato";
  font-size: 2.5em;
  text-decoration: none;
  color: ${WHITE};
`;
export const AppFooter = () => (
  <FooterBox>
    <FooterTextLink to="/about">About Us</FooterTextLink>
    <FooterTextLink to="/copyright">Copyright</FooterTextLink>
    <FooterSocial />
  </FooterBox>
);
