import React, { Component } from "react";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import { IUserInformationProps } from "./UserInformationForm.d";
import { IUser } from "../Types";
import { USER_FORM_SCHEMA } from "../yupSchemas/UserFormSchema";
import { Form, Button } from "grommet";
import {
  InfoFieldContainer,
  InfoFieldGrid,
  InfoField,
  ProfileErrorMessageContainer,
  InfoDateField,
  InfoDateFieldYear
} from "../styles/Profile/Informationform";
import { InfoHeading } from "../Components/InfoFormHeading";
import { ProfileErrorMessage } from "../Components/InfoErrorMessage";
import { GREEN } from "../../../styles/colors";
import { updateUserRequest } from "../Store/viewerActions";

export default class UserInfoForm extends Component<IUserInformationProps> {
  render() {
    return (
      <>
        <Formik
          initialValues={this.props.data}
          validationSchema={USER_FORM_SCHEMA}
          onSubmit={(values) => {
            this.props.updateUserRequest(values);
          }}
          render={(props: FormikProps<IUser>) => (
            <Form style={{ width: "90%" }}>
              <InfoFieldGrid>
                <InfoFieldContainer>
                  <InfoHeading>First name</InfoHeading>
                  <InfoField
                    name="firstName"
                    dirty={
                      props.initialValues.firstName != props.values.firstName
                    }
                    type="text"
                  />
                  <ProfileErrorMessageContainer>
                    <ProfileErrorMessage name="firstName" />
                  </ProfileErrorMessageContainer>
                </InfoFieldContainer>

                <InfoFieldContainer>
                  <InfoHeading>Last name</InfoHeading>
                  <InfoField name="lastName" type="text" />
                  <ProfileErrorMessageContainer>
                    <ProfileErrorMessage name="lastName" />
                  </ProfileErrorMessageContainer>
                </InfoFieldContainer>

                <InfoFieldContainer>
                  <InfoHeading>Email</InfoHeading>
                  <InfoField name="email" type="text" />
                  <ProfileErrorMessageContainer>
                    <ProfileErrorMessage name="email" />
                  </ProfileErrorMessageContainer>
                </InfoFieldContainer>

                <InfoFieldContainer>
                  <InfoHeading level="4">Country</InfoHeading>
                  <InfoField name="country" type="text" />
                  <ProfileErrorMessageContainer>
                    <ProfileErrorMessage name="country" />
                  </ProfileErrorMessageContainer>
                </InfoFieldContainer>
                <InfoFieldContainer>
                  <InfoHeading level="4">Birth date</InfoHeading>
                  <InfoField name="birthDate" type="text" />.

                  <ProfileErrorMessageContainer>

                    <ProfileErrorMessage name="birthDate" />
                  </ProfileErrorMessageContainer>
                </InfoFieldContainer>
              </InfoFieldGrid>
              <Button
                type="submit"
                label="Save changes"
                margin={{ left: "34%", top: "2.5%" }}
                
                color={GREEN}
                style={{paddingLeft: "5%", paddingRight: "5%"}}
              />
            </Form>
          )}
        />
      </>
    );
  }
}
