import React, {useEffect} from 'react';
import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'
import 'simplemde/dist/simplemde.min.css'
import {Button, Input, Select} from 'antd'

const BlogEdit = () => {
    const normalCenter = {
        textAlign: 'center',
        marginBottom: 10,
    };
    const stateDefault = '发布'; // 文章发布状态 => 0 草稿，1 发布
    const typeDefault = '普通文章'; // 文章类型 => 1: 普通文章，2: 简历，3: 管理员介绍
    const children = [];
    useEffect(() => {
        const test = new SimpleMDE({
            element: document.getElementById('editor').childElementCount,
            autofocus: true,
            autosave: true,
            previewRender: function (plainText) {
                return marked(plainText, {
                    renderer: new marked.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return highlight.highlightAuto(code).value;
                    }
                });
            },
        })
    }, [])
    return (
        <div>
            <Input
                style={normalCenter}
                addonBefore="标题"
                size="large"
                placeholder="标题"
                name="title"

            />
            <Input
                style={normalCenter}
                addonBefore="作者"
                size="large"
                placeholder="作者"
                name="author"

            />
            <Input
                style={normalCenter}
                addonBefore="关键字"
                size="large"
                placeholder="关键字"
                name="keyword"

            />
            <Input
                style={normalCenter}
                addonBefore="描述"
                size="large"
                placeholder="描述"
                name="desc"
            />
            <Input
                style={normalCenter}
                addonBefore="封面链接"
                size="large"
                placeholder="封面链接"
                name="img_url"
            />

            <Select
                style={{width: 200, marginBottom: 20}}
                placeholder="选择发布状态"
                defaultValue={stateDefault}
            >
                {/*  0 草稿，1 发布 */}
                <Select.Option value="0">草稿</Select.Option>
                <Select.Option value="1">发布</Select.Option>
            </Select>

            <Select
                style={{width: 200, marginLeft: 10, marginBottom: 20}}
                placeholder="选择文章类型"
                defaultValue={typeDefault}
            >
                {/* 文章类型 => 1: 普通文章，2: 简历，3: 管理员介绍 */}
                <Select.Option value="1">普通文章</Select.Option>
                <Select.Option value="2">简历</Select.Option>
                <Select.Option value="3">管理员介绍</Select.Option>
            </Select>

            <Select
                style={{width: 200, marginLeft: 10, marginBottom: 20}}
                placeholder="选择文章转载状态"
            >
                {/* 0 原创，1 转载，2 混合 */}
                <Select.Option value="0">原创</Select.Option>
                <Select.Option value="1">转载</Select.Option>
                <Select.Option value="2">混合</Select.Option>
            </Select>

            <Select
                allowClear
                mode="multiple"
                style={{width: 200, marginLeft: 10, marginBottom: 20}}
                placeholder="标签"
            >
                {children}
            </Select>
            <Select
                allowClear
                mode="multiple"
                style={{width: 200, marginLeft: 10, marginBottom: 10}}
                placeholder="文章分类"
            >
            </Select>
            <div>
                <Button
                    onClick={() => {
                    }}
                    style={{marginBottom: '10px'}}
                    type="primary"
                >
                    提交
                </Button>
            </div>

            <div title="添加与修改文章" width="1200px">
                <textarea id="editor" style={{marginBottom: 20, width: 800}} size="large" rows={6}/>
            </div>
        </div>
    );
};

export default BlogEdit;