import { AnyAction } from "redux";
import { initialState } from "../../../rootStore/initialState";
import { IUser } from "../Types";
import { MOCK_USER } from "../tests/mockUser";
import { viewerReducer } from "./viewerReducer";
import {
  createUserRequest,
  createUserSuccess,
  updateUserSuccess,
  loginUserRequest,
  loginUserSuccess,
  logoutUserSuccess,
  addProductToFavoritesSuccess,
  removeProductFromFavoritesSuccess,
  removeAllProductsFromFavoritesSuccess,
  viewerError
} from "./viewerActions";
import { UserStatus } from "../Types/enumerations/UserStatus";
import { MOCK_PRODUCT } from "../tests/mockProduct";
import { MOCK_ACTION } from "../tests/mockAction";
import { IViewerState } from "../Types/viewerState";
let state: IViewerState;

const setup = () => {
  state = initialState.viewer;
};
const expectedFromRequest: IViewerState = {
  ...initialState.viewer,

  loading: true
};
describe("viewer reducer", () => {
  beforeEach(() => {
    setup();
  });

  it("should return initialState while action is not provided", () => {
    expect(viewerReducer(state, MOCK_ACTION)).toEqual(state);
  }),
    it("should handle error action", () => {
      const expectedFromFailure: IViewerState = {
        ...state,

        errors: ["mockError"]
      };
      expect(viewerReducer(state, viewerError("mockError"))).toEqual(
        expectedFromFailure
      );
    });
  describe("should handle 'createUser' actions", () => {
    it("should  handle request", () => {
      expect(viewerReducer(state, createUserRequest())).toEqual(
        expectedFromRequest
      );
    }),
      it("should handle success", () => {
        const expectedFromSuccess: IViewerState = {
          ...state,

          isLogined: true,
          loading: false,
          data: MOCK_USER
        };
        expect(viewerReducer(state, createUserSuccess(MOCK_USER))).toEqual(
          expectedFromSuccess
        );
      });
  }),
    it("should handle 'updateUserSuccess' action", () => {
      const expectedFromSuccess: IViewerState = {
        ...state,

        data: MOCK_USER
      };
      expect(viewerReducer(state, updateUserSuccess(MOCK_USER))).toEqual(
        expectedFromSuccess
      );
    }),
    describe("should handle 'login user' actions ", () => {
      it("should handle request", () => {
        expect(viewerReducer(state, loginUserRequest())).toEqual(
          expectedFromRequest
        );
      }),
        it("should handle success, when status is Customer", () => {
          const expectedFromSuccess: IViewerState = {
            ...state,

            loading: false,
            isLogined: true,
            data: MOCK_USER
          };
          expect(viewerReducer(state, loginUserSuccess(MOCK_USER))).toEqual(
            expectedFromSuccess
          );
        }),
        it("should handle success action, when status is Admin", () => {
          const adminMockUser = { ...MOCK_USER, status: UserStatus.ADMIN };
          const expectedFromSuccess: IViewerState = {
            ...state,

            loading: false,
            isLogined: true,
            isAdmin: true,
            data: adminMockUser
          };
          expect(viewerReducer(state, loginUserSuccess(adminMockUser))).toEqual(
            expectedFromSuccess
          );
        });
    });
  it("should handle 'logoutUserSuccess' action", () => {
    const adminMockUser = { ...MOCK_USER, status: UserStatus.ADMIN };
    const stateWithLoginedUser: IViewerState = {
      ...state,

      loading: false,
      isLogined: true,
      isAdmin: true,
      data: adminMockUser
    };
    expect(viewerReducer(stateWithLoginedUser, logoutUserSuccess())).toEqual(
      state
    );
  }),
    it("should handle 'addProductTofavoritesSuccess' actions", () => {
      const stateWithLoginedUser: IViewerState = {
        ...state,

        data: {
          ...MOCK_USER
        }
      };
      const expectedFromSuccess: IViewerState = {
        ...state,

        data: {
          ...MOCK_USER,
          favorites: [MOCK_PRODUCT]
        }
      };
      expect(
        viewerReducer(
          stateWithLoginedUser,
          addProductToFavoritesSuccess(MOCK_PRODUCT)
        )
      ).toEqual(expectedFromSuccess);
    }),
    it("should handle 'removeProductfromFavoritesSuccess' action", () => {
      const stateWithFavoriteProduct: IViewerState = {
        ...state,

        data: {
          ...MOCK_USER,
          favorites: [MOCK_PRODUCT]
        }
      };
      const expectedFromSuccess: IViewerState = {
        ...state,

        data: { ...MOCK_USER }
      };
      expect(
        viewerReducer(
          stateWithFavoriteProduct,
          removeProductFromFavoritesSuccess({ id: 1 })
        )
      ).toEqual(expectedFromSuccess);
    }),
    it("should handle 'removeAllProductsSuccess' action", () => {
      const stateWithFavoriteProduct: IViewerState = {
        ...state,

        data: {
          ...MOCK_USER,
          favorites: [MOCK_PRODUCT]
        }
      };
      const stateWithMockUser: IViewerState = {
        ...state,

        data: MOCK_USER
      };
      expect(
        viewerReducer(
          stateWithFavoriteProduct,
          removeAllProductsFromFavoritesSuccess()
        )
      ).toEqual(stateWithMockUser);
    });
});
