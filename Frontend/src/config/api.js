// Centralized API configuration for NSCET Website
// Automatically switches between Localhost and Live Production environments

const getBaseUrl = () => {
  // 1. If explicit Vite environment variable is set (e.g., in Vercel/Netlify/Hosting build settings)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/+$/, '');
  }

  // 2. Localhost development detection
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000';
    }
  }

  // 3. In live production, if no VITE_API_URL is provided:
  // Default to same origin / relative path (works with reverse proxy like Nginx or unified server)
  return '';
};

export const API_BASE_URL = getBaseUrl();

/**
 * Constructs an absolute API endpoint URL
 * @param {string} endpoint - e.g. '/api/chat' or 'api/admin/enquiries'
 */
export const getApiUrl = (endpoint) => {
  if (!endpoint) return API_BASE_URL;
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
};

/**
 * Constructs a valid URL for uploaded photos and static media.
 * Automatically handles:
 * - Localhost vs Live URLs
 * - Relative upload paths (/uploads/staff/...)
 * - Database records that accidentally saved hardcoded 'http://localhost:5000'
 */
export const getUploadUrl = (path) => {
  if (!path) return '';

  // If path was mistakenly saved with hardcoded localhost:5000 in database
  if (typeof path === 'string' && path.includes('http://localhost:5000')) {
    if (API_BASE_URL) {
      return path.replace('http://localhost:5000', API_BASE_URL);
    }
    return path.replace('http://localhost:5000', '');
  }

  // If already a valid absolute URL (http/https/blob/data)
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('blob:') || path.startsWith('data:')) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
};

export default API_BASE_URL;
