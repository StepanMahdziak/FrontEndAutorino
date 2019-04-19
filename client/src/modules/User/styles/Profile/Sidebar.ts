import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { DARK_GREY } from "../../../../styles/colors";

export const SideBarLink = styled(NavLink)`
  text-decoration: none;
  color: ${DARK_GREY};
  margin: 15%;
  font-size: 1.5em;
`;
export const LogoutButton = styled.button`
  text-align: left;
  padding-left: 0;
  border: none;
  background: transparent;
  color: ${DARK_GREY};
  margin: 15%;
  font-size: 1.5em;
`;
