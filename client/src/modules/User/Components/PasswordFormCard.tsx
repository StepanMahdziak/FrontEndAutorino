import React from "react";
import { Box } from "grommet";
import { WHITE } from "../../../styles/colors";

export const PasswordFormCard = (props: any) => {
    return (<Box direction="column"
                width="medium"
                height="medium"
                color={WHITE}
                pad={{top: "3%", left: "4%"}}
                elevation="large"
                margin={{left: "25%", right: "auto", top: "5%"}} {...props}/>)
                
};
