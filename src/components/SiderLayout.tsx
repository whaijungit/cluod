import './layout.less'
import React from 'react'
import { Layout, Menu, Spin } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'

const { Sider, Content } = Layout

interface ISiderLayoutProps {
  loading: boolean
  menus?: ItemType[]
  children: React.ReactNode
  onClickMenuItem?: (key: string) => void
}

const SiderLayout: React.FC<ISiderLayoutProps> = ({ children, menus, loading, onClickMenuItem }) => {
  const [collapsed, setCollapsed] = React.useState(true)
  const handleClick = async (key: string) => {
    onClickMenuItem && onClickMenuItem(key)
  }
  return (
    <>
      <Sider collapsed={collapsed} collapsible onCollapse={setCollapsed} theme='light'>
        <Menu items={menus} onClick={({ key }) => handleClick(key)} />
      </Sider>
      <Content className={loading ? 'loading' : ''}>
        {loading ? <Spin size='large' /> : (
          <div className='content'>
            {children}
          </div>
        )}

      </Content>
    </>
  )
}

SiderLayout.defaultProps = {
  menus: []
}

export default SiderLayout;
