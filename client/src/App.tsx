import React, { Component, ReactNode } from "react";
import { Switch, withRouter, Route, Redirect } from "react-router";
import { connect } from "react-redux";
import UsersPage from "./modules/User/Pages/Users";
import ProductsPage from "./modules/Product/Pages/products";
import LoginPage  from "./modules/User/Pages/Login";
import { IAppState } from "./rootStore/initialState.d";
import AppHeader from "./containers/Header";
import { HomePage } from "./pages/home";
import { RegistrationPage } from "./modules/User/Pages/Registration";
import { NotFoundPage } from "./pages/not-found";
import { AppFooter } from "./containers/Footer";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Grommet } from "grommet"
import { GROMMET_THEME } from "./styles/grommetTheme";
import { IViewerState } from "./modules/User/Types/viewerState";
import { IUsersState } from "./modules/User/Types/usersState";
import { IProductsState } from "./modules/Product/Types/productsState";
import ProductPage from "./modules/Product/Pages/product";
import Profile from "./modules/User/Pages/Profile";
import Favorites from "./modules/User/Pages/Favorites";
import ProductsRouter from "./modules/Product/Router/Router"

export interface IAppProps {
  isLogined: boolean;
}
console.log(`apiToken:${window.localStorage.getItem("apiToken")}`)
class App extends Component<IAppProps> {
  public render() {
    return (
      <>
        <GlobalStyles />
        <Grommet theme={GROMMET_THEME} full>
          <AppHeader />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                 <Redirect to="/products" /> 
              }
            />

            <Route path="/users" component={UsersPage} />
            <Route path="/login" render={() => this.props.isLogined ? <Redirect to="/products"/> : <LoginPage/>} />
            <Route path="/products" component={ProductsRouter} />
            <Route path="/profile" render={() => <Redirect to="/profile/information"/>} />
            <Route path="/registration" render={() => this.props.isLogined ? <Redirect to="/products" /> : <RegistrationPage />} />
            <Route path="/favorites" component={Favorites} />

            <Route component={NotFoundPage} />
          </Switch>
          <AppFooter />
        </Grommet>
      </>
    );
  }
}

const mapStateToProps = (state: IAppState<IProductsState, IUsersState, IViewerState>) => ({
  isAdmin: state.viewer.isAdmin,
  isLogined: state.viewer.isLogined,
});
export default withRouter(connect(mapStateToProps)(App));
