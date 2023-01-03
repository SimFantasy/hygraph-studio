import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import s from '@/styles/global.style'

const RootStyle = createGlobalStyle`
  ${normalize()};

  :root[data-color-mode = 'light']{
    --sim-primary: #ef9b7e;
    --sim-title: #212121;
    --sim-text: #424242;
    --sim-text-secondary: #757575;
    --sim-text-disabled: #9e9e9e;

    --sim-bg: #ffffff;
    --sim-bg-secondary: #fafbfb;

    --sim-white: #ffffff;
    --sim-black: #000000;

    --sim-border: #e0e0e0;
    --sim-divider: #e5e8eb;

    --sim-red-50: #fefaf9;
    --sim-red-100: #fdf5f2;
    --sim-red-200: #fbe6df;
    --sim-red-300: #f9d7cb;
    --sim-red-400: #f4b9a5;
    --sim-red-500: #ef9b7e;
    --sim-red-600: #d78c71;
    --sim-red-700: #b3745f;
    --sim-red-800: #8f5d4c;
    --sim-red-900: #754c3e;

    --sim-blue-50: #f7fcfd;
    --sim-blue-100: #eef9fb;
    --sim-blue-200: #d5f1f4;
    --sim-blue-300: #bbe8ee;
    --sim-blue-400: #88d7e1;
    --sim-blue-500: #55c6d4;
    --sim-blue-600: #4db2bf;
    --sim-blue-700: #40959f;
    --sim-blue-800: #33777f;
    --sim-blue-900: #2a6168;

    --sim-gray-50: #f8f8f8;
    --sim-gray-100: #f1f1f1;
    --sim-gray-200: #dddddd;
    --sim-gray-300: #c8c8c8;
    --sim-gray-400: #9e9e9e;
    --sim-gray-500: #757575;
    --sim-gray-600: #696969;
    --sim-gray-700: #585858;
    --sim-gray-800: #464646;
    --sim-gray-900: #393939;
  }

  :root[data-color-mode='dark']{
    --sim-primary: #f0a084;
    --sim-title: #ffffff;
    --sim-text: #e6e5e8;
    --sim-text-secondary: #aeb0ba;
    --sim-text-disabled: #75767b;

    --sim-bg: #292c33;
    --sim-bg-secondary: #212329;

    --sim-white: #34373d;
    --sim-black: #ffffff;

    --sim-border: #4d4f55;
    --sim-divider: #343b44;

    --sim-red-50: #291e1c;
    --sim-red-100: #412d27;
    --sim-red-200: #563d34;
    --sim-red-300: #775144;
    --sim-red-400: #a26c59;
    --sim-red-500: #ce876e;
    --sim-red-600: #e5b29f;
    --sim-red-700: #f3dbcf;
    --sim-red-800: #f8eee9;
    --sim-red-900: #faf1ec;

    --sim-blue-50: #172325;
    --sim-blue-100: #1e363a;
    --sim-blue-200: #28494e;
    --sim-blue-300: #31646a;
    --sim-blue-400: #3e8891;
    --sim-blue-500: #4babb7;
    --sim-blue-600: #73c4cc;
    --sim-blue-700: #a3dfe2;
    --sim-blue-800: #d6f2f3;
    --sim-blue-900: #ecfafa;

    --sim-gray-50: #171717;
    --sim-gray-100: #232323;
    --sim-gray-200: #313131;
    --sim-gray-300: #404040;
    --sim-gray-400: #535353;
    --sim-gray-500: #666666;
    --sim-gray-600: #777777;
    --sim-gray-700: #898989;
    --sim-gray-800: #989898;
    --sim-gray-900: #a5a5a5;
  }

  :root {
    --sim-radius-xs: 2px;
    --sim-radius-sm: 4px;
    --sim-radius: 6px;
    --sim-radius-md: 6px;
    --sim-radius-lg: 8px;
    --sim-radius-xl: 12px;
    --sim-radius-2xl: 16px;
    --sim-radius-full: 100px;
    --sim-rounded: 50%;

    --sim-space-2xs: 4px;
    --sim-space-xs: 8px;
    --sim-space-sm: 16px;
    --sim-space-md: 24px;
    --sim-space-lg: 32px;
    --sim-space-xl: 48px;
    --sim-space-2xl: 56px;
    --sim-space-3xl: 64px;
    --sim-space-4xl: 72px;
    --sim-space-5xl: 80px;

    --sim-text-xs: 12px;
    --sim-text-sm: 14px;
    --sim-text-md: 16px;
    --sim-text-lg: 18px;
    --sim-text-xl: 20px;
    --sim-text-2xl: 24px;
    --sim-text-3xl: 28px;
    --sim-text-4xl: 32px;

    --sim-font-family: 'Nunito, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

    --sim-sidebar-width: 240px;
  }

   * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  ${s.mediaQuery({
    fontSize: ['100%', '87.5%', '62.5%']
  })}

  body {
    font-family: var(--sim-font-family);
    font-weight: 400;
    line-height: 1.5;
    height: 100%;
    background-color: var(--sim-bg-secondary);
    color: var(--sim-text);
  }

  a {
    text-decoration: none;
    color: var(--sim-text);

    &:hover {
      color: var(--sim-title);
    }
  }

  button, input {
    outline:0;
  }

  ul {
    list-style-type: none;
  }

  img {
    max-width: 100%;
  }

  iframe {
    border: 0;
  }


  .container {
    margin: 0 auto;
    ${s.mediaQuery({
      width: s['page-width']
    })};
  }

  .page-block {
    margin-bottom: var(--sim-space-2xl);
  }

  .page-card {
    padding: var(--sim-space-md);
    border-radius: var(--sim-radius-lg);
    background-color: var(--sim-bg);
    /* box-shadow: rgb(145 158 171 / 12%) 0px 12px 24px -4px; */
    box-shadow: rgb(90 114 123 / 11%) 0px 4px 24px 0px;
  }

  .divider-full {
    margin: var(--sim-space-md) auto;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid var(--sim-divider);
  }

  .divider {
    margin: var(--sim-space-xl) auto;
    width: 40%;
    height: 2px;
    background-color: var(--sim-divider);
    border-radius: var(--sim-radius-full);
  }

  .wmde-markdown {
    background-color: transparent;
  }
`

export default RootStyle
