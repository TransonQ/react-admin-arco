import { Layout } from '@arco-design/web-react'
import { IconMenuFold, IconMenuUnfold } from '@arco-design/web-react/icon'
import { useCallback, useState } from 'react'
import { Header } from '../header/Header'
import { SiderMenu } from '../sider/SiderMenu'
import styles from './layout.module.less'

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
          style={{ paddingTop: 60 }} // 顶部栏的高度
        >
          <div className={styles['menu-wrapper']}>
            <SiderMenu collapsed={collapsed} />
          </div>
          <div className={styles['collapse-btn']} onClick={toggleCollapse}>
            {collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
          </div>
        </Layout.Sider>
      </Layout>
    </Layout>
  )
}
