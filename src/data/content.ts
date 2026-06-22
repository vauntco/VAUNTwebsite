// Misc verbatim content blocks: Why Us, FAQ, Testimonials, Blog, Team (Spec §7–§9).

export interface Pillar {
  name: string
  copy: string
}

// Spec §7.7
export const whyUsPillars: Pillar[] = [
  {
    name: 'Hard Working',
    copy: 'We believe in your success as much as our own. When you succeed, we succeed.',
  },
  {
    name: 'Innovative',
    copy: 'We embrace creativity and forward-thinking solutions to drive growth and keep you ahead of the curve.',
  },
  {
    name: 'On Time',
    copy: "We've never missed a deadline and don't plan to. We're committed to delivering on time, every time.",
  },
]

export interface Faq {
  q: string
  a: string
}

// Spec §7.10 — verbatim
export const faqs: Faq[] = [
  {
    q: 'How much does a website cost?',
    a: 'Our websites start at $1,500, with pricing increasing based on complexity, number of pages, and custom design features. Contact us for a personalized quote based on your specific needs.',
  },
  {
    q: 'What types of payment do you accept?',
    a: 'We accept credit cards, ACH transfers, and checks for payment.',
  },
  {
    q: 'Will I be able to update my website myself?',
    a: "Yes, we build websites with user-friendly platforms, and we'll show you how to make edits easily.",
  },
  {
    q: 'Can you edit my current website?',
    a: "While we prefer to build websites from scratch to ensure the best results, we do take on editing projects at our discretion. Feel free to reach out, and we'll assess your needs!",
  },
  {
    q: 'Can you integrate specific features or tools into my website?',
    a: 'Of course! We can include e-commerce, booking systems, and other tailored integrations.',
  },
  {
    q: 'Do you provide ongoing support after the website launch?',
    a: 'Yes, we offer maintenance packages to keep your site running smoothly.',
  },
]

export interface Testimonial {
  name: string
  org: string
  stars: number
  quote: string
}

// Spec §9 — reference/fallback only (live site uses GHL widget).
export const testimonials: Testimonial[] = [
  {
    name: 'Alyssa Reliford',
    org: 'Salt & Light Child Care',
    stars: 5,
    quote:
      'Hi Jacob, First of all... WOW! I clicked on the link and literal tears came to my eyes. The amount of gratitude I have for you making my vision come to life is immeasurable. Thank you from the bottom of my heart for your patience, professionalism, and incredible expertise. I am normally not at a loss for words, but this... OH MY GOSH, LIKE WOW!! Jacob, I am hardly ever impressed because my standards are through the roof, but with you and what you created... PHENOMENAL job! Thank you times a million, I pray for nothing but success for you!',
  },
  {
    name: 'Rob Robson',
    org: 'COO of Viking Laser Manufacturing',
    stars: 5,
    quote:
      'The team at Vaunt delivered a creative strategy that elevated our brand and increased our client engagement. The results have been outstanding!',
  },
  {
    name: 'Carlos Hesano',
    org: 'President of DRYmedic Restoration',
    stars: 5,
    quote:
      "Jacob and Vaunt transformed our brand with a tailored strategy that boosted visibility and drove growth. We're thrilled with the results!",
  },
  {
    name: 'Emily Ujkaj',
    org: 'Blush Salon',
    stars: 5,
    quote:
      'We had an incredible experience working with Vaunt! Jacob is very insightful, communicative and professional. He and his team conducted an amazing brand photoshoot for our business. We highly recommend Vaunt to anyone looking for professional assistance with marketing and/or web design.',
  },
  {
    name: 'Bailey Hannawa',
    org: 'EFLO Vape',
    stars: 5,
    quote:
      "A huge thank you to Jacob and Vaunt for bringing our vision to life and creating an incredible website. We're excited for what the future holds!",
  },
  {
    name: 'Rita Denha',
    org: 'CEO of Executive Language Services',
    stars: 5,
    quote:
      "We recently had the pleasure of working with Jacob at Vaunt for a complete redesign of our logo, website, and brochure. If you're looking for a reliable, innovative, and detail-oriented marketing and design company, I highly recommend Vaunt. They exceeded our expectations and transformed our brand presence across multiple platforms.",
  },
]

export interface BlogPost {
  title: string
  date: string
  author: string
  excerpt: string
  slug: string
}

// Spec §7.9 — seed posts
export const blogPosts: BlogPost[] = [
  {
    title: 'Michigan Accountants, Tax Season Is Around the Corner. Is Your Website Ready?',
    date: 'Jan 22, 2026',
    author: 'Jacob Brikho',
    slug: 'michigan-accountants-tax-season-website',
    excerpt:
      'Tax season drives a surge of high-intent local searches. Here is how Michigan accounting firms can make sure their website is ready to capture them.',
  },
  {
    title: 'Affordable Small Business Web Design That Works',
    date: 'Aug 14, 2025',
    author: 'Jacob Brikho',
    slug: 'affordable-small-business-web-design',
    excerpt:
      'Affordable does not have to mean cheap. What actually drives results for small business websites — and where to spend your budget.',
  },
  {
    title: 'Why Your Website Matters More Than Ever (Especially Here in Michigan)',
    date: 'Jul 9, 2025',
    author: 'Jacob Brikho',
    slug: 'why-your-website-matters',
    excerpt:
      'Your website is the first impression most customers will ever have of your brand. Here is why it matters more than ever in a competitive Michigan market.',
  },
]

export interface TeamMember {
  name: string
  role: string
}

// Spec §8
export const team: TeamMember[] = [
  { name: 'Jacob Brikho', role: 'Founder, CEO' },
  { name: 'Peter Shamoon', role: 'COO' },
  { name: 'Ian Green', role: 'Account Manager' },
  { name: 'Fasih Zia', role: 'Lead Developer' },
  { name: 'You?', role: "We're Hiring" },
]
