import React, { useState, createContext } from 'react';
import classNames from 'classnames';
export var TabsContext = createContext({ index: 0 });
var Tabs = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, mode = props.mode, style = props.style, onSelect = props.onSelect, children = props.children;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var classes = classNames('df-tabs', className, {
        'tabs-dashed': mode !== 'extrude',
        'tabs-extrude': mode === 'extrude'
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick,
        mode: mode
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'TabItem') {
                return React.cloneElement(childElement, { index: index });
            }
            else {
                console.error('Warning: Tabs has a child which is not a TabItem component');
            }
        });
    };
    var renderContent = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            // console.log(childElement.props.children)
            if (currentActive === index) {
                // @ts-ignore
                return childElement.props.children;
            }
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", { className: classes, style: style, "data-testid": "test-tabs" },
            React.createElement(TabsContext.Provider, { value: passedContext }, renderChildren())),
        React.createElement("div", { className: 'tab-content' }, renderContent())));
};
Tabs.defaultProps = {
    defaultIndex: 0,
    mode: 'dashed'
};
export default Tabs;
