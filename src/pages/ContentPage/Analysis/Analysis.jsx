import React from 'react';
import DataColumn from "@pages/ContentPage/Analysis/components/DataColumn/DataColumn.jsx";
import DataRadar from "@pages/ContentPage/Analysis/components/DataRadar/DataRadar.jsx";
import DataTiny from "@pages/ContentPage/Analysis/components/DataTiny/DataTiny.jsx";
import DataRose from "@pages/ContentPage/Analysis/components/DataRose/DataRose.jsx";
import DataLine from "@pages/ContentPage/Analysis/components/DataLine/DataLine.jsx";
import './Analysis.scss'
import {Col, Row} from 'antd'

const Analysis = () => {
    return (
        <div className={'analysis-container'}>
            <Row gutter={20}>
                <Col span={16}>
                    <div className={'grid-content'}>
                        <DataColumn/>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="grid-content">
                        <DataRadar/>
                    </div>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={16}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <div className={'grid-content'}>
                                <DataTiny/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className={'grid-content'}>
                                <DataTiny/>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={24}>
                            <div className="grid-content bg-purple">
                                <DataLine />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <div className="grid-content">
                        <DataRose />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Analysis;