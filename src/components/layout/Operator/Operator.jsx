import React from 'react';
import {BellOutlined, BulbOutlined, FullscreenOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import './Operator.scss'
import userImg from '@/assets/image/user/user.png'
import {Breadcrumb} from 'antd'
import {Link, useLocation} from "react-router-dom";

export default (prop) => {
    const {collapsed, toggle, currentTag = {title: '获取失败'}, routes = []} = prop;
    const location = useLocation();
    const defaultMenuList = location.pathname.slice(1).split('/');
    return (
        <div className={'operation-container'}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
            })}
            <span className={'nav-content'}>
                <Breadcrumb className={'nav-txt'} itemRender={itemRender}
                            routes={getMenuList()(defaultMenuList, routes)}/>
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
    ) : !route.route
        ? (<span style={{cursor: 'pointer'}}>{route.title}</span>)
        : (<Link to={route?.route}>{route.title}</Link>)
}


function getMenuList() {
    // ceshi
    // 利用闭包缓存targetList
    let targetList = []
    const step = (defaultMenuList, routes) => {
        const tempMenu = defaultMenuList.shift();
        const target = routes.find(item => item.breadcrumbName === tempMenu);
        targetList.push(target);
        if (defaultMenuList.length) {
            return step(defaultMenuList, target.children)
        }
        return targetList
    }
    return step
}

// export default Operator;