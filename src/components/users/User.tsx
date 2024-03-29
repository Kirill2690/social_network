import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/profile.png';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../redux/users-reducer';
import {Button} from 'antd';
import {UserAddOutlined, UserDeleteOutlined} from "@ant-design/icons";

type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
}

const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {

    return (
        <div className={styles.user}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={`user's avatar`}
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <Button className={styles.followUnfollowButton} type={'primary'}
                                      disabled={followingInProgress
                                          .some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}><UserDeleteOutlined/>Unfollow</Button>
                            : <Button className={styles.followUnfollowButton} type={'primary'}
                                      disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}><UserAddOutlined/>Follow</Button>}
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

export default User;