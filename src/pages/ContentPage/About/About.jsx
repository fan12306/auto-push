import React, {useState} from 'react';
import './About.scss'
import welcome from '@/assets/image/about/welcome.png'
import headerBg from '@/assets/image/about/header-bg.png'
import qrcode from '@/assets/image/about/qrcode.jpg'
import QuantityItem from "@pages/ContentPage/About/components/QuantityItem/QuantityItem.jsx";
import Personal from "@pages/ContentPage/About/components/Personal/Personal.jsx";
import Articular from "@pages/ContentPage/About/components/Artical/Artical.jsx";

const About = () => {
    const [quantities] = useState([
        {
            title: '总访问量',
            quantity: 11590
        }, {
            title: '总用户数',
            quantity: 51862
        }, {
            title: '新增访问量 (月)',
            quantity: 1862
        }, {
            title: '新增用户数',
            quantity: 1323
        }]);
    const [articleList] = useState([
        {
            title: 'How to Contribute to Open Source?',
            content: 'Whether you just made your first open source contribution, or you’re looking for new ways to contribute, we hope you’re inspired to take action. Even if your contribution wasn’t accepted, don’t forget to say thanks when a maintainer put effort into helping you. Open source is made by people like you: one issue, pull request, comment, or high-five at a time.',
            publishData: '一天前',
            commentCount: '2384',
            starCount: '237',
            shareCount: '57'
        },
        {
            title: '为什么程序员们愿意在GitHub上开源自己的成果给别人免费使用和学习？',
            content: '“Git的精髓在于让所有人的贡献无缝合并。而GitHub的天才之处，在于理解了Git的精髓。”来一句我们程序员们接地气的话：分享是一种快乐~',
            publishData: '2021年2月3日',
            commentCount: '1420',
            starCount: '432',
            shareCount: '87'
        }])
    return (
        <div className="container">
            <div className="lin-info">
                <div className="lin-info-left">
                    <div className="welcome">
                        <img src={welcome} className="welcome-title" alt=""/>
                        <div className="subtitle">
                            <div className="guide">您还可以点击林间有风官方网站，查看更多作品</div>
                            <div className="link">
                                <a href="https://www.talelin.com" target="_blank" rel="noreferrer">https://talelin.com</a>
                            </div>
                        </div>
                    </div>
                    <img className="welcome-bg" src={headerBg} alt=""/>
                </div>
                <div className="lin-info-right">
                    <div className="team-detail">
                        <div className="team-box">
                            <div className="team-title">产品团队</div>
                            <ul className="team-ul">
                                <li>
                                    <span className="shadow-box"> <i className="team-shadow"/> </span> <span
                                    className="team-role">策划</span>
                                    <span className="team-name">七月</span>
                                </li>
                                <li>
                                    <span className="shadow-box"> <i className="team-shadow"/> </span> <span
                                    className="team-role">研发</span>
                                    <span className="team-name">
                                          <ul>
                                              <li>隔夜蛋炒饭</li>
                                          </ul>
                                        {/*<ul v-else>*/}
                                        {/*  <li>林间有风 CMS 组</li>*/}
                                        {/*</ul>*/}
                                    </span>
                                </li>
                                <li>
                                    <span className="shadow-box"> <i className="team-shadow"/> </span>
                                    <span className="team-role">设计</span>
                                    <span className="team-name">瓜瓜</span>
                                </li>
                            </ul>
                        </div>
                        <div className="team-icon"><img src={qrcode} alt=""/></div>
                        <p className="team-label">林间有风公众号</p>
                    </div>
                </div>
            </div>
            <div className="quantity-statistics">
                {renderQuantityItem(quantities)}
            </div>
            <div className="information">
                <Personal/>
                <div className="article">
                    <div className="article-title">文章</div>
                    <div className="article-list">
                        {renderArticle(articleList)}
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderQuantityItem = (list) => {
    if (!list.length) {
        return
    }
    return list.map(item => {
        return (<QuantityItem title={item.title} quantity={item.quantity} key={item.title}/>)
    })
}

const renderArticle = (list) => {
    return list.map(item => {
        return (<Articular {...item} key={item.title}/>)
    })

}

export default About;