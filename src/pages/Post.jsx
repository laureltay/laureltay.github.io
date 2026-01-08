import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { posts } from '../posts'

function Post() {
  const { slug } = useParams()
  const [content, setContent] = useState('')
  const post = posts.find(p => p.slug === slug)

  useEffect(() => {
    if (post) {
      fetch(`/posts/${slug}.md`)
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(error => console.error('Error loading post:', error))
    }
  }, [slug, post])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  if (!post) {
    return (
      <div className="container">
        <h1>Post not found</h1>
      </div>
    )
  }

  return (
    <article className="post">
      <div className="container">
        <header className="post-header">
          <div className="post-byline">
            {formatDate(post.date)} • Written By Laurel Tay
          </div>
          <h1 className="post-title">{post.title}</h1>
        </header>

        <div className="post-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </article>
  )
}

export default Post
