import React from 'react';
import {BellOutlined, BulbOutlined, FullscreenOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import './Operator.scss'
import userImg from '@/assets/image/user/user.png'
import {Breadcrumb} from 'antd'
import {Link, useLocation} from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (prop) => {
    const {collapsed, toggle, routes = []} = prop;
    const location = useLocation();
    const defaultMenuList = location.pathname.slice(1).split('/');
    return (
        <div className={'operation-container'}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
            })}
            <span className={'nav-content'}>
                {
                    renderBreadcrumb(defaultMenuList, routes)
                }
                <span className={'nav-operators-wrapper'}>
                    <BellOutlined style={{fontSize: '18px'}}/>
                    <BulbOutlined style={{fontSize: '18px'}}/>
                    <FullscreenOutlined style={{fontSize: '18px'}}/>
                    <img src={userImg} alt="头像"/>
                </span>
            </span>
        </div>
    );
};

function itemRender(route, params, routes) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
        <span>{route.title}</span>
    ) : !route.path
        ? (<span style={{cursor: 'pointer'}}>{route.title}</span>)
        : (<Link to={route?.path}>{route.title}</Link>)
}


function getMenuList() {
    // 利用闭包缓存targetList
    let targetList = []
    const step = (defaultMenuList, routes) => {
        const tempMenu = defaultMenuList.shift();
        let target
        target = routes.find(item => item.breadcrumbName === tempMenu);
        if (!target) {
            return []
        }
        targetList.push(target);
        if (defaultMenuList.length && target.children) {
            return step(defaultMenuList, target.children)
        }
        return targetList
    }
    return step
}

function renderBreadcrumb(defaultMenuList, routes) {
    const list = getMenuList()(defaultMenuList, routes)
    return list.length
        ? (<Breadcrumb className={'nav-txt'} itemRender={itemRender} routes={list}/>)
        : '获取失败'
}

// export default Operator;