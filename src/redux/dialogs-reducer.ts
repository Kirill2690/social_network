
import {v1} from "uuid";
import {ActionsTypes} from "./redux-store";
import {MessageType} from "../components/dialogs/Message/Message";
type DialogType = {
    id: number,
    name: string,
    avatar:string
};


const initialState={
    dialogsData: [
        {id: 1, name: 'Kirill',avatar:'https://klike.net/uploads/posts/2019-03/medium/1551511791_8.jpg'},
        {id: 2, name: 'Natalia',avatar:'https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg'},
        {id: 3, name: 'Varvara',avatar:'https://klike.net/uploads/posts/2019-03/1551515537_52.jpeg'},
        {id: 4, name: 'Victor',avatar:'https://klike.net/uploads/posts/2019-03/medium/1551511818_27.jpg'},
        {id: 5, name: 'Bob',avatar:'https://klike.net/uploads/posts/2019-03/1551511868_36.jpg'},
        {id: 6, name: 'Donald',avatar:'https://klike.net/uploads/posts/2022-08/1661144186_2.jpg'}

    ] as Array<DialogType>,

    messagesData: [
        {id: v1(), message: 'Hi)'},
        {id: v1(), message: 'Yo!'},
        {id: v1(), message: 'Goodbye!'},
        {id: v1(), message: 'Good!'},
        {id: v1(), message: 'NO!'}

    ] as Array<MessageType>,
}

export type InitialStateType=typeof initialState
export const dialogsReducer = (state:InitialStateType=initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), message: body}]
            };
            return state
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