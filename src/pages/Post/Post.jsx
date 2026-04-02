import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { usePost } from '../../hooks/usePosts'
import { formatDate } from '../../utils/formatDate'
import styles from './Post.module.css'

export default function Post() {
  const { slug } = useParams()
  const { post, loading } = usePost(slug)

  if (loading) {
    return (
      <div className="container">
        <p style={{ color: 'var(--color-text-muted)' }}>Loading post...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container">
        <p style={{ color: 'var(--color-text-muted)' }}>Post not found.</p>
        <Link to="/" className={styles.back}>
          ← Back
        </Link>
      </div>
    )
  }

  return (
    <div className="container">
      <Link to="/" className={styles.back}>
        ← All posts
      </Link>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.tags?.length > 0 && (
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className={styles.prose}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
