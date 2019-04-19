
import { initialState } from "../../../rootStore/initialState";
import { UserStatus } from "../Types/enumerations/UserStatus";
import { usersReducer } from "./usersReducer";
import {
  updateUserStatusSuccess,
  deleteUserSuccess,
  getUsersRequest,
  getUsersSuccess,
  usersError
} from "./usersActions";
import { MOCK_USER } from "../tests/mockUser";
import { MOCK_ACTION } from "../tests/mockAction";
import { IUsersState } from "../Types/usersState";

let state: IUsersState;

const setup = () => {
  state = initialState.users;
};
describe("users reducer", () => {
  beforeEach(() => {
    setup();
  });
  it("should return initialState while action is not provided", () => {
    expect(usersReducer(state, MOCK_ACTION)).toEqual(state);
  }),
    it("should handle error action", () => {
      const expectedFromFailure: IUsersState = {
        ...state,
        errors: ["mockError"]
      };
      expect(usersReducer(state, usersError("mockError"))).toEqual(
        expectedFromFailure
      );
    });
  it("should handle 'updateUserStatusSuccess' action", () => {
    const stateWithOneuser: IUsersState = {
      ...state,

      data: [MOCK_USER]
    };
    const expectedFromSuccess: IUsersState = {
      ...state,

      data: [{ ...MOCK_USER, status: UserStatus.ADMIN }]
    };
    expect(
      usersReducer(
        stateWithOneuser,
        updateUserStatusSuccess({ id: 1, status: UserStatus.ADMIN })
      )
    ).toEqual(expectedFromSuccess);
  }),
    it("should handle 'deleteUserSuccess' action", () => {
      const expectedFromSuccess: IUsersState = {
        ...state,

        data: []
      };
      expect(usersReducer(state, deleteUserSuccess({ id: 1 }))).toEqual(
        expectedFromSuccess
      );
    }),
    describe("handle 'getUsers' actions", () => {
      it("should  handle request", () => {
        const expectedFromRequest: IUsersState = {
          ...state,

          loading: true
        };
        expect(usersReducer(state, getUsersRequest())).toEqual(
          expectedFromRequest
        );
      });
      it("should handle success", () => {
        const expectedFromSuccess: IUsersState = {
          ...state,

          loading: false,
          length: 1,
          data: [MOCK_USER]
        };
        expect(usersReducer(state, getUsersSuccess([MOCK_USER]))).toEqual(
          expectedFromSuccess
        );
      });
    });
});
