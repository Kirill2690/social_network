import {ActionsTypes} from './redux-store';
import {PostsType} from '../components/profile/MyPosts/Post/Post';
import {PhotosType, ProfileType} from '../components/profile/ProfileContainer';
import {ThunkDispatchType, ThunkType} from './users-reducer';
import {profileAPI, usersAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {setAppError} from './app-reducer';

let initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
    ],
    profile: {} as  ProfileType,
    status: '',
}

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_USER_PHOTOS = 'SET_USER_PHOTOS';

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_PHOTOS: {
            if (action.photos) {
                return {
                    ...state, profile: {...state.profile, photos: action.photos}
                }
            }
            return state

        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile!, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export type ActionsProfileTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof setUserPhotos>

export const addPost = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setUserPhotos = (photos: PhotosType | null) => {
    return {
        type: SET_USER_PHOTOS,
        photos
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export const deletePost = (postId: number) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}

export const savePhotoSuccess = (photos: PhotosType) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    } as const
}

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch: ThunkDispatchType) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}

export const getStatus = (status: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    const response = await profileAPI.getStatus(status);
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error: any) {
        dispatch(setAppError(error.message))
    }
}

export const savePhoto = (file: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType | null): ThunkType => async (dispatch: ThunkDispatchType, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;