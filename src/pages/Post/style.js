import styled from 'styled-components'
import s from '@/styles/global.style'

export const PostWrap = styled.div`
  .post-container {
    display: flex;
    flex-direction: column;

    .post-cover {
      margin-bottom: var(--sim-space-xl);
      width: 100%;
      max-height: 320px;
      overflow: hidden;
      border-radius: var(--sim-radius-md);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: cover;
      }
    }

    .post-title {
      ${s.flex('flex-start', 'center')};

      width: 100%;
      line-height: 1.5;
      font-size: var(--sim-text-xl);
      color: var(--sim-title);
      font-weight: 700;
    }

    .post-info {
      ${s.flex('flex-start', 'center')};
      gap: var(--sim-space-lg);
      height: 40px;
      font-size: var(--sim-text-sm);
      color: var(--sim-text-secondary);

      .info-item {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-xs);
        height: 100%;
      }
    }

    .post-content {
      margin-bottom: var(--sim-space-lg);
      line-height: 1.8;
      font-size: var(--sim-text-md);
      color: var(--sim-text);
    }

    .post-tags {
      ${s.flex('flex-start', 'center')};
      gap: var(--sim-space-xs);
      height: 40px;

      .tag-item {
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
`
