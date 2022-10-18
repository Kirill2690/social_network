import {PostType} from "./Post/Post";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

type mapStateToPropsType = {
    posts: Array<PostType>
    messageForNewPost: string,
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}


let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    } as mapStateToPropsType
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        },
    }
}

export const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);
