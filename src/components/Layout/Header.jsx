import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  RiMastodonLine,
  RiHome3Line,
  RiPagesLine,
  RiCodeBoxLine,
  RiLink,
  RiSunLine,
  RiMoonLine,
  RiArrowRightSLine
} from 'react-icons/ri'
import { useTheme, useAuthorQuery } from '@/hooks'
import { HeaderWrap } from './style'

const Header = ({ hideSidebar, setHideSidebar }) => {
  const { theme, toggleTheme } = useTheme()
  const handleToggleSidebar = () => {
    setHideSidebar(!hideSidebar)
  }

  const { data: authorData } = useAuthorQuery()

  return (
    <HeaderWrap>
      <div className='toggle-btn' onClick={handleToggleSidebar}></div>
      <div className='header-container'>
        <div className='author'>
          <div className='author-avatar'>
            <img src={authorData?.author?.avatar?.url} />
          </div>
          <div className='author-username'>{authorData?.author?.username}</div>
          <div className='author-bio'>{authorData?.author?.bio}</div>
        </div>

        <div className='navs'>
          <div className='navs-title'>
            <span>NAVIGATE</span>
          </div>
          <div className='navs-list'>
            <NavLink to='/home' className='nav-item'>
              <RiHome3Line />
              Home
            </NavLink>
            <NavLink to='/posts' className='nav-item'>
              <RiPagesLine />
              Posts
            </NavLink>
            <NavLink to='/snippets' className='nav-item'>
              <RiCodeBoxLine />
              Snippets
            </NavLink>
            <NavLink to='/sites' className='nav-item'>
              <RiLink />
              Sites
            </NavLink>
          </div>
        </div>

        <div className='footer'>
          <div className='color-mode'>
            <div className='color-mode-icon' onClick={toggleTheme}>
              {theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
            </div>
          </div>
          <div className='copyright'>© 2022 Sim.z</div>
        </div>
      </div>
    </HeaderWrap>
  )
}

export default Header
