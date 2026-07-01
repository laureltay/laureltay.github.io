export const posts = [
  {
    slug: 'dissonanceofbeing',
    title: 'The Dissonance of Being',
    date: '2026-03-29',
    category: 'Thoughts',
    section: 'thoughts',
    featuredImage: '/images/dissonanceofbeing.JPG',
  },
  {
    slug: 'ReadMe',
    title: 'ReadMe',
    date: '2026-01-03',
    category: 'Thoughts',
    section: 'thoughts',
    excerpt: '',
    featuredImage: '/images/hero.JPG',
  },
  {
    slug: 'beginagain',
    title: 'Begin Again',
    date: '2026-01-05',
    category: 'Thoughts',
    section: 'thoughts',
    featuredImage: '/images/beginagain.JPG',
  },
  {
    slug: 'timetobreathe',
    title: 'A Break without a Break',
    date: '2026-01-23',
    category: 'Thoughts',
    section: 'thoughts',
    featuredImage: '/images/breathe.JPG',
  },
  {
    slug: 'worthit',
    title: 'Tension of Opposites',
    date: '2026-02-9',
    category: 'Thoughts',
    section: 'thoughts',
    featuredImage: '/images/wintersunset.JPG',
  },
  {
    slug: 'worthitmeh',
    title: 'Worth It Meh?',
    date: '2026-05-27',
    category: 'Thoughts',
    section: 'thoughts',
    featuredImage: '/images/worthitmeh.jpeg',
  },

  // ── Visual Medicine ────────────────────────────────────────────────
  // Explorations of data, AI, and design in medicine.
  // Add new entries here with section: 'visual-medicine'. An optional `tag`
  // (e.g. 'Clinical AI', 'Health Equity') shows as a small label on the card.
  // Use imageFit: 'contain' for charts so they aren't cropped like photos.
  {
    slug: 'life-expectancy',
    title: 'Where You’re Born Can Cost You Three Decades of Life',
    date: '2026-06-30',
    tag: 'Health Equity',
    section: 'visual-medicine',
    excerpt:
      'A single number — life expectancy at birth — swings by thirty years across countries. One chart on what that gap really measures.',
    featuredImage: '/images/life-expectancy-gap.png',
    imageFit: 'contain',
  },
]

// The brand statement shown at the top of the Visual Medicine section.
export const visualMedicineIntro = {
  title: 'Visual Medicine',
  tagline:
    'Exploring how data, AI, and design can make medicine clearer, safer, and more accessible.',
  blurb:
    'A future physician’s notebook on clinical AI, health equity, and medical data storytelling.',
}
