import {ActionsType, PostType, ProfilePageType} from "./State";


export const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
    if (action.type === 'ADD-POST') {
        let newPost: PostType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likeCount: 0,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3tpdGkNpv9hFmW49zM7nm69--mVYsoVDfw&usqp=CAU'
        };

        state.posts.push(newPost)
        state.newPostText = ''


    } else if (action.type === 'CHANGE-NEW-TEXT') {
        state.newPostText = action.newText;
    }

    return state
}