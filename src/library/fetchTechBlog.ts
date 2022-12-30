import { createClient, MicroCMSQueries } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY
})

type TechBlog = {
  id: string
  createdAt: Date
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
}

type TechBlogResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: TechBlog[]
}

export const fetchTechBlogList = async (queries?: MicroCMSQueries) => {
  return await client.get<TechBlogResponse>({ endpoint: 'tech-blog', queries })
}

export const fetchTechBlog = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<TechBlog>({
    endpoint: 'tech-blog',
    contentId,
    queries
  })
}
