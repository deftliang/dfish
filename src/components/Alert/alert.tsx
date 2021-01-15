import React, { useState } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'
import Transition from '../Transition/transition'

// export enum AlertType {
//   Success = 'success',
//   Default = 'default',
//   Danger = 'danger',
//   Warning = 'warning'
// }
export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface BaseAlertProps {
  className?: string
  alertType?: AlertType
  title?: string
  children?: React.ReactNode
  closable?: boolean
}
export type AlertProps = BaseAlertProps & React.BaseHTMLAttributes<HTMLElement>
const Alert: React.FC<AlertProps> = (props) => {
  const [show, setShow] = useState(true)
  const {
    className,
    alertType,
    title,
    children,
    closable,
    ...restProps
  } = props
  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType
  })

  return (
    <Transition
      // @ts-ignore
      in={show}
      animation="zoom-in-left"
      timeout={300}
    >
      <div className={classes} {...restProps}>
        {title ? (
          <div>
            <b>{title}</b>
          </div>
        ) : (
          ''
        )}
        <div>{children}</div>
        {closable ? (
          <div
            className="close"
            onClick={() => {
              setShow(false)
            }}
          >
            <Icon theme="light" icon="times" />
          </div>
        ) : (
          ''
        )}
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  title: '提示',
  children: '新消息',
  alertType: 'default'
}

export default Alert