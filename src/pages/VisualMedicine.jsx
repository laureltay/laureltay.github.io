import { Link } from 'react-router-dom'
import { posts, visualMedicineIntro } from '../posts'

function VisualMedicine() {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const entries = posts
    .filter((post) => post.section === 'visual-medicine')
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="container">
      <section className="section-intro">
        <h1 className="section-intro-title">{visualMedicineIntro.title}</h1>
        <p className="section-intro-tagline">{visualMedicineIntro.tagline}</p>
        <p className="section-intro-blurb">{visualMedicineIntro.blurb}</p>
      </section>

      {entries.length > 0 && (
        <div className="posts-grid">
          {entries.map((post) => (
            <article key={post.slug} className="post-card">
              {post.featuredImage && (
                <Link to={`/post/${post.slug}`} className="post-card-image-link">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className={`post-card-image${post.imageFit === 'contain' ? ' contain' : ''}`}
                  />
                </Link>
              )}
              <div className="post-card-content">
                {post.tag && (
                  <p className="post-card-tag">{post.tag}</p>
                )}
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
      )}
    </div>
  )
}

export default VisualMedicine
