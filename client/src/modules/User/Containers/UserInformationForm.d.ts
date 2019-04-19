import { IUserInformationFormValues } from './../formikValues/IUserInformationForm.d';
import { IUser } from "../Types/IUser";
import { updateUserRequest } from "../Store/viewerActions";


export interface IUserInformationProps {
    data: IUser;
    updateUserRequest: typeof updateUserRequest; 
}