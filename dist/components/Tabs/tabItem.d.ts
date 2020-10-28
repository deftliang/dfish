import React from 'react';
export interface TabItemProps {
    index?: number;
    label?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const TabItem: React.FC<TabItemProps>;
export default TabItem;
