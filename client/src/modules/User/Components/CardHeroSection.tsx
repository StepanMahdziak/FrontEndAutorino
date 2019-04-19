import React from "react";
import { HeroSection } from "../styles/CardHeroSection";
import { Heading, Text } from "grommet";
import { IFormLogoProps } from "./CardHeroSection.d";
import { FormType } from "../Types/enumerations/FormType";

export const FormHeroSection = (props: IFormLogoProps) => (
  <HeroSection>
    <Heading
      level="1"
      margin={{ top: "30%", right: "5%", bottom: "0" }}
      color="#F8F8F8"
    >
      AutoRino
    </Heading>
    <Text margin={{ right: "5%" }} size="large" color="#F8F8F8">
      Please {props.formType == FormType.LOGIN && "log in"}
      {props.formType == FormType.REGISTRATION && "register"}
    </Text>
  </HeroSection>
);
