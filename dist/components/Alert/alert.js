var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';
var Alert = function (props) {
    var _a;
    var _b = useState(true), show = _b[0], setShow = _b[1];
    var className = props.className, alertType = props.alertType, title = props.title, children = props.children, closable = props.closable, restProps = __rest(props, ["className", "alertType", "title", "children", "closable"]);
    var classes = classNames('alert', className, (_a = {},
        _a["alert-" + alertType] = alertType,
        _a));
    return show ? (React.createElement("div", __assign({ className: classes }, restProps),
        title ? React.createElement("div", null,
            React.createElement("b", null, title)) : '',
        React.createElement("div", null, children),
        closable ? React.createElement("div", { className: "close", onClick: function () { setShow(false); } },
            React.createElement(Icon, { theme: "light", icon: "times" })) : '')) : null;
};
Alert.defaultProps = {
    title: '提示',
    children: '新消息',
    alertType: 'default'
};
export default Alert;
