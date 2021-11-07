import React, {useMemo} from 'react';
import icon from "@/assets/image/about/icon.png";
import './QuantityItem.scss'

const QuantityItem = (props) => {
    const {title='暂无数据', quantity=0} = props
    const newQuantity = useMemo(() => {
        return (quantity || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }, [quantity])
    return (
        <div className="quantity-item">
            <div className="quantity-detail">
                <div className="quantity-detail-box">
                    <div className="quantity-title">{title}</div>
                    <div className="quantity-border-line" />
                    <div className="quantity">{newQuantity}</div>
                </div>
            </div>
            <div className="quantity-icon"><img src={icon} alt=""/></div>
        </div>
    );
};

export default QuantityItem;