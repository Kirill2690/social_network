import {Redirect} from "react-router-dom";
import {RootStateType} from "../redux/redux-store";
import {Component, ComponentType} from "react";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {

    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T extends Component>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}