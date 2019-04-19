import React, { Component } from "react";
import { IAppState } from "../../../rootStore/initialState.d";

import UserList from "../Components/UserList";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { IUser } from "../Types";
import { IViewerState } from "../Types/viewerState";
import { IUsersState } from "../Types/usersState";
import {
  updateUserStatusRequest,
  deleteUserRequest,
  getUsersRequest
} from "../Store/usersActions";
import { IProductsState } from "../../Product/Types/productsState";
import { MOCK_USERS } from "../tests/mockUsers";
import { ListContainer } from "../styles/Users/UserList";
import { IUserResponse } from "../Store/usersEpics/getUsersEpic";

export interface IUsersPageProps {
  getUsersRequest: typeof getUsersRequest;
  updateUserStatusRequest: typeof updateUserStatusRequest;
  deleteUserRequest: typeof deleteUserRequest;
  users: IUserResponse[];
  usersLength: number;
  errors: any;
  loading: boolean;
  apiToken: string;
}
class UsersPage extends Component<IUsersPageProps> {
  componentDidMount() {
    this.props.getUsersRequest({apiToken: this.props.apiToken});
  }
  getSnapshotBeforeUpdate() {
    this.props.getUsersRequest({apiToken: this.props.apiToken});
  }
  public render() {
    return (
      <>
        <ListContainer>
          {this.props.users.length <= 5 ? (
            <div style={{ height: "100vh" }}>
              <UserList
                users={this.props.users}
                deleteUserRequest={this.props.deleteUserRequest}
                updateUserStatusRequest={this.props.updateUserStatusRequest}
                apiToken={this.props.apiToken}
              />
            </div>
          ) : (
            <UserList
              users={this.props.users}
              deleteUserRequest={this.props.deleteUserRequest}
              updateUserStatusRequest={this.props.updateUserStatusRequest}
              apiToken={this.props.apiToken}
            />
          )}
        </ListContainer>
      </>
    );
  }
}
const mapStateToProps = (
  state: IAppState<IProductsState, IUsersState, IViewerState>
) => ({
  errors: state.users.errors,
  loading: state.users.loading,
  users: state.users.data,
  usersLength: state.users.length,
  apiToken: state.viewer.data ? state.viewer.data.apiToken : ""
});

const mapDispatchToProps = {
  getUsersRequest,
  deleteUserRequest,
  updateUserStatusRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersPage)
);
