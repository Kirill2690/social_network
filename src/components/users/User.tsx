import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {Button} from "antd";
import userPhoto from '../../assets/images/833.jpg'

type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
}

export const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {

    return (
        <div className={s.user}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={`user's avatar`}
                             className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <Button className={s.followUnfollowButton} type={'default'} shape={'round'}
                                      disabled={followingInProgress
                                          .some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</Button>
                            : <Button className={s.followUnfollowButton} type={'default'} shape={'round'}
                                      disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</Button>}
                                </div>
                </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                            <span>
                                <div>{user.location?.country}</div>
                                <div>{user.location?.city}</div>
                            </span>
                        </span>
        </div>
    );
};
