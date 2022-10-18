import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Music from "./components/navbar/Music";
import Settings from "./components/navbar/Settings";
import store, {RootStateType} from "./redux/redux-store";
import {Error404} from "./components/common/error404/Error404";
import {withSuspense} from "./hoc/withSuspense";
import {LoginForm} from "./components/login/Login";
import News from "./components/navbar/News";
import {Preloader} from "./components/common/preloader/Preloader";
import {notification} from "antd";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import HeaderContainer from "./components/header/HeaderContainer";
import UsersContainer from "./components/users/UsersContainer";



const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));



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
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='wrapper-content'>
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
            initialized: state.app.initialized,
            globalError: state.app.globalError
        })


let AppContainer = compose<React.ComponentType>(withRouter, connect<MapStatePropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp
