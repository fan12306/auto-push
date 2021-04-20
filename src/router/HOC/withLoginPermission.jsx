import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import User from "@/model/user";
import {getToken} from '@/utils/localstorage'
import LoadingPage from "@pages/LoadingPage/LoadingPage.jsx";

const withLoginPermissionWrapper = Wrapper => {
    return hocProps => {
        const {component: Component, isLogin, ...rest} = hocProps;
        const [isLoading, setLoading] = useState(true);
        useEffect(() => {
            if (!isLogin) {
                const assessToken = getToken('access_token')
                if (assessToken) {
                    const fetch = async () => {
                        await User.getUser()
                        setLoading(false)
                    }
                    fetch();
                }
            } else {
                setLoading(false)
            }
        }, [isLogin])
        return (
            <Wrapper {...rest} component={props => {
                return isLogin
                    ? <Component {...props} />
                    : (isLoading
                        ? <LoadingPage/>
                        : <Redirect to={'/login'}/>)
            }}/>
        );
    };
};

export default withLoginPermissionWrapper
