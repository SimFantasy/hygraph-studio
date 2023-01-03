import React, { memo } from 'react'
import { BeatLoader } from 'react-spinners'
import { SpinWrap } from './style'

const Spin = () => {
  return (
    <SpinWrap>
      <BeatLoader color='#4babb7' size={8} />
    </SpinWrap>
  )
}

export default memo(Spin)
