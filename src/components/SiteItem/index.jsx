import React, { memo } from 'react'
import { SiteItemWrap } from './style'

const SiteItem = ({ link, icon, title, description }) => {
  return (
    <SiteItemWrap>
      <a href={link} target='_blank' rel='noopener noreferrer' className='site-item-container'>
        <div className='site-item-titlebar'>
          <div className='site-item-cover'>
            <img src={icon} />
          </div>
          <div className='site-item-title'>{title}</div>
        </div>
        <div className='site-item-description'>{description}</div>
      </a>
    </SiteItemWrap>
  )
}

export default memo(SiteItem)
