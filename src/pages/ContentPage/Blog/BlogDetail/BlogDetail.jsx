import React from "react";
import './BlogDetail.scss'

const BlogDetail = () => {


    return (
        <div className={"blog-detail-container"}>
            <div className="blog-detail-header">
                <div className="title">博客详情</div>
            </div>
            <div className={'blog-detail-body'}>
                <div className={"blog-detail-content"}>
                    <h1>Fam CMS</h1>
                    <div className={'blog-info-container'}>
                        <span>类别</span>
                        <span>2021-05-04</span>
                        <span>已发布</span>
                    </div>
                    <p>

                    </p>
                </div>
                <div className={'blog-detail-context'}>
                    <ul>
                        <li>
                            Fan CMS
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default BlogDetail