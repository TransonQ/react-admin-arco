import { Layout, Menu } from '@arco-design/web-react'
import { IconMenuFold, IconMenuUnfold } from '@arco-design/web-react/icon'
import { useCallback, useState } from 'react'
import { Header } from '../header/Header'
import styles from '../style/layout.module.less'

export const Main = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapse = useCallback(
    () => setCollapsed((collapsed) => !collapsed),
    []
  )

  return (
    <Layout className={styles.layout}>
      <div className={styles['layout-navbar']}>
        <Header />
      </div>
      <Layout>
        <Layout.Sider
          className={styles['layout-sider']}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          trigger={null}
          collapsible
          breakpoint="xl"
        >
          <div className={styles['menu-wrapper']}>
            <Menu collapse={collapsed}></Menu>
          </div>
          <div className={styles['collapse-btn']} onClick={toggleCollapse}>
            {collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
          </div>
        </Layout.Sider>
      </Layout>
    </Layout>
  )
}
