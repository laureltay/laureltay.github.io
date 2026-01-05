import { Link } from 'react-router-dom'
import { posts } from '../posts'

function Home() {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="container">
      <div className="blog-header">
        <h1 className="page-title">Blog</h1>
        <p className="blog-description">
          Welcome! This is where I share my thoughts, projects, and learnings.
          Feel free to explore and reach out if you'd like to connect.
        </p>
      </div>

      <div className="posts-list">
        {posts.map((post) => (
          <article key={post.slug} className="post-preview">
            <div className="post-preview-meta">
              <span className="post-category">{post.category}</span>
              <span className="post-date">{formatDate(post.date)}</span>
            </div>
            <h2 className="post-preview-title">
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="post-preview-excerpt">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Home
