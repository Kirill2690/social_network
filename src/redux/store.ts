
import {v1} from "uuid";


 type MessageType = {
    id: string,
    message: string

};

 type DialogType = {
    id: number,
    name: string,
     avatar:string
};

export type PostType = {
    id: string,
    message: string,
    likeCount: number,
    img: string
};

export type DialogsPageType={
    newMessageBody: string,
    messagesData: Array<MessageType>
    dialogsData: Array<DialogType>
};
export type ProfilePageType={
    newPostText: string,
    posts: Array<PostType>
};
export type RootStateType = {
    dialogsPage:DialogsPageType
    profilePage:ProfilePageType
};


export type StoreType = {
    _state: RootStateType,
    onChange: () => void,
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    /*dispatch: (action: ActionsType) => void*/

}
/*type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
type UpdateNewMessageActionType = ReturnType<typeof updateMessageAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type ActionsType =
    AddPostActionType
    | ChangeNewTextActionType
    | UpdateNewMessageActionType
    | SendMessageActionType

export const addPostAC = (postText:string) => {
    return {
        type: 'ADD-POST',
        postText: postText

    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText

    } as const
}

export const updateMessageAC = (body: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',


    } as const
}*/


const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {
                    id:v1() ,
                    message: 'Hi,how are you?',
                    likeCount: 10,
                    img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-devushek.jpg'
                },
                {
                    id: v1(),
                    message: 'Hello',
                    likeCount: 15,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_d4t6iILWhDGYDrjudm76-kC7P77d3zZqQ&usqp=CAU'
                }
            ],

        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Kirill',avatar:'https://klike.net/uploads/posts/2019-03/medium/1551511791_8.jpg'},
                {id: 2, name: 'Natalia',avatar:'https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg'},
                {id: 3, name: 'Varvara',avatar:'https://klike.net/uploads/posts/2019-03/1551515537_52.jpeg'},
                {id: 4, name: 'Victor',avatar:'https://klike.net/uploads/posts/2019-03/medium/1551511818_27.jpg'},
                {id: 5, name: 'Bob',avatar:'https://klike.net/uploads/posts/2019-03/1551511868_36.jpg'},
                {id: 6, name: 'Donald',avatar:'https://klike.net/uploads/posts/2022-08/1661144186_2.jpg'}

            ],

            messagesData: [
                {id: v1(), message: 'Hi)'},
                {id: v1(), message: 'Yo!'},
                {id: v1(), message: 'Goodbye!'},
                {id: v1(), message: 'Good!'},
                {id: v1(), message: 'NO!'}

            ],
            newMessageBody: ''
        }
    },
    onChange() {
        console.log('state changed')
    },
    subscribe(observer) {
        this.onChange = observer
    },
    getState() {
        return this._state
    },
    /*dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this.onChange()

    }*/
}


export default store;


