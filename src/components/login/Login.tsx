import React from 'react';
import {login} from '../../redux/auth-reducer';
import {useFormik} from 'formik';
import {Button, Checkbox, Input, Space} from 'antd';
import {Redirect} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../redux/redux-store';
import s from './Login.module.css'
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
    captchaUrl?: string
}

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const captchaUrl = useAppSelector(state => state.auth.captchaUrl)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captchaUrl: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length <= 3) {
                errors.password = 'Must be more than 3 symbols'
            }
            return errors;
        },
        onSubmit: ({email, password, rememberMe, captchaUrl}) => {
            dispatch(login(email, password, rememberMe, captchaUrl))
        },
    })

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <p>To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                               target={'_blank'} rel="noopener noreferrer">here</a> or
                    use common test
                    account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
            <div className={s.container}>
                <h1 className={s.login}>Login</h1>
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <Space direction="vertical">
                        <Input placeholder="Login"
                               {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email && formik.touched.email &&
                            <div className={s.error}>{formik.errors.email}</div>}

                        <Input.Password
                            placeholder="Password"
                            {...formik.getFieldProps('password')}
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </Space>
                    {formik.errors.password && formik.touched.password &&
                        <div className={s.error}>{formik.errors.password}</div>}
                    <div className={s.rememberMe}>
                        <Checkbox
                            checked={formik.values.rememberMe}
                            {...formik.getFieldProps('rememberMe')}
                        /> Remember me
                    </div>
                    {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
                    {captchaUrl && <input className={s.captchaInput}
                                          {...formik.getFieldProps('captchaUrl')}
                    />}
                    <Button type={'default'} shape={'round'} htmlType="submit">Login</Button>
                </form>
            </div>
        </div>
    );
};