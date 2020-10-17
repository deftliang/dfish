import React from 'react'
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
// import Alert, {AlertType} from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex='0'
        onSelect={(index) => {
          alert(index)
        }}
        mode="vertical"
        defaultOpenSubMenus={['2']}
      >
        <MenuItem>cool link 1</MenuItem>
        <MenuItem disabled>cool link 2</MenuItem>
        <SubMenu title="drapdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
          <MenuItem>dropdown 3</MenuItem>
        </SubMenu>
      </Menu>

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

      {/* <Alert title="提示" closable alertType={AlertType.Danger}>hello world</Alert>
      <Alert title="提示" closable alertType={AlertType.Default}>hello world</Alert>
      <Alert title="提示" closable alertType={AlertType.Warning}>hello world</Alert>
      <Alert title="提示" closable alertType={AlertType.Success}>hello world</Alert>
      <Alert closable></Alert> */}
    </div>
  )
}

export default App
