import React from "react";
import { Heading } from "grommet";

export const InfoHeading = ({ children, ...rest }: any) => {
  return (
    <Heading level="4" margin={{ bottom: "5%", top: "0" }} {...rest}>
      {children}
    </Heading>
  );
};
