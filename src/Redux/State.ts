export type StoreType = {
    _state: AppStateType,
    callBackNewPostText:(newPostText: string)=>void,
    addPost:(postMessage: string)=>void,
    onChange:()=>void,
    subscribe:(callback: () => void)=>void

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
            newPostText: ' '

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
    },
    callBackNewPostText(newPostText: string){
        this._state.profilePage.newPostText = newPostText;
        this.onChange()
    },
    addPost(postMessage: string) {
        let newPost: PostType = {
            id: new Date().getTime(),
            message: postMessage,
            likeCount: 0,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3tpdGkNpv9hFmW49zM7nm69--mVYsoVDfw&usqp=CAU'
        };
        this._state.profilePage.posts.push(newPost)
        this.onChange()
    },
    onChange(){
        console.log('state changed')
    },
    subscribe(callback){
        this.onChange = callback
    }



}

////
///ncdsijcnsij


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
    newPostText: string
};


export type DialogsPageType = {
    dialogsData: Array<DialogType>,
    messagesData: Array<MessageType>
};

export type AppStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
};






export default store;


