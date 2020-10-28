import React, { useContext } from 'react';
import classNames from 'classnames';
import { TabsContext } from './tabs';
var TabItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, label = props.label;
    var context = useContext(TabsContext);
    var classes = classNames('tab-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && typeof index === 'number') {
            context.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, label));
};
TabItem.displayName = 'TabItem';
export default TabItem;
