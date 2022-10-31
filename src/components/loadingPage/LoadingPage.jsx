import { Spin } from '@arco-design/web-react'
import { useLocalStorageState } from 'ahooks'
import cls from 'classnames'
import styles from './styles.module.less'

export const LoadingPage = () => {
  const [isDarkTheme] = useLocalStorageState('arco_admin_dark_theme')

  return (
    <div
      className={cls(
        styles.loadingPage,
        isDarkTheme ? styles.dark : styles.light
      )}
    >
      <Spin dot size={10} />
    </div>
  )
}
