export type Blog = {
  id: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  revisedAt: Date
  title: string
  content: string
}

export type BlogResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Blog[]
}

export type breadcrumb = {
  title: string
  path: string
}
