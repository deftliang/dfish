import React from 'react'
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, {AlertType} from './components/Alert/alert'

function App() {
  return (
    <div className="App">
      {/* <Button
        btnType={ButtonType.Danger}
        size={ButtonSize.Small}
        disabled
      >
        add
      </Button>
      <Button
        btnType={ButtonType.Default}
        size={ButtonSize.Small}
      >
        add
      </Button>
      <Button
        btnType={ButtonType.··Primary}
        size={ButtonSize.Small}
      >
        add
      </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">
        baidu
      </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>
        baidu
      </Button> */}
      <Alert title="提示" closable alertType={AlertType.Danger}>hello world</Alert>
      <Alert title="提示" closable alertType={AlertType.Default}>hello world</Alert>
      <Alert title="提示" closable alertType={AlertType.Warning}>hello world</Alert>
      <Alert title="提示" closable alertType={AlertType.Success}>hello world</Alert>
      <Alert closable></Alert>
    </div>
  )
}

export default App
