import styled, { keyframes } from 'styled-components'
import s from '@/styles/global.style'
import sidebarBgImage from '@/assets/illustration_docs.svg'

const rotate = keyframes`
  form {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LayoutWrap = styled.div`
  width: 100vw;
  height: 100%;

  &.hide {
    .layout-header {
      transform: translateX(-240px);

      .toggle-btn {
        right: -12px;
      }
    }
    .layout-main {
      padding: var(--sim-space-md);
    }
  }

  .layout-header {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    flex: 0 0 auto;
    height: 100%;
    background: var(--sim-bg) url(${sidebarBgImage}) no-repeat center 96%;
    box-shadow: 0px 7px 30px 0px rgb(113 122 131 / 11%);
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transform: none;

    .toggle-btn {
      position: absolute;
      top: 50%;
      right: 4px;
      width: 4px;
      height: 48px;
      transform: translateY(-50%);
      background-color: var(--sim-red-300);
      border-radius: var(--sim-radius-full);
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        width: 6px;
        background-color: var(--sim-red-500);
      }
    }
  }

  .layout-main {
    box-sizing: border-box;
    padding: var(--sim-space-md) var(--sim-space-md) var(--sim-space-md)
      calc(var(--sim-sidebar-width) + var(--sim-space-md));
    width: 100%;
    height: 100%;
  }
`

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100%;
  .header-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 var(--sim-space-md);
    width: var(--sim-sidebar-width);
    height: 100%;

    .author {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: var(--sim-space-md) auto var(--sim-space-2xl);

      .author-avatar {
        ${s.flex('center', 'center')};
        margin-bottom: var(--sim-space-xs);
        padding: var(--sim-space-xs);
        width: 72px;
        height: 72px;
        border-radius: var(--sim-rounded);
        background-color: var(--sim-red-200);
        overflow: hidden;

        &:hover {
          img {
            animation: ${rotate} 1s linear infinite;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: var(--sim-rounded);
          cursor: pointer;
        }
      }

      .author-username {
        font-size: var(--sim-text-xl);
        color: var(--sim-title);
        font-weight: 700;
      }

      .author-bio {
        font-size: var(--sim-text-sm);
        color: var(--sim-text-secondary);
      }
    }

    .navs {
      display: flex;
      flex-direction: column;
      gap: var(--sim-space-xs);

      .navs-title {
        ${s.flex('flex-start', 'center')};
        width: 100%;
        height: 24px;
        font-size: var(--sim-text-sm);
        color: var(--sim-blue-400);
        span {
          transform: scale(0.9);
          font-weight: 700;
        }
      }

      .navs-list {
        display: flex;
        flex-direction: column;
        gap: var(--sim-space-xs);

        .nav-item {
          ${s.flex('flex-start', 'center')};
          gap: var(--sim-space-xs);
          padding: 0 var(--sim-space-sm);
          height: 48px;
          border-radius: var(--sim-radius);
          font-size: var(--sim-text-md);
          color: var(--sim-text);

          svg {
            font-size: var(--sim-text-lg);
            color: var(--sim-blue-800);
          }

          &:hover {
            background-color: var(--sim-blue-100);
            color: var(--sim-title);
          }

          &.active {
            background-color: var(--sim-blue-500);
            color: var(--sim-white);
            svg {
              color: var(--sim-white);
            }
          }
        }
      }
    }

    .footer {
      position: absolute;
      bottom: var(--sim-space-md);
      display: flex;
      flex-direction: column;
      gap: var(--sim-space-xs);

      font-size: var(--sim-text-sm);
      color: var(--sim-gray-400);

      .color-mode {
        ${s.flex('flex-start', 'center')};
        height: 24px;

        .color-mode-icon {
          ${s.flex('center', 'center')};
          width: 24px;
          height: 100%;
          font-size: var(--sim-text-sm);
          cursor: pointer;
        }
      }
    }
  }
`
