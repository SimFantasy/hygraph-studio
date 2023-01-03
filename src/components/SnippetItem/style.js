import styled from 'styled-components'
import s from '@/styles/global.style'

export const SnippetItemWrap = styled.div`
  .snippet-item-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: var(--sim-space-xs);
    width: 100%;

    .snippet-item-category {
      ${s.flex('flex-start', 'center')};
      gap: var(--sim-space-xs);
      height: 24px;

      .category-icon {
        flex: 0 0 auto;
        ${s.flex('center', 'center')};
        width: 24px;
        height: 100%;
        font-size: var(--sim-text-lg);
        color: var(--sim-text-secondary);
      }

      .category-text {
        flex: 1;
        ${s.flex('flex-start', 'center')};
        height: 100%;
        font-size: var(--sim-text-sm);
        color: var(--sim-text-secondary);
      }
    }

    .snippet-item-title {
      ${s.flex('flex-start', 'center')};
      ${s.ellipsis(2)};
      line-height: 1.5;
      font-size: var(--sim-text-md);
      color: var(--sim-title);
    }

    .snippet-item-tags {
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
`
