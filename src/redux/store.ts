import {v1} from 'uuid';

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type DialogsType = {
    id: number
    name: string
    avatar: string
}
type MessageType = {
    id: string
    message: string
}

type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

type StoreType = {
    _state: RootStateType
    _callSubscriber: (observer: RootStateType) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType

}

const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'It\'s my first post', likesCount: 23},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Denis', avatar: 'https://klike.net/uploads/posts/2019-03/1551511856_25.jpg'},
                {id: 2, name: 'Eugene', avatar: 'https://klike.net/uploads/posts/2019-03/1551515594_15.jpg'},
                {id: 3, name: 'Olya', avatar: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
                {id: 4, name: 'Zhesha', avatar: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg'},
                {id: 5, name: 'Kostya', avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 6, name: 'Ira', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

}

export default store;