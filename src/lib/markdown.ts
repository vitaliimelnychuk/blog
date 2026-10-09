import fs from 'fs'
import { join } from 'path'
import type { ReactElement } from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'

export interface MarkdownItemMeta {
  date: Date
  title: string
  description: string
}
export type ArticleMarkdownItem = {
  url: string
  slug: string
  content: ReactElement
  meta: MarkdownItemMeta
}

export enum MarkdownDocumentTypeEnum {
  article = 'article',
  book = 'book',
}

const getDirectoryPath = (documentType: MarkdownDocumentTypeEnum): string =>
  join(process.cwd(), 'content', documentType)

export const getDocumentSlugs = (
  documentType: MarkdownDocumentTypeEnum
): string[] => {
  return fs.readdirSync(getDirectoryPath(documentType))
}

function getFileSource(documentType: MarkdownDocumentTypeEnum, slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(getDirectoryPath(documentType), `${realSlug}.mdx`)
  const source = fs.readFileSync(fullPath, 'utf8')
  return { source, realSlug }
}

export async function getArticleBySlug(
  slug: string
): Promise<ArticleMarkdownItem> {
  const { realSlug, source } = getFileSource(
    MarkdownDocumentTypeEnum.article,
    slug
  )

  const { content, frontmatter } = await compileMDX<{
    date?: string
    title?: string
    description?: string
  }>({
    source,
    options: {
      parseFrontmatter: true,
    },
  })

  return {
    meta: {
      date: frontmatter?.date ? new Date(frontmatter.date) : new Date(),
      title: frontmatter?.title || '',
      description: frontmatter?.description || '',
    },
    slug: realSlug,
    url: `/${MarkdownDocumentTypeEnum.article}s/${realSlug}`,
    content: content,
  }
}

export async function getAllArticles() {
  const slugs = getDocumentSlugs(MarkdownDocumentTypeEnum.article)

  const articles = await Promise.all(
    slugs.map((slug) => getArticleBySlug(slug))
  )

  return articles.sort((doc1, doc2) =>
    doc1.meta.date > doc2.meta.date ? -1 : 1
  )
}
