import React from 'react';
import avatar from "@/assets/image/about/avatar.png";
import {Tabs} from "antd";
import './Personal.scss'

const Personal = () => {
    return (
        <div className="personal">
            <div className="personal-title">个人信息</div>
            <img src={avatar} className="personal-avatar" alt={'头像'}/>
            <div className="personal-influence">
                <div className="personal-influence-item">
                    <div className="personal-influence-num color1">5411</div>
                    <div className="personal-influece-label">总访问量</div>
                </div>
                <div className="personal-influence-item">
                    <div className="personal-influence-num color2">913</div>
                    <div className="personal-influece-label">粉丝</div>
                </div>
                <div className="personal-influence-item">
                    <div className="personal-influence-num color3">72</div>
                    <div className="personal-influece-label">作品</div>
                </div>
            </div>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="最新作品" key="1">
                    <div className="content">How to Contribute to Open Source?</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="最热作品" key="2">
                    <div className="content">为什么程序员们愿意在GitHub上开源...</div>
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
};

export default Personal;