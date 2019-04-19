import { IUser } from './../Types/IUser.d';

import { updateUserRequest, logoutUserRequest, logoutUserSuccess } from './../Store/viewerActions';
export interface IProfileProps {
    updateUserRequest: typeof updateUserRequest;
    logoutUserSuccess: typeof logoutUserSuccess;
    data: IUser?
}