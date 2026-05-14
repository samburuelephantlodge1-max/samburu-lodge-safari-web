export const updatePageMeta = (
  title: string,
  description: string,
  path?: string,
  options?: { ogType?: string; jsonLd?: object | null }
) => {
  // Update document title
  document.title = title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    document.head.appendChild(metaDescription);
  }
  
  // Update Open Graph title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  } else {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', title);
    document.head.appendChild(ogTitle);
  }
  
  // Update Open Graph description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  } else {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', description);
    document.head.appendChild(ogDescription);
  }
  
  // Update canonical URL if path is provided
  if (path) {
    let canonical = document.querySelector('link[rel="canonical"]');
    const fullUrl = `https://samburuelephantlodge.co.ke${path}`;
    
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', fullUrl);
      document.head.appendChild(canonical);
    }
    
    // Update og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', fullUrl);
    } else {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', fullUrl);
      document.head.appendChild(ogUrl);
    }
  }

  // Update og:type
  const ogType = options?.ogType ?? 'website';
  let ogTypeEl = document.querySelector('meta[property="og:type"]');
  if (ogTypeEl) {
    ogTypeEl.setAttribute('content', ogType);
  } else {
    ogTypeEl = document.createElement('meta');
    ogTypeEl.setAttribute('property', 'og:type');
    ogTypeEl.setAttribute('content', ogType);
    document.head.appendChild(ogTypeEl);
  }

  // Manage per-page JSON-LD (id="page-jsonld")
  const existing = document.getElementById('page-jsonld');
  if (existing) existing.remove();
  if (options?.jsonLd) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'page-jsonld';
    script.text = JSON.stringify(options.jsonLd);
    document.head.appendChild(script);
  }
};