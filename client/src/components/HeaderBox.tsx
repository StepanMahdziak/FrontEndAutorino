import React from 'react'
import { Box } from 'grommet';
import { DARK_GREY } from '../styles/colors';
 export const HeaderBox = (props: any) => (    <Box
    direction="row"
    align="center"
    justify="between"
    background={DARK_GREY}
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "3", boxShadow: `0px 3px 10px ${DARK_GREY}`, position: "sticky" }}
    {...props}
  />)