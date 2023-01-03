import styled from 'styled-components'
import s from '@/styles/global.style'

export const PostItemWrap = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: var(--sim-space-md);
    padding-bottom: var(--sim-space-md);
    border-bottom: 1px solid var(--sim-divider);
  }

  .post-item-container {
    ${s.flex('space-between', 'center')};
    gap: var(--sim-space-sm);
    width: 100%;

    .post-item-cover {
      width: 240px;
      height: 120px;
      border-radius: var(--sim-radius);
      border: 1px solid var(--sim-border);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .post-item-mainview {
      display: flex;
      flex-direction: column;
      .post-item-title {
        ${s.flex('flex-start', 'center')};
        width: auto;
        line-height: 1.5;
        font-size: var(--sim-text-lg);
        color: var(--sim-title);

        &:hover {
          color: var(--sim-text);
        }
      }

      .post-item-info {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-sm);
        margin-bottom: var(--sim-space-xs);
        height: 32px;
        font-size: var(--sim-text-sm);
        color: var(--sim-text-secondary);

        .info-item {
          ${s.flex('flex-start', 'center')};
          gap: var(--sim-space-xs);
          height: 100%;

          .tags {
            ${s.flex('flex-start', 'center')};
            gap: var(--sim-space-xs);

            .tag-btn {
              ${s.flex('center', 'center')};
              padding: 2px 6px;
              border: 0;
              border-radius: var(--sim-radius-sm);
              background-color: var(--sim-blue-200);
              font-size: var(--sim-text-xs);
              color: var(--sim-text-secondary);
            }
          }
        }
      }

      .post-item-description {
        ${s.ellipsis(2)};
        line-height: 1.5;
        font-size: var(--sim-text-md);
        color: var(--sim-text);
      }
    }
  }
`
