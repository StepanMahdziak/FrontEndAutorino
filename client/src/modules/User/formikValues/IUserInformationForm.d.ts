
export interface IUserInformationFormValues {
    firstName: string;
    lastName: string;
    birthDate: {
      day: number|string,
      month: number|string,
      year: number|string
    };
    country: string?;
    email: string;
}