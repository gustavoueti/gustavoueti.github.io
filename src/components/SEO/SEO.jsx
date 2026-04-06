import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://uetistack.dev'
const SITE_NAME = 'uetistack.dev'
const SITE_IMAGE = `${SITE_URL}/capy-icon.png`
const SITE_DESCRIPTION =
  'A data engineer writing about pipelines, data, and the things he picks up along the way.'

export default function SEO({ title, description, type = 'website', url, image, article }) {
  const metaTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
  const metaDescription = description || SITE_DESCRIPTION
  const metaUrl = url ? `${SITE_URL}${url}` : SITE_URL
  const metaImage = image || SITE_IMAGE

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={metaImage} />

      {/* Article-specific Open Graph */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD Structured Data */}
      {type === 'article' && article && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            description: metaDescription,
            datePublished: article.publishedTime,
            url: metaUrl,
            image: metaImage,
            author: {
              '@type': 'Person',
              name: 'Gustavo Ueti',
              url: `${SITE_URL}/about`,
            },
            publisher: {
              '@type': 'Person',
              name: 'Gustavo Ueti',
            },
          })}
        </script>
      )}

      {type === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: SITE_NAME,
            description: SITE_DESCRIPTION,
            url: SITE_URL,
            author: {
              '@type': 'Person',
              name: 'Gustavo Ueti',
            },
          })}
        </script>
      )}
    </Helmet>
  )
}
