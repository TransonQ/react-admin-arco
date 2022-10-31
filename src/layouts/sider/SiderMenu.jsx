import { Menu } from '@arco-design/web-react'
import { IconCalendar, IconHome } from '@arco-design/web-react/icon'
import PropTypes from 'prop-types'

SiderMenu.propTypes = {
  collapsed: PropTypes.bool,
}

export function SiderMenu({ collapsed }) {
  return (
    <Menu collapse={collapsed}>
      <Menu.Item key="/">
        <IconHome />
        Home
      </Menu.Item>
      <Menu.Item key="/influencer">
        <IconCalendar />
        Guarden
      </Menu.Item>
      <Menu.SubMenu
        key="/campaign"
        title={
          <span>
            <IconCalendar />
            Forest
          </span>
        }
      >
        <Menu.Item key="/campaign">Flower</Menu.Item>
        <Menu.Item key="/campaign/2">Grass</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
