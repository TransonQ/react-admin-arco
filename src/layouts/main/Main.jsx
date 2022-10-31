import { LoadingPage } from '@/components/loadingPage/LoadingPage'
import { Layout } from '@arco-design/web-react'
import { IconMenuFold, IconMenuUnfold } from '@arco-design/web-react/icon'
import { Suspense, useCallback, useMemo, useState } from 'react'
import { Header } from '../header/Header'
import { SiderMenu } from '../sider/SiderMenu'
import styles from './layout.module.less'

const headerNavHeight = 60
const siderNavWidth = 200
const siderCollapsedWidth = 48

export const Main = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapse = useCallback(
    () => setCollapsed((collapsed) => !collapsed),
    []
  )
  const contentPadding = useMemo(
    () => ({
      paddingTop: headerNavHeight,
      paddingLeft: collapsed ? siderCollapsedWidth : siderNavWidth,
    }),
    [collapsed]
  )

  return (
    <Suspense fallback={<LoadingPage />}>
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
            width={siderNavWidth}
            breakpoint="xl"
            style={{ paddingTop: headerNavHeight }}
          >
            <div className={styles['menu-wrapper']}>
              <SiderMenu collapsed={collapsed} />
            </div>
            <div className={styles['collapse-btn']} onClick={toggleCollapse}>
              {collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
            </div>
          </Layout.Sider>
          <Layout className={styles['layout-content']} style={contentPadding}>
            <Layout.Content></Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    </Suspense>
  )
}
