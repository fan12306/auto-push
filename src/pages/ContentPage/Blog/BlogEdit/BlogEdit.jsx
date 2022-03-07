import React, {useEffect, useState} from "react";
import {Button, Col, Form, Input, Row, Select} from "antd";
import TheEditor from "@pages/ContentPage/Blog/BlogEdit/components/editor/TheEditor.jsx";
import Blog from "@/model/blog";
import "./BlogEdit.scss";
import {useHistory, useLocation} from "react-router";

const BlogEdit = () => {
    const [title, setTitle] = useState("");
    const [keyword, setKeyword] = useState("");
    const [status, setStatus] = useState([]);
    const [pageTags, setPageTags] = useState([]);
    const [content, setContent] = useState("");

    const location = useLocation();
    const history = useHistory();

    // 网络请求
    const [typeList, setTypeList] = useState([]);
    const [statusList, setStatusList] = useState([]);
    const tailLayout = {
        wrapperCol: {
            offset: 3,
        },
    };

    const getBlogId = function (location) {
        const params = new URLSearchParams(location.search);
        return params.get("id");
    };

    /***
     * 初始化博客页面
     * @return {Promise<{typeList: *, statusList: *a}>}
     */
    const initBlogConfig = async () => {
        const typeList = await new Blog().getBlogTypeList();
        const statusList = await new Blog().getBlogStatusList();
        setTypeList(typeList);
        setStatusList(statusList);
    };

    useEffect(() => {
        initBlogConfig();
        return () => {
            setTypeList([]);
            setStatusList([]);
        };
    }, []);

    useEffect(() => {
        const id = getBlogId(location);
        if (id) {
            const fetch = async () => {
                const detail = await new Blog().getBlogById(id);
                console.log(detail);
                setContent(detail.content);
                setStatus(detail.status);
                setTitle(detail.title);
                setKeyword(detail.keyword);
                setPageTags(detail.tags);
            };
            fetch();
        }
    }, [location]);

    const handleSubmit = async () => {
        const tagCodes = pageTags.map((tag) => {
            const item = typeList.find((item) => item.type === tag);
            return item.code;
        });
        const statusCode = statusList.find((item) => item.status === status).code;
        const params = {
            content,
            title,
            keyword,
            status: statusCode,
            tags: tagCodes,
        };
        const id = getBlogId(location);
        id
            ? await new Blog().updateBlog(id, params)
            : await new Blog().createBlog(params);
        history.push("/blogManage/list");
    };

    const handleGetContent = async (value) => {
        setContent(value);
    };

    return (
        <div>
            <div className="header">
                <div className="title">博客创作</div>
            </div>
            <div className={"edit-wrapper"}>
                <Row>
                    <Col lg={16} md={20} sm={24} xs={24}>
                        <Form labelAlign={"right"} labelCol={{span: 3}}>
                            <Form.Item label={"标题"}>
                                <Input
                                    placeholder="标题"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item label={"关键字"}>
                                <Input
                                    placeholder="关键字"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item label={"发布状态"}>
                                <Row>
                                    <Col span={12}>
                                        <Select
                                            style={{touchAction: "pan-y"}}
                                            placeholder="选择发布状态"
                                            onChange={(option) => setStatus(option)}
                                            value={status}
                                        >
                                            {statusList.map((item) => {
                                                return (
                                                    <Select.Option key={item.code} value={item.status}>
                                                        {item.status}
                                                    </Select.Option>
                                                );
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
                                            {typeList.map((item) => {
                                                return (
                                                    <Select.Option key={item.code} value={item.type}>
                                                        {item.type}
                                                    </Select.Option>
                                                );
                                            })}
                                        </Select>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label={"博客内容"} rows={7}>
                                <TheEditor
                                    handleGetContent={handleGetContent}
                                    defaultValue={content}
                                />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" onClick={handleSubmit} loading={false}>
                                    提交
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default BlogEdit;
