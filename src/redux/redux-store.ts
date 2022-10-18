import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionsProfileTypes, profileReducer} from "./profile-reducer";
import {ActionsDialogsTypes, dialogsReducer} from "./dialogs-reducer";
import thunkMiddleWare,{ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import appReducer, {ActionsAppTypes} from "./app-reducer";
import usersReducer, {ActionsUsersTypes} from "./users-reducer";
import authReducer, {ActionsAuthTypes} from "./auth-reducer";
import  {reducer as formReducer} from "redux-form";


export type ActionsTypes =
    ActionsProfileTypes
    | ActionsDialogsTypes
    | ActionsUsersTypes
    | ActionsAuthTypes
    | ActionsAppTypes

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form:formReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export type RootStateType = ReturnType<typeof rootReducer>
// let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export type AppDispatch = ThunkDispatch<RootStateType, unknown, ActionsTypes>
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export type StoreType = typeof store
// @ts-ignore
window.__store__ = store;

export default store;