import React, { useState } from 'react'
import cx from 'clsx'
import Header from './Header'
import { LayoutWrap } from './style'

const Layout = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false)
  return (
    <LayoutWrap className={cx({ hide: hideSidebar })}>
      <div className='layout-header'>
        <Header hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      </div>
      <div className='layout-main'>{children}</div>
    </LayoutWrap>
  )
}

export default Layout
