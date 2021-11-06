import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Row, Select} from 'antd'
import './BlogEdit.scss'
import Blog from "@/model/blog";
import BraftEditorComponent from "@components/layout/Content/Blog/BlogEdit/components/BraftEditor.jsx";

const BlogEdit = () => {
    const [title, setTitle] = useState('');
    const [keyword, setKeyword] = useState('');
    const [status, setStatus] = useState([]);
    const [pageTags, setPageTags] = useState([]);
    const [content, setContent] = useState('');

    // 网络请求
    const [typeList, setTypeList] = useState([])
    const [statusList, setStatusList] = useState([])
    const tailLayout = {
        wrapperCol: {
            offset: 3
        },
    };

    /**
     * tags与status的请求
     */
    useEffect(() => {
        const fetch = async () => {
            const result = await initBlogConfig();
            console.log('re', result)
            setTypeList(result.typeList)
            setStatusList(result.statusList)
        }
        fetch()
        return () => {
            setTypeList([])
            setStatusList([])
        }
    }, [])

    const handleSubmit = async () => {
        const params = {
            content, title, keyword, status, tags: pageTags
        }
        await new Blog().createBlog(params);
    }

    const handleGetContent = async (value) => {
        setContent(value.toHTML());
        console.log('content', content);
    }



    return (
        <div>
            <div className="header">
                <div className="title">博客创作</div>
            </div>
            <div className={'edit-wrapper'}>
                <Row>
                    <Col lg={16} md={20} sm={24} xs={24}>
                        <Form labelAlign={'right'} labelCol={{span: 3}}>
                            <Form.Item label={'标题'}>
                                <Input placeholder="标题" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </Form.Item>
                            <Form.Item label={'关键字'}>
                                <Input placeholder="关键字" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                            </Form.Item>
                            <Form.Item label={'发布状态'}>
                                <Row>
                                    <Col span={12}>
                                        <Select
                                            style={{touchAction: "pan-y"}}
                                            placeholder="选择发布状态"
                                            onChange={(option) => setStatus(option)}
                                            value={status}
                                        >
                                            {statusList.map(item => {
                                                return (<Select.Option key={item.code}
                                                                       value={item.code}>{item.status}</Select.Option>)
                                            })}
                                        </Select>
                                    </Col>
                                    <Col span={12}>
                                        <Select
                                            allowClear
                                            mode="multiple"
                                            placeholder="标签"
                                            aria-readonly={true}
                                            onChange={(option) => setPageTags(option)}
                                            value={pageTags}
                                        >
                                            {typeList.map(item => {
                                                return (<Select.Option key={item.code}
                                                                       value={item.code}>{item.type}</Select.Option>)
                                            })}
                                        </Select>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label={'博客内容'} rows={7}>
                               <BraftEditorComponent handleGetContent={handleGetContent}/>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" onClick={handleSubmit} loading={false}>提交</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

/***
 * 初始化博客页面
 * @return {Promise<{typeList: *, statusList: *}>}
 */
const initBlogConfig = async () => {
    const typeList = await new Blog().getBlogTypeList();
    const statusList = await new Blog().getBlogStatusList();
    return {typeList, statusList}
}

export default BlogEdit;