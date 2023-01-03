import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)

export const dateFormat = date => dayjs(date).format('YYYY-MM-DD')
export const fullDateFormat = date => dayjs(date).format('YYYY-MM-DD HH:mm:ss')
export const dateNowFormat = date => dayjs(date).locale('zh-cn').fromNow()
