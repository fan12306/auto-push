import React, { useState} from "react";
import {Layout} from 'antd';
import privateRoutes from "@router/routes/privateRoutes";
import {connect} from "react-redux";
import { BackTop } from 'antd';
import Operator from '@/components/layout/Operator/Operator'
import NavTag from "@components/layout/Tag/Tag.jsx";
import RenderMenu from '@/components/layout/Menu/Menu'
import LayoutContent from "@components/layout/Content/Content.jsx";
import {delTagsAction, setTagsAction, matchTagAction} from "@store/actions";
import {useHistory} from "react-router";
import logo from '@/assets/image/logo.png'
import mobile_logo from '@/assets/image/mobile-logo.png'
import './Home.scss'

const {Sider, Content} = Layout;

const PageHome = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const history = useHistory()
    const toggle = () => {
        setCollapsed((collapse) => !collapse)
    }
    const handleCloseTag = (value) => {
        const matchTagIndex = props.tags.findIndex(item => item.title === value.title);
        if(props.currentTag.title === value.title && matchTagIndex > -1 ) {
            // 匹配到了最后一个tag，并且当前选中,跳转前面一个route
            if(matchTagIndex === props.tags.length -1) {
                history.push(props.tags[matchTagIndex-1].path);
                props.handleMatchTag(props.tags[matchTagIndex-1])
            }else {
                history.push(props.tags[matchTagIndex+1].path)
                props.handleMatchTag(props.tags[matchTagIndex+1])
            }
        }
        props.handleCloseTag(value)
    }
    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={collapsed} className={'sider-container'}>
                <div className={collapsed ? 'mobile-logo' : 'logo'}>
                    <img src={collapsed ? mobile_logo : logo} alt="logo"/>
                </div>
                <RenderMenu
                    menus={privateRoutes}
                    handleClickMenuItem={props.handleClickMenuItem}
                />
            </Sider>
            <Layout className="site-layout">
                <header className={'header-container'}>
                    <Operator
                        collapsed={collapsed}
                        toggle={toggle}
                        currentTag={props.currentTag}
                        routes={privateRoutes}
                    />
                    {renderNavTag(props.tags, handleCloseTag, props.handleClickTag)}
                </header>
                <Content
                    className="site-layout-background"
                    style={{overflow: 'initial', marginTop: '86px'}}
                >
                    <LayoutContent {...props} />
                </Content>
            </Layout>
            <BackTop />
        </Layout>
    );
}

const renderNavTag = (tags, handleCloseTag, handleClickTag) => {
    if(!tags || tags.length <= 1) {
        return
    }
    return (
        <NavTag
            tags={tags}
            handleCloseTag={handleCloseTag}
            handleClickTag={handleClickTag}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        tags: state?.nav?.tags,
        currentTag: state?.nav?.currentTag
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClickMenuItem: (value) => dispatch(setTagsAction(value)),
        handleCloseTag: (value) => dispatch(delTagsAction(value)),
        handleClickTag: (value) => dispatch(setTagsAction(value)),
        handleMatchTag: (value) => dispatch(matchTagAction(value))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PageHome)