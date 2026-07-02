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

  // ── Healthcare: Visualised ─────────────────────────────────────────
  // Each post takes one dataset and tells its story through clear visuals.
  // Add entries here with section: 'visual-medicine'. An optional `tag` shows
  // as a small label on the card. Use imageFit: 'contain' for charts so they
  // aren't cropped like photos.
  {
    slug: 'eldercare',
    title: 'Mapping Singapore’s Eldercare Network',
    date: '2026-07-02',
    tag: 'Ageing',
    section: 'visual-medicine',
    excerpt:
      'One open dataset of 133 eldercare facilities: what kinds of care exist, who runs them, and where they cluster across the island.',
    featuredImage: '/images/eldercare-map.png',
    imageFit: 'contain',
  },
]

// The brand statement shown at the top of the Healthcare: Visualised section.
export const visualMedicineIntro = {
  title: 'Healthcare: Visualised',
  tagline:
    'One healthcare dataset at a time: clear, effective visuals, and the story in the numbers.',
}
