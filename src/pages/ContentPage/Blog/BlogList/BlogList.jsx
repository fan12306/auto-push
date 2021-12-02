import React, {useState, useEffect} from 'react';
import './BlogList.scss'
import {Button, Space, Table, Tag} from 'antd'
import Blog from "@/model/blog";
import { useHistory } from "react-router-dom";

const {Column} = Table

const BlogList = () => {
    let [result, setResult] = useState([])
    const history =  useHistory()

    useEffect(() => {
        const fetch = async () => {
            const result =  await new Blog().getAllBlog()
            setResult(result)
        }
        fetch().then(e => {
            console.log('eee', e)
        })
        return () => setResult([])
    }, [])

    const handleClickCheck = async (val) => {
        // const result = await new Blog().getBlogById(val.id)
        history.push('/blogManage/blogDetail?id=' + val.id)
    }

    return (
        <div className="blog-container">
            <div className="header">
                <div className="title">博客列表</div>
            </div>
            <Table dataSource={result}>
                <Column title="标题" dataIndex="title" key="title"/>
                <Column title="关键字" dataIndex='keyword' key='keyword'/>
                {/*<Column title={'封面'} dataIndex='interface' key='interface'/>*/}
                <Column
                    title="标签"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <>
                            {tags.map((tag, idx) => (
                                <Tag key={idx}>
                                    {tag}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column title="发布日期" dataIndex="publishDate" key="publishData"/>
                {/*<Column title="发布日期" dataIndex="publishData" key="publishData"/>*/}
                <Column
                    title="操作"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <Button size={'small'}>编辑</Button>
                            <Button size={'small'} onClick={() => handleClickCheck(record)}>查看</Button>
                            <Button danger size={'small'} disabled={true}>删除</Button>
                        </Space>
                    )}
                />
            </Table>
        </div>
    );
};



export default BlogList;