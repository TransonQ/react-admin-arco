import { Menu } from '@arco-design/web-react'
import {
  IconCalendar,
  IconFormula,
  IconHome,
} from '@arco-design/web-react/icon'
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
        Influencer
      </Menu.Item>
      <Menu.SubMenu
        key="/campaign"
        title={
          <span>
            <IconCalendar />
            Campaign
          </span>
        }
      >
        <Menu.Item key="/campaign">Campaign</Menu.Item>
        <Menu.Item key="/campaign/2">not found</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="/analytics">
        <IconFormula />
        Analytics
      </Menu.Item>
    </Menu>
  )
}
