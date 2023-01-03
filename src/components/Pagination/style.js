import styled from 'styled-components'
import s from '@/styles/global.style'

export const PaginationWrap = styled.div`
  ${s.flex('space-between', 'center')};
  margin-top: var(--sim-space-md);
  width: 100%;
  height: 40px;

  .pagination-info {
    flex: 1;
    ${s.flex('flex-start', 'center')};
    height: 100%;
    font-size: var(--sim-text-sm);
    color: var(--sim-text-secondary);
  }

  .pagination-btns {
    flex: 0 0 auto;
    ${s.flex('flex-end', 'center')};
    gap: var(--sim-space-sm);
    height: 100%;

    .pagination-btn {
      ${s.flex('center', 'center')};
      padding: 8px 16px;
      border: 0;
      border-radius: var(--sim-radius-sm);
      background-color: var(--sim-blue-500);
      font-size: var(--sim-text-sm);
      color: var(--sim-white);
      cursor: pointer;

      &:hover {
        background-color: var(--sim-blue-600);
      }

      &:disabled {
        background-color: var(--sim-blue-300);
        cursor: default;
      }
    }
  }
`
