import { createClient, MicroCMSQueries } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY
})

type DailyLife = {
  id: string
  createdAt: Date
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
}

type DailyLifeResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: DailyLife[]
}

export const fetchDailyLifeBlogList = async (queries?: MicroCMSQueries) => {
  return await client.get<DailyLifeResponse>({ endpoint: 'daily-life-blog', queries })
}

export const fetchDailyLifeBlog = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<DailyLife>({
    endpoint: 'daily-life-blog',
    contentId,
    queries
  })
}
