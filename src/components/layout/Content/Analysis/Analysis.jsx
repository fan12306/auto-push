import React from 'react';
import DataColumn from "@components/layout/Content/Analysis/components/DataColumn/DataColumn.jsx";
import DataRadar from "@components/layout/Content/Analysis/components/DataRadar/DataRadar.jsx";
import DataTiny from "@components/layout/Content/Analysis/components/DataTiny/DataTiny.jsx";
import DataRose from "@components/layout/Content/Analysis/components/DataRose/DataRose.jsx";
import DataLine from "@components/layout/Content/Analysis/components/DataLine/DataLine.jsx";
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