import React from 'react';
import {NavLink} from "react-router-dom";
import './Tag.scss'

const NavTag = (props) => {
    const {handleCloseTag, tags, handleClickTag} = props;
    return (
        // TODO 尚未实现swiper
        <ul className="reuse-tab-wrap" style={{margin: 0}}>
            {
                renderNavLink(tags, handleCloseTag, handleClickTag)
            }
        </ul>
    );
};


const renderNavLink = (tags, handleCloseTag, handleClickTag) => {
    if (!tags.length) {
        return ''
    }
    return tags.map(tag => {
        return (
            <NavLink activeClassName={'active'} to={tag.route} className={'reuse-tab-item'} key={tag.route}
                     onClick={(e) => clickTag(e, handleClickTag, tag)}>
                <li className="menu-li">
                    <i className={tag.icon}/>
                    <span className="title">{tag.title}</span>
                    <span
                        className="el-icon-close"
                        id={'inner'}
                        onClick={() => handleCloseTag(tag)}/>
                </li>
            </NavLink>
        )
    })
}

const clickTag = (e, handleClickTag, tag) => {
    // 通过id来进行冒泡捕捉
    if (e.target?.id === 'inner') {
        e.preventDefault()
        return
    }
    handleClickTag(tag)
}

export default NavTag;