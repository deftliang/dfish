import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { TabItemProps } from './tabItem'

type TabsMode = 'dashed' | 'extrude'
type SelectCallback = (selectIndex: number) => void

export interface TabsProps {
  defaultIndex?: number
  className?: string
  mode?: TabsMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
}
interface ITabsContext {
  index: number
  onSelect?: SelectCallback
  mode?: TabsMode
}

export const TabsContext = createContext<ITabsContext>({ index: 0 })

const Tabs: React.FC<TabsProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('df-tabs', className, {
    'tabs-dashed': mode !== 'extrude',
    'tabs-extrude': mode === 'extrude'
  })
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: ITabsContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
    mode
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      const { displayName } = childElement.type
      if (displayName === 'TabItem') {
        return React.cloneElement(childElement, { index })
      } else {
        console.error(
          'Warning: Tabs has a child which is not a TabItem component'
        )
      }
    })
  }
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      // console.log(childElement.props.children)
      if (currentActive === index) {
        // @ts-ignore
        return childElement.props.children
      }
    })
  }

  return (
    <>
    <ul className={classes} style={style} data-testid="test-tabs">
      <TabsContext.Provider value={passedContext}>
        {renderChildren()}
      </TabsContext.Provider>
    </ul>
    <div className='tab-content'>{renderContent()}</div>
    </>
  )
}

Tabs.defaultProps = {
  defaultIndex: 0,
  mode: 'dashed'
}

export default Tabs
