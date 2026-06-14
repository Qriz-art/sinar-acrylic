export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sinar-acrylic.vercel.app/sitemap.xml",
  };
}