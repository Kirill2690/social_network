import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import HeaderContainer from './components/header/HeaderContainer';
import {connect, Provider} from 'react-redux';
import store, {RootStateType} from './redux/redux-store';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';
import {notification} from 'antd';
import {Footer} from './components/footer/Footer';
import {Error404} from './components/common/error404/Error404';
import {LoginForm} from "./components/login/Login";

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'));
/*const LoginPage = React.lazy(() => import('./components/login/Login'))*/

type MapStatePropsType = {
    initialized: boolean,
    globalError: string | null
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

export type AppPropsType = MapStatePropsType & MapDispatchToPropsType

class App extends React.Component<AppPropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        // alert('Some error occured');
        console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    openNotificationWithIcon = (type: 'error') => {
        notification[type]({
            message: this.props.globalError
        });
    };

    componentDidUpdate() {
        if (this.props.globalError) {
            this.openNotificationWithIcon('error')
        }
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?"
                           render={withSuspense(ProfileContainer)}/>
                    <Route path="/users" render={withSuspense(UsersContainer)}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={withSuspense(LoginForm)}/>
                    <Route path={'*'} render={() => <div><Error404/></div>}/>
                </Switch>
                <Footer/>
            </div>

        );
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError
})

let AppContainer = compose<React.ComponentType>(withRouter, connect<MapStatePropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {initializeApp}))(App);

export const SocialFNApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

