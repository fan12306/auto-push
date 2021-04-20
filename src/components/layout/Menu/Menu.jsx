import React, {useEffect, useMemo} from 'react';
import {Menu} from 'antd';
import {Link, useLocation} from 'react-router-dom'
import './Menu.scss'

const {SubMenu} = Menu;

const RenderMenu = ({menus, handleClickMenuItem}) => {
    const location = useLocation();

    // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        // 默认渲染的时候将defaultKey传递出去；
        const menuList = location.pathname.slice(1).split('/');
        const defaultMenuItem = getMenuList()(menuList, menus)
        handleClickMenuItem(defaultMenuItem);
    }, [])

    /**
     *  根据location.pathname进行变化，获取selectedKey
     */
    const selected = useMemo(() => {
        const pathname = location.pathname.slice(1);
        const pathArray = pathname.split('/');
        return pathArray[pathArray.length - 1];
    }, [location.pathname])


    return (
        <Menu
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            collapsed={'collapsed'}
            selectedKeys={[selected]}
        >
            {renderMenu(menus, handleClickMenuItem)}
        </Menu>
    )
}

const renderSubMenu = (subItem, handleClickMenuItem) => {
    return (
        <SubMenu
            key={subItem.name}
            title={
                <span>{subItem?.title}</span>
            }
        >
            {subItem.children ? renderMenu(subItem.children, handleClickMenuItem) : renderMenuItem(subItem, handleClickMenuItem)}
        </SubMenu>
    )

}

const renderMenuItem = (item, handleClickMenuItem) => {
    return (
        <Menu.Item
            key={item.name}
            onClick={() => handleClickMenuItem(item)}
            icon={<i className={item.icon}/>}
        >
            <Link to={item.route} href={item.route}>
                <span>{item?.title}</span>
            </Link>
        </Menu.Item>
    )
}

const renderMenu = (menus, handleClickMenuItem) => {
    return menus.map(item => {
        if (item.children) {
            return renderSubMenu(item, handleClickMenuItem)
        } else {
            return renderMenuItem(item, handleClickMenuItem)
        }
    })
}

/**
 * 返回一个函数，函数执行后会循环执行，找到最后的tag，并且返回
 * @returns {function(*=, *): (*|{})}
 */
const getMenuList = () => {
    let target = {}
    const step = (defaultMenuList, routes) => {
        const tempMenu = defaultMenuList.shift();
        target = routes.find(item => item.breadcrumbName === tempMenu);
        if (defaultMenuList.length) {
            return step(defaultMenuList, target.children)
        }
        return target
    }
    return step
}
export default RenderMenu;