import React from 'react'
import { ErrorMessage } from 'formik';
import { ProfileErrorMessageStyles } from '../styles/Profile/Informationform';

export const ProfileErrorMessage = ({children, ...rest}: any) => {
    return ( 
        <ErrorMessage component={ProfileErrorMessageStyles} {...rest}/>
    )
}