import React, { Component } from "react";
import { BigCard } from "../../../components/BigCard ";
import { FormHeroSection } from "../Components/CardHeroSection";
import { FormSection } from "../styles/CardForm";
import { FormType } from "../Types/enumerations/FormType";
import RegistrationForm from "../Containers/RegistrationForm";
import{createUserRequest

} from "../Store/viewerActions"
// interface IRegistrationPage {
//   createUserRequest
// }
export class RegistrationPage extends Component{
// componentDidMount(){
//   this.props.createUserRequest
// }

  render() {
    return (
      <>
        <BigCard>
          <FormHeroSection formType={FormType.REGISTRATION} />
          <FormSection>
            <RegistrationForm />
          </FormSection>
        </BigCard>
      </>
    );
  }
}
