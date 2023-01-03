import styled from 'styled-components'
import s from '@/styles/global.style'

export const ListTitlebarWrap = styled.div`
  ${s.flex('space-between', 'center')};
  margin-bottom: var(--sim-space-md);
  width: 100%;
  height: 48px;

  .title {
    flex: 0 0 auto;
    ${s.flex('flex-start', 'center')};
    height: 100%;

    font-size: var(--sim-text-xl);
    color: var(--sim-title);
    font-weight: 700;
  }

  .list-navs {
    flex: 1;
    ${s.flex('flex-end', 'center')};
    gap: var(--sim-space-sm);
    height: 100%;

    .nav-item {
      font-size: var(--sim-text-md);
      color: var(--sim-text-secondary);
      cursor: pointer;

      &:hover,
      &.active {
        color: var(--sim-text);
      }

      &.active {
        font-weight: 700;
      }
    }
  }
`
