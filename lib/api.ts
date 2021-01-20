import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface IMarkdownArticle {
  slug: string
  content: string
  date: Date
  url: string
  title: string
}

export interface IDocumentItem {
  slug: string
  content: string
  date: Date
}

export type EDocumentType = 'article'

const getDirectoryPath = (documentType: EDocumentType) =>
  join(process.cwd(), 'documents', documentType)

export function getDocumentSlugs(documentType: EDocumentType) {
  return fs.readdirSync(getDirectoryPath(documentType))
}

export const getDocumentBySlug = <T extends IDocumentItem>(
  documentType: EDocumentType,
  slug: string
): T => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(getDirectoryPath(documentType), `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    content: content,
    ...data,
  } as T
}

export const getAllDocuments = <T extends IDocumentItem>(
  documentType: EDocumentType
): T[] => {
  const slugs = getDocumentSlugs(documentType)

  const documents = slugs
    .map((slug) => getDocumentBySlug<T>(documentType, slug))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    )

  return documents
}
