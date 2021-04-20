import {SET_LOGIN, SET_LOGOUT, SET_PERMISSIONS, SET_TAGS, SET_USERINFO, DEL_TAGS, MATCH_TAGS} from "./action-types";

export const changeInputValue = (value) => ({type: SET_LOGIN, value})

export const setLoginAction = (value) => ({type: SET_LOGIN, value})

export const setPermissions = (value) => ({type: SET_PERMISSIONS, value})

export const setUserInfo = (value) => ({type: SET_USERINFO, value})

export const setLoginOutAction = (value) => ({type: SET_LOGOUT, value})

export const setTagsAction = (value) => ({type: SET_TAGS, value})

export const delTagsAction = (value) => ({type: DEL_TAGS, value})

export const matchTagAction = (value) => ({type: MATCH_TAGS,value})
