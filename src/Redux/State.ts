type MessageType = {
    id: number,
    message: string
};

type DialogType = {
    id: number,
    name: string
};

type PostType = {
    id: number,
    message: string,
    likeCount: number,
    img: string
};

type ProfilePageType = {
    posts: Array<PostType>
};


type DialogsPageType = {
    dialogsData: Array<DialogType>,
    messagesData: Array<MessageType>
};

type AppStateType = {
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
        ]

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

export default state;


