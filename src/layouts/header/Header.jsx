import Logo from '@/assets/logo.svg'
import { localeAtom } from '@/global/localeState'
import { useToggleLocalState } from '@/hooks/useToggleLocalState'
import { changeTheme } from '@/utils/changeTheme'
import { Avatar, Button, Dropdown, Menu } from '@arco-design/web-react'
import {
  IconEdit,
  IconLanguage,
  IconMoon,
  IconSun,
  IconUser,
} from '@arco-design/web-react/icon'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import styles from './Header.module.less'

export const Header = () => {
  // 多语言切换
  const [selectLanguage, setSelectLanguage] = useRecoilState(localeAtom)

  // 多语言选项列表
  const LanguageOptions = (
    <Menu
      style={{ minWidth: 80 }}
      selectedKeys={[selectLanguage]}
      onClickMenuItem={setSelectLanguage}
    >
      <Menu.Item key="en-US">English</Menu.Item>
      <Menu.Item key="zh-CN">简体中文</Menu.Item>
    </Menu>
  )
  // 主题切换
  const { active: isDarkTheme, toggle: handleThemeToggle } =
    useToggleLocalState('arco_admin_dark_theme')

  useEffect(() => {
    changeTheme(isDarkTheme)
  }, [isDarkTheme])

  // 点击用户菜单
  const userSettings = (
    <Menu style={{ minWidth: 120 }}>
      <Menu.Item key="Settings">
        <IconEdit className={styles['dropdown-icon']} />
        Settings
      </Menu.Item>
      <Menu.Item key="Log out">
        <IconUser className={styles['dropdown-icon']} />
        Log out
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo />
          <div className={styles['logo-name']}>Arco React</div>
        </div>
      </div>
      <ul className={styles.right}>
        <li>
          <Dropdown droplist={LanguageOptions} trigger="click" position="br">
            <Button shape="circle" icon={<IconLanguage />} />
          </Dropdown>
        </li>

        <li>
          <Button
            className={styles['icon-button']}
            shape="circle"
            type="secondary"
            icon={!isDarkTheme ? <IconMoon /> : <IconSun />}
            onClick={handleThemeToggle}
          />
        </li>
        <li>
          <Dropdown droplist={userSettings} trigger="click" position="bl">
            <Avatar size={32} style={{ cursor: 'pointer' }}>
              <img alt="avatar" src="https://github.com/quanscheng.png" />
            </Avatar>
          </Dropdown>
        </li>
      </ul>
    </div>
  )
}
