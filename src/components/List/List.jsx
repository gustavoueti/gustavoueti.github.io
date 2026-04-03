import { Link } from 'react-router-dom'
import { usePosts } from '../../hooks/usePosts'
import styles from './List.module.css'

export default function List({ query, onSelect }) {
  const { posts } = usePosts()

  if (!query) return null

  const lower = query.toLowerCase()

  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lower) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(lower))
  )

  if (filtered.length === 0) return (
    <div className={styles.dropdown}>
      <p className={styles.empty}>No results for "{query}"</p>
    </div>
  )

  return (
    <div className={styles.dropdown}>
      {filtered.map((post) => (
        <Link
          key={post.slug}
          to={`/post/${post.slug}`}
          className={styles.item}
          onClick={onSelect}
        >
          {post.title}
        </Link>
      ))}
    </div>
  )
}
