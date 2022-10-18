import {RootStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";

const getUsersSelector = (state: RootStateType): Array<UserType> => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {

    return users.filter(u => true)
})

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}

export const getPortionSize = (state: RootStateType) => {
    return state.usersPage.portionSize
}