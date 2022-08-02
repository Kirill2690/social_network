import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

export type MessageType = {
    id: number,
    message: string

};

export type DialogType = {
    id: number,
    name: string
};

export type PostType = {
    id: number,
    message: string,
    likeCount: number,
    img: string
};

export type DialogsPageType={
    newMessageText: string,
    messagesData: Array<MessageType>
    dialogsData: Array<DialogType>
};
export type ProfilePageType={
    newPostText: string,
    posts: Array<PostType>
};
export type AppStateType = {
    dialogsPage:DialogsPageType
    profilePage:ProfilePageType
};


export type StoreType = {
    _state: AppStateType,
    callBackNewPostText: (newText: string) => void,
    /*addPost: (newPostText: string) => void,*/
    onChange: () => void,
    subscribe: (callback: () => void) => void
    getState: () => AppStateType
    dispatch: (action: ActionsType) => void

}
type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
type UpdateNewMessageActionType = ReturnType<typeof updateMessageAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type ActionsType =
    AddPostActionType
    | ChangeNewTextActionType
    | UpdateNewMessageActionType
    | SendMessageActionType

export const addPostAC = () => {
    return {
        type: 'ADD-POST',

    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText

    } as const
}

export const updateMessageAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        newMessageText: newMessageText
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',


    } as const
}


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hi,how are you?',
                    likeCount: 10,
                    img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-devushek.jpg'
                },
                {
                    id: 2,
                    message: 'Hello',
                    likeCount: 15,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_d4t6iILWhDGYDrjudm76-kC7P77d3zZqQ&usqp=CAU'
                }
            ],
            newPostText: ''

        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Kirill'},
                {id: 2, name: 'Natalia'},
                {id: 3, name: 'Varvara'},
                {id: 4, name: 'Victor'},
                {id: 5, name: 'Bob'},
                {id: 6, name: 'Donald'}

            ],

            messagesData: [
                {id: 1, message: 'Hi)'},
                {id: 2, message: 'Yo!'},
                {id: 3, message: 'Goodbye!'},
                {id: 4, message: 'Good!'},
                {id: 5, message: 'NO!'}

            ],
            newMessageText: ''
        }
    },
    callBackNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this.onChange()
    },
    /*addPost(newPostText: string) {
        let newPost: PostType = {
            id: new Date().getTime(),
            message: newPostText,
            likeCount: 0,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3tpdGkNpv9hFmW49zM7nm69--mVYsoVDfw&usqp=CAU'
        };
        this._state.profilePage.posts.push(newPost)
        this.onChange()
    },*/
    onChange() {
        console.log('state changed')
    },
    subscribe(callback) {
        this.onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this.onChange()

    }
}


export default store;


