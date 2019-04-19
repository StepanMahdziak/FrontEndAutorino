import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { WHITE } from "../styles/colors";
import React, { ReactChild } from "react";

const StyledNavLink = styled(NavLink)`
  text-align: center;
  font-size: 1.5em;
  font-weight: lighter;
  padding-bottom: 0.5em;
  color: ${WHITE};
  text-decoration: none;
`;
const ActiveNavLink = {
  borderBottom: `2px solid ${WHITE}`
};
interface IHeaderNavLinkProps {
  children: ReactChild;
  to: string;
}
export const HeaderNavLink = ({ children, ...rest }: IHeaderNavLinkProps) => (
  <StyledNavLink activeStyle={ActiveNavLink} {...rest}>
    {children}
  </StyledNavLink>
);
