import React, {useState} from "react";
import ReactWEditor from 'wangeditor-for-react';
import editorConfigs from "@pages/ContentPage/Blog/BlogEdit/components/editor/config";

const TheEditor = ({handleGetContent}) => {
    const [value, setValue] = useState('')

    return (
        <ReactWEditor
            value={value}
            defaultValue={'<h1>标题</h1>'}
            config={editorConfigs}
            onChange={handleGetContent}
        />
    )
}

export default TheEditor