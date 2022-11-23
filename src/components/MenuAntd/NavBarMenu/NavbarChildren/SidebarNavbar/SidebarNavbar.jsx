import {
  EditOutlined,
  HolderOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'

import './SidebarNavbar.scss'

const SidebarNavbar = () => {
  const handleUserClick = () => {}
  const handleListUserClick = () => {}
  const handleKanbaClick = () => {}
  const handleEditorClick = () => {}
  const handleVideosClick = () => {}

  return (
    <>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={handleUserClick}>
          <HomeOutlined />
          <span> Home</span>
        </Menu.Item>
        <Menu.SubMenu key="2" title="ListUser" icon={<UnorderedListOutlined />}>
          <Menu.Item onClick={handleUserClick}>
            <UnorderedListOutlined />
            <span>ListUser_1</span>
          </Menu.Item>
          <Menu.Item>
            <UnorderedListOutlined />
            <span>ListUser_2</span>
          </Menu.Item>
          <Menu.SubMenu
            key="3"
            title="ListUser"
            icon={<UnorderedListOutlined />}>
            <Menu.Item>
              <UnorderedListOutlined />
              <span>ListUser_3</span>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>

        <Menu.Item key="4" onClick={handleKanbaClick}>
          <HolderOutlined />
          <span>Kanba</span>
        </Menu.Item>
        <Menu.Item key="5" onClick={handleEditorClick}>
          <EditOutlined />
          <span>Editor</span>
        </Menu.Item>
        <Menu.Item key="6" onClick={handleVideosClick}>
          <UserOutlined />
          <span> Project</span>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default SidebarNavbar
