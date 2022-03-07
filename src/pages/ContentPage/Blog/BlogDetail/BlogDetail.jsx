import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import "./BlogDetail.scss";
import Blog from "@/model/blog";
import { Tag } from "antd";
import TheMarkDownPreview from "@/pages/ContentPage/Blog/BlogDetail/components/MarkDownPreview";

const BlogDetail = () => {
  const [blog, setBlog] = useState({});

  const location = useLocation();
  const history = useHistory();

  const getBlogId = function (location) {
    const params = new URLSearchParams(location.search);
    return params.get("id");
  };

  useEffect(() => {
    const id = getBlogId(location);
    if (!id) {
      history.goBack();
    }
    const fetch = async () => {
      const result = await new Blog().getBlogById(id);
      setBlog(result);
    };
    fetch();
    return () => {
      setBlog({});
    };
  }, [history, location]);

  const renderTag = (tags) => {
    if (tags && tags.length) {
      return tags.map((tag) => {
        return <Tag key={tag}>{tag}</Tag>;
      });
    }
    return "";
  };

  return (
    <div className={"blog-detail-container"}>
      <div className="blog-detail-header">
        <div className="title">博客详情</div>
      </div>
      <div className={"blog-detail-body"}>
        <header>{blog.title}</header>
        <div className={"blog-detail-content"}>
          <span>{renderTag(blog.tags)}</span>
          <span>{blog.publishDate}</span>
          <span>{blog.status}</span>
        </div>
        <div className="blog-content">
          {/*<p dangerouslySetInnerHTML={{__html: blog.content}}/>*/}
          <TheMarkDownPreview source={blog.content} />
        </div>
      </div>
    </div>
  );
};
export default BlogDetail;
