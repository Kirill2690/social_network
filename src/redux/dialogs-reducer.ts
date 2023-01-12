import {v1} from 'uuid';
import {ActionsTypes} from './redux-store';
import {DialogsType} from '../components/dialogs/DialogItem/DialogItem';
import {MessageType} from '../components/dialogs/Message/Message';
import mbappe_img from '../assets/images/mbappe.png'
import messi_img from '../assets/images/messi.png'
import ronaldo_img from '../assets/images/CR7.png'
import totti_img from '../assets/images/totti.png'


let initialState = {
    dialogs: [
        {id: 1, name: 'Mbappe', avatar:mbappe_img},
        {id: 2, name: 'Messi', avatar: messi_img},
        {id: 3, name: 'CR7', avatar: ronaldo_img},
        {id: 3, name: 'Totti', avatar: totti_img},
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}]
            };
        default:
            return state;
    }
}

export type ActionsDialogsTypes = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody
    } as const
}

export default dialogsReducer;