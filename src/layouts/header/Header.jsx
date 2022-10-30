import Logo from '@/assets/logo.svg'
import styles from './Header.module.less'

export const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo />
          <div className={styles['logo-name']}>Arco Pro</div>
        </div>
      </div>
      <ul className={styles.right}>
        {/* <li>
          <Select
            triggerElement={<IconButton icon={<IconLanguage />} />}
            options={[
              { label: '中文', value: 'zh-CN' },
              { label: 'English', value: 'en-US' },
            ]}
            value={lang}
            triggerProps={{
              autoAlignPopupWidth: false,
              autoAlignPopupMinWidth: true,
              position: 'br',
            }}
            trigger="hover"
          />
        </li>

        <li>
          <Tooltip
            content={
              theme === 'light'
                ? t['settings.navbar.theme.toDark']
                : t['settings.navbar.theme.toLight']
            }
          >
            <IconButton
              icon={theme !== 'dark' ? <IconMoonFill /> : <IconSunFill />}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          </Tooltip>
        </li>
        <li>
          <Dropdown droplist={droplist} position="br" disabled={userLoading}>
            <Avatar size={32} style={{ cursor: 'pointer' }}>
              {userLoading ? (
                <IconLoading />
              ) : (
                <img alt="avatar" src={userInfo.avatar} />
              )}
            </Avatar>
          </Dropdown>
        </li> */}
      </ul>
    </div>
  )
}
