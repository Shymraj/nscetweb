// Centralized API configuration for NSCET Website
// Automatically switches between Localhost and Live Production environments

const getBaseUrl = () => {
  // 1. Explicit environment variable set at Vite build time
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/+$/, '');
  }

  // 2. Global runtime variable from window (allows changing without rebuilding Vite)
  if (typeof window !== 'undefined' && (window.__API_URL__ || window.__NSCET_API_URL__ || window.API_URL)) {
    return (window.__API_URL__ || window.__NSCET_API_URL__ || window.API_URL).replace(/\/+$/, '');
  }

  // 3. Localhost development detection
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000';
    }
  }

  // 4. In live production:
  // Default to same origin / relative path (works with reverse proxy like Nginx or unified Express server)
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
 * - Database records that accidentally saved hardcoded localhost/127.0.0.1
 */
export const getUploadUrl = (path) => {
  if (!path) return '';

  if (typeof path === 'string') {
    // If path was mistakenly saved with hardcoded localhost or 127.0.0.1 in database
    if (/https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i.test(path)) {
      if (API_BASE_URL) {
        return path.replace(/https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i, API_BASE_URL);
      }
      return path.replace(/https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i, '');
    }
  }

  // If already a valid absolute URL (http/https/blob/data)
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('blob:') || path.startsWith('data:')) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
};

export default API_BASE_URL;
