
import { UserStatus } from "./enumerations/UserStatus";
import { IOrder } from "../../Order/Types/Order";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string?;
  email: string;
  password: string;
  status: string;
  apiToken: string;
  favorites: IProduct[];
}
