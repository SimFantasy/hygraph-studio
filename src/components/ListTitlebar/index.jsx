import React, { memo, useCallback } from 'react'
import cx from 'clsx'
import { ListTitlebarWrap } from './style'

const ListTitlebar = ({ title, navs, currentNav, setCurrentNav }) => {
  const handleCurrentNav = useCallback(slug => {
    setCurrentNav(slug)
  })
  return (
    <ListTitlebarWrap>
      <div className='title'>{title}</div>
      <div className='list-navs'>
        <div
          className={cx('nav-item', { active: currentNav === '' })}
          onClick={() => handleCurrentNav('')}
        >
          All
        </div>
        {navs?.map(nav => (
          <div
            className={cx('nav-item', { active: currentNav === nav.slug })}
            key={nav.slug}
            onClick={() => handleCurrentNav(nav.slug)}
          >
            {nav.name}
          </div>
        ))}
      </div>
    </ListTitlebarWrap>
  )
}

export default memo(ListTitlebar)
