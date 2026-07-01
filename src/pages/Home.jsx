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

  const thoughts = posts.filter((post) => post.section !== 'visual-medicine')

  return (
    <div className="container">
      <div className="posts-grid">
        {[...thoughts].sort((a, b) => new Date(b.date) - new Date(a.date)).map((post) => (
          <article key={post.slug} className="post-card">
            {post.featuredImage && (
              <Link to={`/post/${post.slug}`} className="post-card-image-link">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="post-card-image"
                />
              </Link>
            )}
            <div className="post-card-content">
              <h2 className="post-card-title">
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.date && (
                <p className="post-card-date">{formatDate(post.date)}</p>
              )}
              {post.excerpt && (
                <p className="post-card-excerpt">{post.excerpt}</p>
              )}
              <Link to={`/post/${post.slug}`} className="post-card-link">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Home
