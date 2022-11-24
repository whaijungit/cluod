import React from 'react'
import routers from './router'
import { Layout, Menu } from 'antd'
import LoginStack from './views/login/Stack'
import { Link, useRoutes } from 'react-router-dom'
import { ItemType } from 'antd/es/menu/hooks/useItems'
const { Header } = Layout

const menuItems: ItemType[] = [
  {
    key: '/',
    label: <Link to="/" children={<img src='/vite.svg' />} />
  },
  {
    key: '/cloud-data',
    label: <Link to="/cloud-data" children="我的数据" />
  },
  {
    key: 'cloud-aritcle',
    label: <Link to="/cloud-aritcle" children="我的文章" />
  },
]

function App() {
  const element = useRoutes(routers)
  const [onLogin, setOnlogin] = React.useState(true)
  const [key, setKey] = React.useState<string>('')

  return (
    <>
      {onLogin ? (
        <Layout className="App">
          <Header>
            <Menu selectedKeys={[key]} onClick={({ key }) => setKey(key)} mode='horizontal' items={menuItems} />
          </Header>
          <Layout>
            {element}
          </Layout>
        </Layout>
      ) : <LoginStack />}
    </>

  )
}

export default App
