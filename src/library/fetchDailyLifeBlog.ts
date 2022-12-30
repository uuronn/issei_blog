import type { MicroCMSQueries } from 'microcms-js-sdk'
import { microcmsSDK } from '../infra'
import type { Blog, BlogResponse } from '../types'

export const fetchDailyLifeBlogList = async (queries?: MicroCMSQueries) => {
  return await microcmsSDK.get<BlogResponse>({ endpoint: 'daily-life-blog', queries })
}

export const fetchDailyLifeBlog = async (contentId: string, queries?: MicroCMSQueries) => {
  return await microcmsSDK.getListDetail<Blog>({
    endpoint: 'daily-life-blog',
    contentId,
    queries
  })
}
