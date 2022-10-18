import {UserType} from "../../redux/users-reducer";
import React from "react";
import s from './Users.module.css'
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./User";


type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
    portionSize: number
}

export const Users: React.FC<PropsType> = ({
                                        users,
                                        totalUsersCount,
                                        pageSize,
                                        currentPage,
                                        onPageChanged,
                                        portionSize,
                                        ...props
                                    }) => {

    return <div className={s.container}>
        <div className={s.users}>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     follow={props.follow}
                                     unfollow={props.unfollow}
                                     followingInProgress={props.followingInProgress}
                />)
            }
        </div>
        <div>
            <Paginator portionSize={portionSize}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
            />
        </div>
    </div>
};
