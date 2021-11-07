import React, {useState} from 'react';
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import 'braft-extensions/dist/code-highlighter.css'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'

BraftEditor.use(CodeHighlighter({
    includeEditors: ['editor-with-code-highlighter'],
}))

function BraftEditorComponent(props) {
    const [editorState, setEditState] = useState(BraftEditor.createEditorState())
    // const handleChange = (editorState) => {
    //     setEditState(editorState)
    // }

    const preview = () => {

        if (window.previewWindow) {
            window.previewWindow.close()
        }

        window.previewWindow = window.open()
        window.previewWindow.document.write(buildPreviewHtml())
        window.previewWindow.document.close()

    }

    const buildPreviewHtml = () => {
        return `
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${editorState.toHTML()}</div>
        </body>
      </html>
    `

    }
    const extendControls = [
        {
            key: 'custom-button',
            type: 'button',
            text: '预览',
            onClick: preview
        }
    ]


    return (
        <div className="editor-container">
            <BraftEditor id="editor-with-code-highlighter" onChange={(e) => props.handleGetContent(e)}
                         extendControls={extendControls}
                         contentStyle={{height: 400}}/>
        </div>
    );
}

export default BraftEditorComponent;
