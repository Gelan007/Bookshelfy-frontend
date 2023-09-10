import React from 'react';
import UserAccount from "./UserAccount";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";

type MapStateProps = {
    firstName: string
    lastName: string
}
type MapDispatchProps = {}
type OwnProps = {}
type UserAccountProps = MapStateProps & MapDispatchProps & OwnProps

const UserAccountContainer:React.FC<UserAccountProps> = (props) => {
    return (
        <UserAccount isUser={true} firstName={'Ivan'} lastName={'Williams'}/>
    );
};

const mapStateToProps = (state: AppRootStateType):MapStateProps => {
    return {
        firstName: state.userAccount.myProfile.firstName,
        lastName: state.userAccount.myProfile.lastName
    }
}

export default connect<MapStateProps, MapDispatchProps, OwnProps, AppRootStateType>(mapStateToProps, {})(UserAccountContainer);