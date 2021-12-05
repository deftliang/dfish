import React from 'react';
export declare type AlertType = 'success' | 'default' | 'danger' | 'warning';
interface BaseAlertProps {
    className?: string;
    alertType?: AlertType;
    title?: string;
    children?: React.ReactNode;
    closable?: boolean;
}
export declare type AlertProps = BaseAlertProps & React.BaseHTMLAttributes<HTMLElement>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
