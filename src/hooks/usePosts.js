import { useState, useEffect } from 'react'
import matter from 'gray-matter'

const rawFiles = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' })

function parsePost(rawContent) {
  const { data, content } = matter(rawContent)
  return { ...data, content }
}

async function loadAllPosts() {
  const entries = await Promise.all(
    Object.entries(rawFiles).map(async ([, loader]) => {
      const raw = await loader()
      return parsePost(raw)
    })
  )

  return entries
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

async function loadPostBySlug(slug) {
  for (const [, loader] of Object.entries(rawFiles)) {
    const raw = await loader()
    const post = parsePost(raw)
    if (post.slug === slug) return post
  }
  return null
}

export function usePosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadAllPosts()
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Erro ao carregar posts:', err)
        setLoading(false)
      })
  }, [])

  return { posts, loading }
}

export function usePost(slug) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    loadPostBySlug(slug).then((data) => {
      setPost(data)
      setLoading(false)
    })
  }, [slug])

  return { post, loading }
}
