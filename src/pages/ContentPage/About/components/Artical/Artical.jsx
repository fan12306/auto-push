import React from 'react';
import openSource from "@/assets/image/about/open-source.jpg";
import './Artical.scss'
import {Space, Divider} from "antd";

const Articular = (props) => {
    const {title, content, publishDate, commentCount, starCount, shareCount} = props
    return (
        <div className="article-item">
            <img className="article-thumb" src={openSource} alt=""/>
            <div className="article-detail">
                <p className="article-detail-title">{title}</p>
                <div className="article-detail-content">
                    {content}
                </div>
                <div className="article-tool">
                    <div className="pubdate">{publishDate}</div>
                    <Space className="article-about" split={<Divider type="vertical" />}>
                        <span><i className="iconfont icon-start"/>{starCount}</span>
                        <span><i className="iconfont icon-comment"/>{commentCount}</span>
                        <span><i className="iconfont icon-share"/>{shareCount}</span>
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default Articular;