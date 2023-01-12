import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {Button} from 'antd';
import userPhoto from '../../assets/images/user.png';
import social from '../../assets/images/CR_Messi.png'
import {useAppSelector} from '../../redux/redux-store';


type HeaderPropsType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void,
}

const Header: React.FC<HeaderPropsType> = (props) => {

    const photo = useAppSelector(state => state.profilePage.profile.photos?.small)

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={social} alt={'social network img'}/>
            <div className={styles.title}>⚽Football social life⚽</div>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div className={styles.logout}>{props.login} {<img className={styles.avatar} src={photo || userPhoto}
                                                                    alt={'avatar'}/>}
                        <Button
                            type={'default'}
                            shape="round"
                            onClick={props.logout}
                        >Log out
                        </Button>
                    </div>
                    :<div className={styles.logout}>
                        <NavLink  style={{ textDecoration: 'none' }} to={'/login'}></NavLink>
                    </div>
                   }
            </div>
        </header>
    );
};

export default Header;