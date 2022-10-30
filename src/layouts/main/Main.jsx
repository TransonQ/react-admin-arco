import { Button, Layout } from '@arco-design/web-react'
import { Header } from '../header/Header'
import styles from '../style/layout.module.less'

export const Main = () => {
  return (
    <Layout className={styles.layout}>
      <div className={styles['layout-navbar']}>
        <Header />
      </div>
      <Button>123</Button>
    </Layout>
  )
}
