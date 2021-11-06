import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import User from '@/model/user'
import LoadingPage from "@pages/LoadingPage/LoadingPage.jsx";
import {getToken} from "@/utils/localstorage";

const withUserPermissionWrapper = Wrapper => {
    return hocProps => {
        const {component: Component, routePermission, permissions, ...rest} = hocProps;
        const hasPermission = permissions && isAllowed(permissions, routePermission);
        const [isLoading, setLoading] = useState(true);
        useEffect(() => {
            if (!permissions?.permissions) {
                const assessToken = getToken('access_token')
                    if (assessToken) {
                        const fetch = async () => {
                            await User.getPermissions()
                            setLoading(false)
                        }
                        fetch().then(() => {
                            // console.log('im in', res)
                        })
                    }else {
                        setLoading(false)
                    }
            } else {
                setLoading(false)
            }
        }, [permissions?.permissions])
        return (
            <Wrapper {...rest} component={props => {
                return hasPermission
                    ? <Component {...props} />
                    : isLoading
                        ? <LoadingPage/>
                        : <Redirect to="/403"/> // 跳转到403暂无权限页面
            }}/>
        );
    };
};
export default withUserPermissionWrapper

/**
 * 是否有权限
 * @param _permission
 * @returns {boolean}
 */
function isAllowed({admin, permissions}, _permission) {
    /* eslint-disable no-restricted-syntax */
    /* eslint-disable guard-for-in */

    if (admin) {
        return true
    }
    if (!permissions) {
        return false
    }
    for (const mod of permissions) {
        for (const item in mod) {
            for (const a of mod[item]) {
                // console.log(a.permission)
                if (a.permission === _permission) {
                    return true
                }
            }
        }
    }
    return false
}
