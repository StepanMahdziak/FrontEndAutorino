import React from 'react'

import { Box } from "grommet";
import { LIGHT_GREY} from "../styles/colors";

export const SideBar = (props: any) => {
  return (
    <Box
      direction="column"
      align="left"
      justify="start"
      background={LIGHT_GREY}
      width="small"
      
      elevation="large"
      margin="none"
      {...props}
    />
  );
};
