import React, {useEffect} from 'react';
import {Column} from "@antv/g2plot";

const DataColumn = () => {
    useEffect(() => {
        const barData = [
            {
                "city": "石家庄",
                "type": "水果",
                "value": 14500
            },
            {
                "city": "石家庄",
                "type": "米面",
                "value": 8500
            },
            {
                "city": "石家庄",
                "type": "特产零食",
                "value": 10000
            },
            {
                "city": "石家庄",
                "type": "茶叶",
                "value": 7000
            },
            {
                "city": "深圳",
                "type": "水果",
                "value": 9000
            },
            {
                "city": "深圳",
                "type": "米面",
                "value": 8500
            },
            {
                "city": "深圳",
                "type": "特产零食",
                "value": 11000
            },
            {
                "city": "深圳",
                "type": "茶叶",
                "value": 6000
            },
            {
                "city": "温州",
                "type": "水果",
                "value": 16000
            },
            {
                "city": "温州",
                "type": "米面",
                "value": 5000
            },
            {
                "city": "温州",
                "type": "特产零食",
                "value": 6000
            },
            {
                "city": "温州",
                "type": "茶叶",
                "value": 10000
            },
            {
                "city": "宁波",
                "type": "水果",
                "value": 14000
            },
            {
                "city": "宁波",
                "type": "米面",
                "value": 9000
            },
            {
                "city": "宁波",
                "type": "特产零食",
                "value": 10000
            },
            {
                "city": "宁波",
                "type": "茶叶",
                "value": 9000
            },
            {
                "city": "无锡",
                "type": "水果",
                "value": 14000
            },
            {
                "city": "无锡",
                "type": "米面",
                "value": 9000
            },
            {
                "city": "无锡",
                "type": "特产零食",
                "value": 10000
            },
            {
                "city": "无锡",
                "type": "茶叶",
                "value": 6000
            },
            {
                "city": "杭州",
                "type": "水果",
                "value": 9000
            },
            {
                "city": "杭州",
                "type": "米面",
                "value": 8500
            },
            {
                "city": "杭州",
                "type": "特产零食",
                "value": 10000
            },
            {
                "city": "杭州",
                "type": "茶叶",
                "value": 6000
            },
            {
                "city": "北京",
                "type": "水果",
                "value": 17000
            },
            {
                "city": "北京",
                "type": "米面",
                "value": 6000
            },
            {
                "city": "北京",
                "type": "特产零食",
                "value": 7000
            },
            {
                "city": "北京",
                "type": "茶叶",
                "value": 10000
            },
            {
                "city": "上海",
                "type": "水果",
                "value": 18000
            },
            {
                "city": "上海",
                "type": "米面",
                "value": 11000
            },
            {
                "city": "上海",
                "type": "特产零食",
                "value": 15000
            },
            {
                "city": "上海",
                "type": "茶叶",
                "value": 14000
            }
        ]
        const barConfig = {
            data:barData,
            "padding": 'auto',
            appendPadding: [20, 20, 20, 20],
            xField: 'city',
            yField: 'value',
            "xAxis": {
                "title": {
                    "text": "城市"
                }
            },
            "yAxis": {
                "title": {
                    "text": "数量"
                }
            },
            seriesField: 'type',
            isGroup: 'true',
            meta: {
                city: {
                    alias: '城市',
                },
                value: {
                    alias: '数量',
                },
            },
            forceFit: true,
            columnSize: 12,
            legend: {
                visible: true,
                position: 'top-right',
            },
        }
        const column = new Column('bar-container', barConfig)
        column.render()
    }, [])
    return (
        <div id={'bar-container'} />
    );
};

export default DataColumn;