import { usePosts } from '../hooks/usePosts'
import PostCard from '../components/PostCard.jsx'
import capybaraWorker from '../assets/capybara-worker.png'
import styles from './Home.module.css'

export default function Home() {
  const { posts, loading } = usePosts()

  return (
    <div className="container">
      <div className={styles.wip}>
        <img src={capybaraWorker} alt="Em construção" />
        <p className={styles.wipTitle}>Under construction</p>
        <p className={styles.wipSub}>Check back soon for new posts!</p>
      </div>

      <h1 className={styles.heading}>Posts</h1>
      {loading && <p className={styles.empty}>Loading...</p>}
      {!loading && posts.length === 0 && (
        <p className={styles.empty}>No posts published yet.</p>
      )}
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
