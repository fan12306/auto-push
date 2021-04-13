import { Line } from '@antv/g2plot';

import React, {useEffect} from 'react';

const DataLine = () => {
    useEffect(() => {
        const data = [
            {
                "year": "1850",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1850",
                "value": 54,
                "category": "Solid fuel"
            },
            {
                "year": "1850",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1850",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1850",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1851",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1851",
                "value": 54,
                "category": "Solid fuel"
            },
            {
                "year": "1851",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1851",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1851",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1852",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1852",
                "value": 57,
                "category": "Solid fuel"
            },
            {
                "year": "1852",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1852",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1852",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1853",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1853",
                "value": 59,
                "category": "Solid fuel"
            },
            {
                "year": "1853",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1853",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1853",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1854",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1854",
                "value": 69,
                "category": "Solid fuel"
            },
            {
                "year": "1854",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1854",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1854",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1855",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1855",
                "value": 71,
                "category": "Solid fuel"
            },
            {
                "year": "1855",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1855",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1855",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1856",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1856",
                "value": 76,
                "category": "Solid fuel"
            },
            {
                "year": "1856",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1856",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1856",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1857",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1857",
                "value": 77,
                "category": "Solid fuel"
            },
            {
                "year": "1857",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1857",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1857",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1858",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1858",
                "value": 78,
                "category": "Solid fuel"
            },
            {
                "year": "1858",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1858",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1858",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1859",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1859",
                "value": 83,
                "category": "Solid fuel"
            },
            {
                "year": "1859",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1859",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1859",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1860",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1860",
                "value": 91,
                "category": "Solid fuel"
            },
            {
                "year": "1860",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1860",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1860",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1861",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1861",
                "value": 95,
                "category": "Solid fuel"
            },
            {
                "year": "1861",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1861",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1861",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1862",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1862",
                "value": 96,
                "category": "Solid fuel"
            },
            {
                "year": "1862",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1862",
                "value": 0,
                "category": "Cement production"
            },
            {
                "year": "1862",
                "value": 0,
                "category": "Gas flarinl"
            },
            {
                "year": "1863",
                "value": 0,
                "category": "Liquid fuel"
            },
            {
                "year": "1863",
                "value": 103,
                "category": "Solid fuel"
            },
            {
                "year": "1863",
                "value": 0,
                "category": "Gas fuel"
            },
            {
                "year": "1863",
                "value": 0,
                "category": "Cement production"
            }]
        const line = new Line('line-container', {
            data,
            xField: 'year',
            yField: 'value',
            seriesField: 'category',
            xAxis: {
                type: 'time',
            },
            yAxis: {
                label: {
                    // 数值格式化为千分位
                    formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
                },
            },
        })
        line.render();
    }, [])
    return (
        <div id={'line-container'}/>
    );
};

export default DataLine;

