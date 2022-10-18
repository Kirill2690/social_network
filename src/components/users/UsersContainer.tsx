import {follow, requestUsers, setCurrentPage, unfollow, UserType} from "../../redux/users-reducer";
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsers,
} from '../../redux/users-selectors';
import {Preloader} from "../common/preloader/Preloader";
import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";


type MapStatePropsType = {
    usersPage: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
    portionSize: number,
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users portionSize={this.props.portionSize}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.usersPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
    }
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        requestUsers,
    }),
    withAuthRedirect,
    withRouter
)(UsersContainer)