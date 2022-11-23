import { Layout } from 'antd'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HeaderNavbar from './NavbarChildren/HeaderNavbar/HeaderNavbar'
import SidebarNavbar from './NavbarChildren/SidebarNavbar/SidebarNavbar'
import './NavBarMenu.scss'

const { Sider, Content } = Layout

const NavBarMenu = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <SidebarNavbar />
      </Sider>
      <Layout className="site-layout">
        <HeaderNavbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
          Dashboard
          {/* <Routes>
            <Route path="/dasboard" element={<Home />} />
            <Route path="/project" element={<Profile />} />
            <Route path="/list-user" element={<ListUser />} />
            <Route path="/form" element={<FormInput />} />
            <Route path="/kanba" element={<Kanba />} />
            <Route path="/editor" element={<Editor />} />
          </Routes> */}
        </Content>
      </Layout>
    </Layout>
  )
}

export default NavBarMenu
