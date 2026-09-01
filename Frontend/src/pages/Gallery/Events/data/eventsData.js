// This file contains the data for all events.
// Images are automatically loaded from their respective folders using Vite's import.meta.glob.
// To add photos for an event, simply place the .jpg, .jpeg, or .png files into the corresponding
// src/pages/Gallery/Events/assets/events/<event-slug>/ folder.

// Explicit eager imports for existing event asset folders to prevent build memory overload
const imageGlobs = {
  'civil-association': import.meta.glob('../assets/events/civil-association/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'diwali-celebration-2025': import.meta.glob('../assets/events/diwali-celebration-2025/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'diwali-celebration': import.meta.glob('../assets/events/diwali-celebration/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'freshers-day': import.meta.glob('../assets/events/freshers-day/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'graduation-day': import.meta.glob('../assets/events/graduation-day/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'kalam-awards': import.meta.glob('../assets/events/kalam-awards/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'nexus-aim-association': import.meta.glob('../assets/events/nexus-aim-association/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'nss-tree-plantation': import.meta.glob('../assets/events/nss-tree-plantation/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'onam-celebration': import.meta.glob('../assets/events/onam-celebration/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'pongal-2025': import.meta.glob('../assets/events/pongal-2025/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'signout-day': import.meta.glob('../assets/events/signout-day/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'sports-achievements': import.meta.glob('../assets/events/sports-achievements/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'waves-25': import.meta.glob('../assets/events/waves-25/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
  'waves-24': import.meta.glob('../assets/events/waves-24/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' }),
};

// Helper to convert glob results to array of URLs
const getImages = (slug) => {
  const baseSlug = slug.replace(/-2025|-25$/, '');
  const globResult = imageGlobs[slug] || imageGlobs[baseSlug];
  if (!globResult) return [];
  return Object.values(globResult);
};

export const eventsData = [
  { id: 1, title: "Diwali Celebration 2025", slug: "diwali-celebration-2025" },
  { id: 2, title: "Waves'25", slug: "waves-25" },
  { id: 3, title: "Onam Celebration 2025", slug: "onam-celebration-2025" },
  { id: 4, title: "Fresher's Day 2025", slug: "freshers-day-2025" },
  { id: 5, title: "Independence Day 2025", slug: "independence-day-2025" },
  { id: 6, title: "Signout Day 2025", slug: "signout-day-2025" },
  { id: 7, title: "Pongal 2025", slug: "pongal-2025" },
  { id: 10, title: "Sports Achievements", slug: "sports-achievements" },
  { id: 11, title: "Fresher's Day", slug: "freshers-day" },
  { id: 12, title: "Graduation Day", slug: "graduation-day" },
  { id: 13, title: "Kalam Awards", slug: "kalam-awards" },
  { id: 14, title: "Signout Day", slug: "signout-day" },
  { id: 15, title: "NSS Tree Plantation", slug: "nss-tree-plantation" }
].map(event => {
  const images = getImages(event.slug);
  return {
    ...event,
    images: images,
    coverImage: images.length > 0 ? images[0] : null
  };
});
