import React from "react";
import { BigCard } from "../components/BigCard ";
import {
  NotFoundContainer,
  TextSection,
  CodeErrorText,
  Message,
  StyledLink
} from "../styles/notFound";
import { Heading } from "grommet";
export const NotFoundPage = () => (
  <BigCard>
    <NotFoundContainer>
      <TextSection>
        <CodeErrorText>404</CodeErrorText>
        <Message>This page is unavailable</Message>
        <StyledLink to="/home">return to main page</StyledLink>
      </TextSection>
    </NotFoundContainer>
  </BigCard>
);
