import React from 'react'
import { Metadata } from 'next'

// Components
import Intro from './Intro'
import MainContent from './MainContent'

// Utils
import { fetchArticles } from '@/app/utils/fetchArticles'

interface PageProps{
    params: {url: string}
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  
  const articles = await fetchArticles()

    // Find the current article
    const currentArticle:any = articles.find(entry => entry.fields.articleUrl === params.url)
  
  // Ensure the image URL is absolute
  const imageUrl = currentArticle?.fields.articleMainImage.fields.file.url;
  const absoluteImageUrl = imageUrl.startsWith("http")
    ? imageUrl
    : `https:${imageUrl}`;

  return {
    title: `${currentArticle.fields.articleTitle}`,
    description: `${currentArticle.fields.introductoryText.content[0].content[0].value.slice(0, 70)}`,
    openGraph: {
      title: `${currentArticle.fields.articleTitle}`,
      description: `${currentArticle.fields.introductoryText.content[0].content[0].value.slice(0, 70)}`,
      url: absoluteImageUrl,
      type: 'website',
      images: [
        {
          url: absoluteImageUrl
        }
      ]
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export default async function Article({ params }: any) {
    const articles = await fetchArticles()

    // Find the current article
    const currentArticle:any = articles.find(entry => entry.fields.articleUrl === params.url)
  
    return (
    // <div>Article {currentArticle.fields.articleTitle}</div>
    <main>
      <Intro article={currentArticle} />
      <MainContent article={currentArticle} />
    </main>
  )
}
