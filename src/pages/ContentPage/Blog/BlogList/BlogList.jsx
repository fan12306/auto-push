import React from 'react';
import './BlogList.scss'
import {Button, Space, Table, Tag} from 'antd'
// import Blog from "@/model/blog";

const {Column} = Table

const BlogList = () => {
    const data = [
        {
            key: '1',
            name: 'John',
            author: 'Brown',
            keyword: 'ceshi',
            publishData: '2021年2月3日',
            note: 'New York No. 1 Lake Park',
            tags: [{tag: 'js', color: '#f50'}, {tag: 'es6', color: '#2db7f5'}],
        },
        {
            key: '2',
            name: 'Jim',
            author: 'Green',
            keyword: 'ceshi',
            publishData: '2021年2月3日',
            note: 'London No. 1 Lake Park',
            tags: [{tag: 'js', color: '#f50'}, {tag: 'es6', color: '#2db7f5'}],
        },
        {
            key: '3',
            name: 'Joe',
            author: 'Black',
            keyword: 'ceshi',
            publishData: '2021年2月3日',
            note: 'Sidney No. 1 Lake Park',
            tags: [{tag: 'js', color: '#f50'}, {tag: 'es6', color: '#2db7f5'}],
        },
    ];
    // let [result] = useState([])


    // useEffect(() => {
    //     result = getBlogList();
    // })
    return (
        <div className="blog-container">
            <div className="header">
                <div className="title">博客列表</div>
            </div>
            <Table dataSource={data}>
                <Column title="标题" dataIndex="name" key="name"/>
                <Column title="作者" dataIndex="author" key="author"/>
                <Column title="关键字" dataIndex={'keyword'} key='keyword'/>
                <Column title={'封面'} dataIndex={'interface'} key={'interface'}/>
                <Column
                    title="标签"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <>
                            {tags.map(tag => (
                                <Tag color={tag.color} key={tag.tag}>
                                    {tag.tag}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column title="发布日期" dataIndex="publishData" key="publishData"/>
                <Column title="发布日期" dataIndex="publishData" key="publishData"/>
                <Column
                    title="操作"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <Button size={'small'}>编辑</Button>
                            <Button size={'small'}>查看</Button>
                            <Button danger size={'small'} disabled={true}>删除</Button>
                        </Space>
                    )}
                />
            </Table>
        </div>
    );
};

// const getBlogList =  async () => {
//     return await new Blog().getAllBlog()
// }

export default BlogList;