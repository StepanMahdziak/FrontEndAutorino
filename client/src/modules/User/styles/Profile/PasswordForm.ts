import { DARK_GREY } from './../../../../styles/colors';
import styled from "styled-components";
import { Field } from "formik";
import { GREY } from "../../../../styles/colors";
import { ProfileErrorMessageContainer } from './Informationform';

export const  PasswordFormField = styled(Field)`
background-color: transparent;
margin-top: 5%;
/* margin-left: 10%; */
width: 70%;
font-size: 1em;
border: none;
color: ${DARK_GREY};
border-bottom: ${props => props.dirty ? `2px  solid ${DARK_GREY}`: `2px solid ${GREY}`};
`
