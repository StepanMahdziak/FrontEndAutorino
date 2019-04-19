import React, { Component } from 'react'
import { SideBar } from '../../../components/Sidebar';
import { Heading } from 'grommet';
import { SideBarLink, LogoutButton } from '../styles/Profile/Sidebar';
import {PURPLE} from "../../../styles/colors"
import { withRouter, Switch, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { IAppState } from '../../../rootStore/initialState.d';
import { IProductsState } from '../../Product/Types/productsState';
import { IUsersState } from '../Types/usersState';
import { IViewerState } from '../Types/viewerState';
import {IProfileProps} from "./Profile.d"
import { updateUserRequest, logoutUserRequest, logoutUserSuccess} from "../Store/viewerActions"
import UserInformationForm from '../Containers/UserInformationForm';
import { User } from 'grommet-icons';
import { ProfileContainer } from '../styles/Profile/Profile';
import { IUserInformationFormValues } from '../formikValues/IUserInformationForm';
import { MOCK_USER } from '../tests/mockUser';
import PasswordForm from '../Containers/PasswordForm';

class Profile extends Component<IProfileProps> {
  render() { let UserInformationValues: IUserInformationFormValues;

     return (<>
     {/* {this.props.data ? */}
  <ProfileContainer>
        <SideBar height="90vh">
        <SideBarLink to="/profile/information" activeStyle={{color: `${PURPLE}`}}>Information</SideBarLink>
        <SideBarLink to="/profile/password" activeStyle={{color: `${PURPLE}`}}>Password</SideBarLink>
        <SideBarLink to="/products" onClick={()=> this.props.logoutUserSuccess()}>Log out</SideBarLink>    
        </SideBar>
        <Switch>
            <Route exact path="/profile/information" render={() => <UserInformationForm data={this.props.data ? this.props.data: MOCK_USER} updateUserRequest={this.props.updateUserRequest}/> }/>
            <Route path="/profile/password"    render={() =>  <PasswordForm password="jhasgdjhgasdkahsg" />}/>
        </Switch>
      </ProfileContainer>
    {/* //   :
    // <Redirect to="/not-found"/>} */}
       
      </>
    )
  }
}

const mapStateToProps = (state: IAppState<IProductsState, IUsersState,IViewerState>) => ({
    data: state.viewer.data,

  });
export default withRouter(connect(mapStateToProps, {updateUserRequest, logoutUserSuccess})(Profile))
