import { GREY } from "./../../../../styles/colors";
import { StyledErrorMessage } from "../CardForm";
import { ProfileContainer } from "./Profile";
import styled from "styled-components";
import { Field } from "formik";
import { DARK_GREY, RED, WHITE } from "../../../../styles/colors";

export const ProfileErrorMessageContainer = styled.div`
  height: 2em;
  overflow: hidden;
`;
export const ProfileErrorMessageStyles = styled.div`
  color: ${RED};
  font-size: 1em;
`;
export const InfoFieldGrid = styled.div`
  margin-top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 40%;
`;
export const InfoFieldContainer = styled.div`
  margin-top: 10%;
  margin-left: 20%;
  padding-top: 1rem;
  padding-left: 1.5rem;
  box-shadow: 0px 3px 20px ${GREY};
`;
export const InfoField = styled(Field)`
  background-color: transparent;
  font-size: 1em;

  color: ${DARK_GREY};
  border: none;
  border-bottom: ${props => props.dirty && `2px solid ${DARK_GREY}`};
`;
export const InfoDateField = styled(InfoField)`
  width: 6%;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  -moz-appearance: textfield;
`;
export const InfoDateFieldYear = styled(InfoField)`
  width: 13%;  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  -moz-appearance: textfield;
`;
