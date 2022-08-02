import {ActionsType, DialogsPageType} from "./State";

export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-MESSAGE':
            state.newMessageText = action.newMessageText;
            return state
        case 'SEND-MESSAGE':
            let newMessage = state.newMessageText
            state.newMessageText = '';
            state.messagesData.push({id: 6, message: newMessage})
            return state
        default:
            return state;
    }


}