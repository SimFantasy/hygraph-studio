import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import {
  SiSvelte,
  SiReact,
  SiVuedotjs,
  SiAngularjs,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiApollographql,
  SiGraphql,
  SiGoland,
  SiMarkdown,
  SiTailwindcss,
  SiWindicss,
  SiCss3,
  SiSass,
  SiLess,
  SiGit,
  SiVite,
  SiHtml5
} from 'react-icons/si'

dayjs.extend(relativeTime)

export const dateFormat = date => dayjs(date).format('YYYY-MM-DD')
export const fullDateFormat = date => dayjs(date).format('YYYY-MM-DD HH:mm:ss')
export const dateNowFormat = date => dayjs(date).locale('zh-cn').fromNow()

export const snippetIcon = type => {
  switch (type) {
    case 'react':
      return <SiReact />
    case 'svelte':
      return <SiSvelte />
    case 'vue':
      return <SiVuedotjs />
    case 'angular':
      return <SiAngularjs />
    case 'javascript':
      return <SiJavascript />
    case 'typescript':
      return <SiTypescript />
    case 'node':
      return <SiNodedotjs />
    case 'apollo':
      return <SiApollographql />
    case 'graphql':
      return <SiGraphql />
    case 'go':
      return <SiGoland />
    case 'markdown':
      return <SiMarkdown />
    case 'tailwind':
      return <SiTailwindcss />
    case 'windi':
      return <SiWindicss />
    case 'css':
      return <SiCss3 />
    case 'sass':
      return <SiSass />
    case 'less':
      return <SiLess />
    case 'git':
      return <SiGit />
    case 'vite':
      return <SiVite />
    case 'html':
      return <SiHtml5 />
    default:
      return ''
  }
}
