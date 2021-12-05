import React from 'react';
declare type TabsMode = 'dashed' | 'extrude';
declare type SelectCallback = (selectIndex: number) => void;
export interface TabsProps {
    defaultIndex?: number;
    className?: string;
    mode?: TabsMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
}
interface ITabsContext {
    index: number;
    onSelect?: SelectCallback;
    mode?: TabsMode;
}
export declare const TabsContext: React.Context<ITabsContext>;
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
