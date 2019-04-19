import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import React, { Component } from "react";
import { INITIAL_LOGIN_FORM_VALUES } from "../formikValues/initialLoginFormState";
import { LOGIN_FORM_SCHEMA } from "../yupSchemas/loginFormSchema";
import {
  StyledLoginForm,
  StyledField,
  StyledErrorMessage,
  StyledErrorContainer
} from "../styles/CardForm";
import { Button } from "grommet";
import { ILoginFormProps } from "./loginForm"
import { loginUserRequest } from "../Store/viewerActions";
import { connect } from "react-redux";
import { ILoginFormValues } from "../formikValues/ILoginFormValues";
import { withRouter } from "react-router";

class LoginForm extends Component<ILoginFormProps, ILoginFormValues> {
  public render() {
    return (
      <>
        <Formik
          initialValues={INITIAL_LOGIN_FORM_VALUES}
          validationSchema={LOGIN_FORM_SCHEMA}
          onSubmit={(values: ILoginFormValues) =>  this.props.loginUserRequest(values) }
          render={() => (
            <StyledLoginForm>

              <StyledField type="email" name="email" placeholder="Email" />
              <StyledErrorContainer>
                <ErrorMessage name="email" component={StyledErrorMessage} />
              </StyledErrorContainer>
              <StyledField
                type="password"
                name="password"
                placeholder="Password"
              />
              <StyledErrorContainer>
                <ErrorMessage name="password" component={StyledErrorMessage} />
              </StyledErrorContainer>
              <Button
                color="#00C781"
                label="Submit"
                style={{ display: "block", marginTop: "5%" }}
                type="submit"
              />
            </StyledLoginForm>
          )}
        />
      </>
    );
  }
}
export default withRouter(connect(undefined, { loginUserRequest })(LoginForm));
