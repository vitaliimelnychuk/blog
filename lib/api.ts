import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface IMarkdownArticle {
  slug: string
  content: string
  date: Date
  url: string
  title: string
  description: string
}

export interface IMarkdownBook {
  slug: string
  content: string
  date: Date
  url: string
  amazonUrl: string
  title: string
  description: string
  author: string
  coverImg: string
}

export interface IDocumentItem {
  slug: string
  url: string
  content: string
  date: Date
}

export type EDocumentType = 'article' | 'book'

const getDirectoryPath = (documentType: EDocumentType): string =>
  join(process.cwd(), 'documents', documentType)

export const getDocumentSlugs = (documentType: EDocumentType): string[] => {
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
    url: `/${documentType}s/${realSlug}`,
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
    .sort((doc1, doc2) => (new Date(doc1.date) > new Date(doc2.date) ? -1 : 1))

  console.log(documents)
  return documents
}
