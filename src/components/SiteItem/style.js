import styled from 'styled-components'
import s from '@/styles/global.style'

export const SiteItemWrap = styled.div`
  .site-item-container {
    display: flex;
    flex-direction: column;
    gap: var(--sim-space-xs);

    .site-item-titlebar {
      flex: 0 0 auto;
      ${s.flex('space-between', 'center')};
      gap: var(--sim-space-sm);
      .site-item-cover {
        flex: 0 0 auto;
        ${s.flex('center', 'center')};
        width: 32px;
        height: 32px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .site-item-title {
        flex: 1;
        font-size: var(--sim-text-md);
        color: var(--sim-title);
        font-weight: 700;
      }
    }

    .site-item-description {
      ${s.ellipsis(2)};
      font-size: var(--sim-text-sm);
      color: var(--sim-text);
    }
  }
`
