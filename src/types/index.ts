export type Blog = {
  id: string
  createdAt: Date
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
}

export type BlogResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Blog[]
}
