import React from "react";
import { HeaderBox } from "../components/HeaderBox";
import { Heading } from "grommet";
import { NavMenu } from "../components/NavMenu";
import { IAppState } from "../rootStore/initialState.d";
import { IProductsState } from "../modules/Product/Types/productsState";
import { IUsersState } from "../modules/User/Types/usersState";
import { IViewerState } from "../modules/User/Types/viewerState";
import {IHeaderProps} from "./Header.d"
import { withRouter } from "react-router";
import { connect } from "react-redux";

const AppHeader = (props: IHeaderProps ) => (
  <HeaderBox>
    <Heading level="2" margin="none">
      AutoRino
    </Heading>
    <NavMenu isLogined={props.isLogined} isAdmin={props.isAdmin}/>
  </HeaderBox>
);
const mapStateToProps = (state: IAppState<IProductsState, IUsersState,IViewerState>) => ({
  isLogined: state.viewer.isLogined,
  isAdmin: state.viewer.isAdmin
});
export default withRouter(connect(mapStateToProps)(AppHeader));