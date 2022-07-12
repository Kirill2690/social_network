import {renderTree} from "../index";

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

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText:string
};


export type DialogsPageType = {
    dialogsData: Array<DialogType>,
    messagesData: Array<MessageType>
};

export type AppStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
};


let state: AppStateType = {
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
    newPostText:'Hello'

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
            {id: 4, message: 'NO!'}

        ]


    }
}
export const addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: new Date().getTime(),
        message: postMessage,
        likeCount: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3tpdGkNpv9hFmW49zM7nm69--mVYsoVDfw&usqp=CAU'
    };
    state.profilePage.posts.push(newPost)
    renderTree(state)
}

export const callBackNewPostText=(newPostText:string)=>{
    state.profilePage.newPostText=newPostText;
    renderTree(state)
}
export default state;


