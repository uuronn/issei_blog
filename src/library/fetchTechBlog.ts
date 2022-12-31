import type { MicroCMSQueries } from 'microcms-js-sdk'
import { microcmsSDK } from '~/infra'
import type { Blog, BlogResponse } from '~/types'

export const fetchTechBlogList = async (queries?: MicroCMSQueries) => {
  return await microcmsSDK.get<BlogResponse>({ endpoint: 'tech-blog', queries })
}

export const fetchTechBlog = async (contentId: string, queries?: MicroCMSQueries) => {
  return await microcmsSDK.getListDetail<Blog>({
    endpoint: 'tech-blog',
    contentId,
    queries
  })
}
