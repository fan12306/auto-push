import {get, post} from '@/utils/axios'
import {saveTokens, removeToken} from "@/utils/localstorage";
import {setLoginAction, setLoginOutAction, setPermissions, setUserInfo} from "@/store/actions";
import store from "@/store";

class User {
    static async login(username, password) {
        const result = await post('/cms/user/login', {
            username,
            password
        }, {
            showBackend: true
        })
        const {access_token, refresh_token} = result;
        saveTokens(access_token, refresh_token);
        await Promise.all([User.getUser(), User.getPermissions()])
    }

    static async getUser() {
        const result = await get('/cms/user/information', {
            handleError: true
        })
        store.dispatch(setUserInfo(result));
        store.dispatch(setLoginAction(true));
    }

    static async getPermissions() {
        const result = await get('/cms/user/permissions', {
            handleError: true
        });
        store.dispatch(setPermissions(result))
    }

    static async logout() {
        await removeToken();
        store.dispatch(setLoginOutAction(false))
    }
}

export default User