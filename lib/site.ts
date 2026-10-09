// Vercel sets VERCEL_PROJECT_PRODUCTION_URL to the production domain (custom domain once added).
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
