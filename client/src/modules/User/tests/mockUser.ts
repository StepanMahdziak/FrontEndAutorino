import { number } from 'yup';
import { IUser } from "../Types";
import { UserStatus } from "../Types/enumerations/UserStatus";

export const BIRTH_DATE = new Date(1943, 12, 8);

export const MOCK_USER: IUser = {
    id: 1,
    firstName: "Jim",
    lastName: "Morrison",
    birthDate: "20.1.2019",
    country: "USA",
    email: "opendoors@kkn.com",
    status: "ADMIN",
    password: "riders0nTheStorm",
    apiToken: "123456789",
    favorites: []
  };