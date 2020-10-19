import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'
// @ts-ignore
interface TransitionProps extends CSSTransitionProps {
  animation?: AnimationName,
  wrapper? : boolean,
}

const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    // @ts-ignore
    classNames,
    animation,
    wrapper,
    ...restProps
  } = props
  return (
    // @ts-ignore
    <CSSTransition
      classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  // @ts-ignore
  unmountOnExit: true,
  appear: true,
}

export default Transition