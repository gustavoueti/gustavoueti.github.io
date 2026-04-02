import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate'
import styles from './PostCard.module.css'

export default function PostCard({ post }) {
  const { title, date, slug, tags, excerpt } = post

  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <time dateTime={date}>{formatDate(date)}</time>
      </div>
      <Link to={`/post/${slug}`} className={styles.title}>
        {title}
      </Link>
      {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
      {tags?.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
