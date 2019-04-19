import { Field } from "formik";
import { Form } from "formik";
import styled from "styled-components";
import { DARK_GREY, WHITE, RED } from "../../../styles/colors";
import { NavLink } from "react-router-dom";

export const PasswordResetLink = styled(NavLink)`
  text-decoration: none;
  color: #9a9a9a;
  font-size: 1em;
`;


export const FormSection = styled.div`
  height: 90%;
  margin-top: 10%;
  margin-left: 2.5%;
  width: 50%;
`;
export const StyledLoginForm = styled(Form)`
  margin-top: 20%;
  height: 65%;
`;
export const StyledField = styled(Field)`
  width: ${props => props.width || "80%"};
  display: ${props => props.display || "block"};
  padding-left: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  font-size: 1em;

  border: none;
  border-radius: 20px;

  box-shadow: 0 0px 2px ${DARK_GREY};

  background-color: ${WHITE};
  color: ${DARK_GREY};
`;
export const StyledDateField = styled(Field)`

  width: ${props => props.name =="birthDate.year" ? "35%" : "18%"};
  border: none;
  font-size: 1em;
  color: ${DARK_GREY};
  background-color: transparent;
  ::-webkit-inner-spin-button {
  -webkit-appearance: none;
}   -moz-appearance:textfield;
  margin-left: ${props => props.name == "birthDate.day" && "10%"};
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const StyledFormGrid =  styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5%;
`
export const StyledDateContainer = styled.div`
  
  width: 82.5%;
  border-radius: 20px;

  box-shadow: 0 0 2px ${DARK_GREY};
`;
export const StyledErrorContainer = styled.div`
  height: 1.5em;
  margin-left: 2.5%;
  overflow: hidden;
`;
export const StyledErrorMessage = styled.div`
  font-size: 0.8em;
  color: ${RED};
`;
