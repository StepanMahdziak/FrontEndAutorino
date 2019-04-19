import React from 'react'
import { WHITE } from '../styles/colors';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HeaderNavLink } from './HeaderNavLink';
import {INavMenuProps} from "./NavMenu.d"
  const NavContainer = styled.div`
      padding-right: 2em;
      width:  ${props => props.id=="admin" ? "33em" :"25em"};
      align-content: center;
      display: grid;
    grid-template-columns: ${props => props.id=="admin" && "auto" } auto auto auto;
      `

export const NavMenu = (props: INavMenuProps) => (
    <NavContainer id={props.isAdmin ? "admin": "customer"}>
        {props.isAdmin && <HeaderNavLink to="/users">Users</HeaderNavLink>}
        <HeaderNavLink to="/products" >Products</HeaderNavLink>
        {props.isLogined ? (<><HeaderNavLink to="/profile" >Profile</HeaderNavLink>
        <HeaderNavLink to="/favorites" >Favorites</HeaderNavLink></>): (<><HeaderNavLink to="/login">Login</HeaderNavLink>
        <HeaderNavLink to="/registration">Register</HeaderNavLink></>)}
        
    </NavContainer>
);
