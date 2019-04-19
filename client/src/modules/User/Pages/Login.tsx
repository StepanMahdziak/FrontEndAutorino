import React, { Component } from "react";
import LoginForm from "../Containers/LoginForm";

import { FormSection, PasswordResetLink } from "../styles/CardForm";
import { BigCard } from "../../../components/BigCard ";

import { FormHeroSection } from "../Components/CardHeroSection";
import { FormType } from "../Types/enumerations/FormType";
import { store } from "../../..";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { clearLoading } from "../Store/viewerActions";
interface ILoginPageProps {
  clearLoading: typeof clearLoading
}
export class LoginPage extends Component<ILoginPageProps> {
  componentDidMount() {
    // this.props.clearLoading()
  }
  render() {
    return (
      <BigCard>
        <FormHeroSection formType={FormType.LOGIN}/>
        <FormSection>
        <LoginForm />
        <PasswordResetLink to="/login/reset-password">
          Reset password
        </PasswordResetLink>
        </FormSection>
        </BigCard>
      
    );
  }
}

export default withRouter(connect(null, {clearLoading})(LoginPage))
