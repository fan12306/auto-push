import React, { useEffect, useState } from "react";
import "./BlogList.scss";
import { Button, Space, Table, Tag } from "antd";
import BlogModel from "@/model/blog";
import { useHistory } from "react-router-dom";

const { Column } = Table;
const DELETE_SUCCESS_CODE = 18;

const BlogList = () => {
  let [blogs, setBlogs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      const result = await new BlogModel().getAllBlog();
      result.forEach((item) => (item.key = item.id));
      if (result && result?.length) {
        setBlogs(result);
      }
    };
    fetch();
    return () => setBlogs([]);
  }, []);

  const handleClickCheck = async (record) => {
    history.push("/blogManage/detail?id=" + record.id);
  };

  const handleClickUpdate = async (record) => {
    history.push("/blogManage/edit?id=" + record.id);
  };

  const handleClickDelete = async (record) => {
    const result = await new BlogModel().deleteBlog(record.id);
    if (result.code === DELETE_SUCCESS_CODE) {
      const deleteIdx = blogs.findIndex((item) => (item.id = record.id));
      const currentBlogs = blogs.splice(deleteIdx, 1);
      setBlogs(currentBlogs);
    }
  };

  return (
    <div className="blog-container">
      <div className="header">
        <div className="title">博客列表</div>
      </div>
      <Table dataSource={blogs} className="blog-content">
        <Column title="标题" dataIndex="title" key="title" />
        <Column title="发布日期" dataIndex="publishDate" key="publishData" />
        <Column title="更新日期" dataIndex="updateDate" key="updateDate" />
        <Column title="创建日期" dataIndex="createDate" key="createDate" />
        <Column title="状态" dataIndex="status" key="status" />
        <Column
          title="操作"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Button
                size={"small"}
                type={"primary"}
                onClick={() => handleClickUpdate(record)}
              >
                编辑
              </Button>
              <Button
                size={"small"}
                type={"primary"}
                onClick={() => handleClickCheck(record)}
              >
                查看
              </Button>
              <Button
                type={"danger"}
                size={"small"}
                onClick={() => handleClickDelete(record)}
              >
                删除
              </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default BlogList;
