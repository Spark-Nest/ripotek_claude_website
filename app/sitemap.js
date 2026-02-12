export default function sitemap() {
  const baseUrl = 'https://www.ripotek.com';

  // Main pages
  const mainPages = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/training`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/careers`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/website-development`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  // Blog posts
  const blogPosts = [
    'navigating-ai-revolution',
    'process-automation-small-businesses',
    'upskilling-imperative',
    'azure-data-engineering-best-practices',
    'transition-data-career-without-cs-degree',
    'power-bi-vs-tableau-2025',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  // Syllabi pages
  const syllabi = [
    'ai-engineer',
    'azure-data-engineer',
    'azure-data-factory-masterclass',
    'business-intelligence-analyst',
    'databricks-engineer',
    'power-bi-analyst',
    'prompt-engineering',
    'python-for-data',
  ].map((slug) => ({
    url: `${baseUrl}/syllabi/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Career pages
  const careerPages = [
    'senior-data-architect',
    'junior-data-engineer',
    'azure-solutions-consultant',
    'power-bi-instructor',
    'student-success-coordinator',
  ].map((slug) => ({
    url: `${baseUrl}/careers/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  // Legal pages
  const legalPages = [
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  return [...mainPages, ...blogPosts, ...syllabi, ...careerPages, ...legalPages];
}
