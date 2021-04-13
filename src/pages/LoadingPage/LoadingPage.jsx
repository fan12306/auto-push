import React from 'react';
import {Spin} from 'antd'
import './LoadingPage.scss'

const LoadingPage = () => {
    return (
        <div className={'loading-container'}>
            <Spin size={'large'} className={'spin-wrapper'} />
            <div className={'mask-container'} />
        </div>
    );
};

export default LoadingPage;