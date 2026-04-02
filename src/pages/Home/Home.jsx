import { usePosts } from '../../hooks/usePosts'
import PostCard from '../../components/PostCard/PostCard.jsx'
import capyNotebook from '../../assets/capybara-notebook-stars.png'
import styles from './Home.module.css'

export default function Home() {
  const { posts, loading } = usePosts()

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>uetistack.dev</h1>
            <p className={styles.heroSub}>
              A data engineer writing about pipelines, data, and the things
              he picks up along the way — including how to make this blog work.
            </p>
          </div>
          <img
            src={capyNotebook}
            alt="Capivara estudando com um notebook sob as estrelas"
            className={styles.heroImage}
          />
        </div>
      </section>

      <div className="container">
        <h2 className={styles.heading}>Posts</h2>
        {loading && <p className={styles.empty}>Loading...</p>}
        {!loading && posts.length === 0 && (
          <p className={styles.empty}>No posts published yet.</p>
        )}
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  )
}
