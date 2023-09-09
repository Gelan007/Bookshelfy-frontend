import React from 'react';
import UserAccount from "./UserAccount";

type MapStateProps = {
    firstName: string
    lastName: string
}
type MapDispatchProps = {}
type OwnProps = {}

type UserAccountProps = MapDispatchProps & MapStateProps & OwnProps

const UserAccountContainer:React.FC<UserAccountProps> = () => {
    return (
        <UserAccount isUser={true} firstName={''} lastName={''}/>
    );
};

export default UserAccountContainer;