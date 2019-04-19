import React, { Component } from "react";
import { Formik, FormikValues, Form, Field, ErrorMessage, FormikProps } from "formik";
import { IRegistrationFormProps } from "./registrationForm";
import { INITIAL_REGISTRATION_FORM_VALUES } from "../formikValues/initialregistrationformValues";
import { USER_FORM_SCHEMA } from "../yupSchemas/UserFormSchema";
import { Button } from "grommet";
import {
  StyledField,
  StyledErrorContainer,
  StyledErrorMessage,
  StyledDateContainer,
  StyledDateField,
  StyledFormGrid
} from "../styles/CardForm";
import { IRegistrationFormValues } from "../formikValues/IUserFormValues";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createUserRequest } from "../Store/viewerActions";

class RegistrationForm extends Component<IRegistrationFormProps> {
  public render() {
    return (
      <>
        <Formik
          initialValues={INITIAL_REGISTRATION_FORM_VALUES}
          validationSchema={USER_FORM_SCHEMA}
          onSubmit={(values) => 
            this.props.createUserRequest(values)
        }
          render={(props) => (
            <Form>
              <StyledFormGrid>
                <div>
                  <StyledField
                    display="inline"
                    width="90%"
                    type="text"
                    name="firstName"
                    placeholder="first name"
                  />
                  <StyledErrorContainer>
                    <ErrorMessage
                      name="firstName"
                      component={StyledErrorMessage}
                    />
                  </StyledErrorContainer>
                </div>
                <div>
                  <StyledField
                    display="inline"
                    width="90%"
                    type="text"
                    name="lastName"
                    placeholder="last name"
                  />

                  <StyledErrorContainer>
                    <ErrorMessage
                      name="lastName"
                      component={StyledErrorMessage}
                    />
                  </StyledErrorContainer>
                </div>
              </StyledFormGrid>
              <StyledField type="email" name="email" placeholder="email" />
              <StyledErrorContainer>
                <ErrorMessage name="email" component={StyledErrorMessage} />
              </StyledErrorContainer>
              <StyledField
                type="password"
                name="password"
                placeholder="password"
              />
              <StyledErrorContainer>
                <ErrorMessage name="password" component={StyledErrorMessage} />
              </StyledErrorContainer>

              <StyledFormGrid>
                <div>
                  {/* <StyledDateContainer> */}
                    <StyledField                      
                      name="birthDate"
                      placeholder="00.00.0000"
                    />
                  {/* </StyledDateContainer> */}
                  <StyledErrorContainer>
                    {/* <ErrorMessage
                      name="birthDate"
                      component={StyledErrorMessage}
                    /> */}
                  </StyledErrorContainer>
                </div>
                <div>
                  <StyledField
                    width="90%"
                    display="inline"
                    type="country"
                    name="country"
                    placeholder="country"
                  />
                  <StyledErrorContainer>
                    <ErrorMessage
                      name="country"
                      component={StyledErrorMessage}
                    />
                  </StyledErrorContainer>
                </div>
              </StyledFormGrid>
              <Button
                color="#00C781"
                label="Submit"
                style={{ display: "block", marginTop: "5%" }}

                type="submit"
              />
            </Form>
          )}
        />
      </>
    );
  }
}
export default withRouter(
  connect(
    undefined,
    { createUserRequest }
  )(RegistrationForm)
);
