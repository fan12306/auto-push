import React, {useEffect} from 'react';
import {Rose} from '@antv/g2plot';

const DataRose = () => {
    useEffect(() => {
        const roseData = [
            {type: '分类一', value: 27},
            {type: '分类二', value: 25},
            {type: '分类三', value: 18},
            {type: '分类四', value: 15},
            {type: '分类五', value: 10},
            {type: '其他', value: 5},
        ]
        const rosePlot = new Rose('rose-container', {
            data: roseData,
            xField: 'type',
            yField: 'value',
            seriesField: 'type',
            radius: 0.9,
            label: {
                offset: -15,
            },
        });
        rosePlot.render();
    }, [])
    return (
        <div id={'rose-container'}/>
    );
};

export default DataRose;