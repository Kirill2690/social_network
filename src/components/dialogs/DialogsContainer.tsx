import Dialogs from "./Dialogs";
import {MessageType} from "./Message/Message";
import {RootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {sendMessageAC} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {DialogType} from "./Dialog/Dialog";
import React from "react";

type mapStateToPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    isAuth: boolean,
}

type mapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void,
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps),
)(Dialogs);