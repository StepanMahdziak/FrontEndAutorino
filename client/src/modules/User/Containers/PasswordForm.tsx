import React, { Component } from "react";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import { IPasswordFormProps, IPasswordFormvalues } from "./PasswordForm.d";
import { Form, Button } from "grommet";
import { PasswordFormSchema } from "../yupSchemas/PasswordForm";
import { PasswordFormCard } from "../Components/PasswordFormCard";
import { PasswordFormField  } from "../styles/Profile/PasswordForm";
import { ProfileErrorMessageContainer } from "../styles/Profile/Informationform";
import { ProfileErrorMessage } from "../Components/InfoErrorMessage";
import { GREEN } from "../../../styles/colors";


export default class PasswordForm extends Component<IPasswordFormProps> {
  render() {
    const oldPassword = this.props.password;
    return (
      <PasswordFormCard>

      <Formik
        initialValues={{
          newPassword: "",
          newPasswordRepeat: "",
          oldPassword: ""
        }}
        validationSchema={PasswordFormSchema}
        onSubmit={() => null}
        render={(props: FormikProps<IPasswordFormvalues>) => (
          <Form>
            <PasswordFormField 
              name="oldPassword"
              type="text"
              validate={(value: string) => {
                let error;
                if (value != oldPassword) {
                  error = "Password is not match";
                }
                return error;
              }} dirty={props.values.oldPassword != props.initialValues.oldPassword}
              placeholder="Old password"
              />
              <ProfileErrorMessageContainer >
              <ProfileErrorMessage name="oldPassword" />
              </ProfileErrorMessageContainer >
            <PasswordFormField name="newPassword" type="text" placeholder="New password" />
            <ProfileErrorMessageContainer >
            <ProfileErrorMessage name="newPassword" />
            </ProfileErrorMessageContainer >
            <PasswordFormField 
              name="newPasswordRepeat"
              type="text"
              validate={(value: string) => {
                let error;
                if (value != props.values.newPassword) {
                  error = "new Password is not match";
                }
                return error;
              }}
              placeholder="Repeat new password"/>
              <ProfileErrorMessageContainer >

            <ProfileErrorMessage name="newPasswordRepeat" />
              </ProfileErrorMessageContainer >
              <Button type="submit" color={GREEN} label="Change password"
              margin={{top: "6%"}}/>
          </Form>
        )}
        />
        </PasswordFormCard>
    );
  }
}
