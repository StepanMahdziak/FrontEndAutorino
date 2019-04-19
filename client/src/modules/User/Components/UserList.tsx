import React, { Component } from "react";
// import { FixedSizeList as List } from "react-window";
import { IUserListProps } from "./UserList.d";
import {
  InfiniteScroll,
  Text,
  AccordionPanel,
  Box,
  Accordion,
  Heading,
  Button
} from "grommet";
import { IUser } from "../Types";
import { UserStatus } from "../Types/enumerations/UserStatus";
import { UserListHeading } from "./UserListHeading";
import { RED, GREEN, LIGHT_GREY } from "../../../styles/colors";
import { StyledAccordion } from "../styles/Users/UserList";
import { IUserResponse } from "../Store/usersEpics/getUsersEpic";
import { MOCK_USERS } from "../tests/mockUsers";

export default class UserList extends Component<IUserListProps> {
  public render() {
    return (
      <>
        <InfiniteScroll items={this.props.users}>
          {(user) => {
            return (
              <>

              <StyledAccordion>
                <AccordionPanel label={`${user.firstName} ${user.lastName}`}>
                  <Box
                    pad="medium"
                    direction="row"
                    justify="between"
                    background={LIGHT_GREY}
                    >
                    <div>
                      <UserListHeading>Email: </UserListHeading>
                      <Text size="medium" margin="medium">
                        {user.email}
                      </Text>
                    </div>
                    <div>
                      <UserListHeading>Birth date:</UserListHeading>
                      <Text size="medium" margin="medium">
                        {user.birthDate}
                      </Text>
                    </div>
                    <div>
                      <UserListHeading>Country:</UserListHeading>
                      <Text size="medium" margin="medium">
                        {user.country}
                      </Text>
                    </div>
                    <div>
                      <UserListHeading>Status:</UserListHeading>
                      <Text size="medium" margin="medium">
                        {user.status == UserStatus.ADMIN ? "Admin" : "Customer"}
                      </Text>
                    </div>
                    <div >
                      <Button
                        label="Delete"
                        color={RED}
                        margin={{ "left": "auto", "right":"0"}}
                        onClick={() =>
                          this.props.deleteUserRequest({ id: user.id, apiToken: 'ldsdl' })
                        }
                        style={{ display: "block", marginBottom: "10%" }}
                        />

                      {user.status == "CUSTOMER" ? (
                        <Button
                        label="Set as admin"
                        color={GREEN}
                        onClick={() =>
                          this.props.updateUserStatusRequest({
                            id: user.id,
                            status: "ADMIN"
                          })
                        }
                        />
                        ) : (
                          <Button
                          label="Set as customer"
                          color={GREEN}
                          onClick={() =>
                            this.props.updateUserStatusRequest({
                              id: user.id,
                              status: "CUSTOMER"
                            })
                          }
                          />
                          )}
                    </div>
                  </Box>
                </AccordionPanel>
              </StyledAccordion>
            </>
            );
          }}
        </InfiniteScroll>
      </>
    );
  }
}
