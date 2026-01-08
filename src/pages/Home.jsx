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
      <div className="posts-grid">
        {posts.map((post) => (
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
