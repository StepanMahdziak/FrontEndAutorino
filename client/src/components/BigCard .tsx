import React from 'react'

import { Box } from "grommet";
import { WHITE} from "../styles/colors";

export const BigCard = (props: any) => {
  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      background={WHITE}
      width="large"
      height="medium"
      elevation="xlarge"
      margin={{
        left: "auto",
        right: "auto",
        top: "6%",
        bottom: "10%"
      }}
      {...props}
    />
  );
};
