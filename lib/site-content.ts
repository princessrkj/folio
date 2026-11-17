/**
 * All editable site copy lives here. Update names, links, and lists in this
 * file and every section of the site updates automatically.
 */

export const site = {
  brand: 'Your Name',
  tagline: 'Studio',
  ownerName: 'Your Name',
  email: 'hello@yourdomain.com',
  location: 'Your City, State',
  serviceArea: 'Organizing available locally · AI services available remotely',
  /** Add a path like "/resume.pdf" (placed in /public) to enable the download button. */
  resumeUrl: '',
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Email', href: 'mailto:hello@yourdomain.com' },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'AI Services', href: '#ai-services' },
  { label: 'Organizing', href: '#organizing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const strengths = [
  {
    title: 'Analytical thinking',
    body: 'I approach every task by understanding the goal first, then working through the details methodically and consistently.',
  },
  {
    title: 'Attention to detail',
    body: 'Careful reading, precise judgment, and a habit of double-checking — whether reviewing a dataset or labeling a storage bin.',
  },
  {
    title: 'Organizational skill',
    body: 'I build clear systems that hold up over time, so information and spaces stay usable long after the work is done.',
  },
]

export const aiServices = [
  {
    id: 'annotation',
    label: 'AI Data Annotation',
    summary:
      'Accurate, guideline-driven labeling that gives machine learning teams clean, consistent data to build on.',
    items: [
      'Data labeling and tagging',
      'Text classification and sentiment labeling',
      'Image annotation and categorization',
      'Content evaluation and relevance rating',
      'Quality assurance and consistency review',
    ],
  },
  {
    id: 'training',
    label: 'AI Training & Evaluation',
    summary:
      'Thoughtful human review that helps models become more accurate, more helpful, and safer to use.',
    items: [
      'AI response evaluation and rating',
      'Prompt testing and edge-case exploration',
      'Reviewing model outputs against rubrics',
      'Identifying factual and reasoning errors',
      'Rewriting responses to improve quality',
      'Supporting human feedback (RLHF) workflows',
    ],
  },
]

export const aiProcess = [
  { step: '01', title: 'Brief', body: 'Review your guidelines, rubrics, tools, and quality expectations.' },
  { step: '02', title: 'Calibrate', body: 'Work through sample tasks and align on edge cases before scaling up.' },
  { step: '03', title: 'Deliver', body: 'Complete work consistently, with notes on ambiguous items and patterns.' },
  { step: '04', title: 'Refine', body: 'Incorporate feedback quickly and keep accuracy steady over time.' },
]

export const organizingServices = [
  { title: 'Residential organizing', body: 'Kitchens, pantries, closets, bathrooms, garages, and home offices.' },
  { title: 'Decluttering', body: 'Guided, judgment-free sorting to decide what stays, goes, or gets donated.' },
  { title: 'Space optimization', body: 'Smarter layouts and storage that make the most of the space you have.' },
  { title: 'Household systems', body: 'Simple routines and labeled zones that are easy for everyone to maintain.' },
]

export const organizingPhilosophy = [
  'Function first — every system should match how you actually live.',
  'Simple to maintain — if it takes effort to keep up, it will not last.',
  'Respectful and private — your home and belongings are treated with care.',
]

export const organizingBenefits = [
  'Less time searching, more time living',
  'A calmer, more manageable home',
  'Systems tailored to your household',
  'Clear next steps you can keep up with',
]

export const portfolioCategories = [
  {
    title: 'AI Projects',
    body: 'Summaries of annotation and evaluation projects, shared within confidentiality limits.',
  },
  {
    title: 'Case Studies',
    body: 'Detailed write-ups covering the challenge, the approach, and the outcome.',
  },
  {
    title: 'Work Samples',
    body: 'Example evaluations, rubrics, and labeling samples created for demonstration.',
  },
  {
    title: 'Before & After',
    body: 'Organizing transformations, shared with client permission.',
  },
]

/** Add real roles here as you go. Leave empty to show a placeholder. */
export const experience: { role: string; org: string; dates: string; body: string }[] = []

export const transferableSkills = [
  'Following detailed guidelines',
  'Written communication',
  'Research and fact-checking',
  'Quality control',
  'Time management',
  'Project organization',
  'Independent, self-directed work',
  'Client communication',
]

/** Add degrees, diplomas, or coursework here. Leave empty to show a placeholder. */
export const education: { title: string; org: string; year: string }[] = []

/** Add certifications and training as you earn them. Leave empty to show a placeholder. */
export const certifications: { title: string; issuer: string; year: string }[] = []

/** Add testimonials only with client permission. Leave empty to show a placeholder. */
export const testimonials: { quote: string; name: string; context: string }[] = []

export const inquiryServices = [
  'AI Data Annotation',
  'AI Training & Evaluation',
  'Professional Organizing',
  'Something else',
]
