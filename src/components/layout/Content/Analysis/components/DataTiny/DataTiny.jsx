import React from 'react';
import './DataTiny.scss'
import {RiseOutlined, FallOutlined} from '@ant-design/icons'
import {Progress} from 'antd'

const DataTiny = (props) => {
    const {title='新增订单', count='0', percent='+0%'} = props
    return (
        <div className="container">
            <div className="left">
                <div className="l-side">
                    <div className="title">{title}</div>
                    <div className="num-box">
                        <div className="shape"></div>
                        <div className="num">{count}</div>
                        {renderIcon()}
                        <div className="percent">{percent}</div>
                    </div>
                </div>
                <div className="r-side">
                    <Progress type="circle" percent={75} width={70}/>
                </div>
            </div>
        </div>
    );
};

const renderIcon = (status) => {
    if(status === 'up') {
        return (<RiseOutlined />)
    }else {
       return ( <FallOutlined />)
    }
}

export default DataTiny;