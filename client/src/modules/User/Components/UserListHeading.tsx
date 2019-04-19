import React from 'react'
import { Heading } from 'grommet';
export const UserListHeading = ({children, ...rest}: any) => {
    return (<Heading level="4" margin="small" style={{marginBottom: "20px"}} {...rest}>{children}</Heading>)
}