// app/sitemap-subdomains/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import contentData from "@/components/Content/ContactInfo.json";
import subdomainMap from "@/components/Content/subDomainUrlContent.json";
import { headers } from "next/headers";

// Add dynamic export for API support
export const dynamic = 'force-dynamic';

// Helper function to get base URL from headers or fallback
function getBaseUrl(headersList: any): string {
  try {
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'https';
    
    if (host) {
      return `${protocol}://${host}/`;
    }
  } catch (error) {
    console.warn('Error getting host from headers:', error);
  }
  
  // Fallback to static content
  return contentData.baseUrl || 'https://localhost:3000/';
}

// Function to get subdomain data from local JSON file
function getSubdomainData() {
  try {
    // Convert the imported JSON object to the expected format
    const subdomains = Object.keys(subdomainMap || {}).map(key => ({ 
      slug: key, 
      ...(subdomainMap as any)[key] 
    }));
    
    return { subdomains };
  } catch (error) {
    console.warn('Error processing subdomain data from JSON:', error);
    return { subdomains: [] };
  }
}

export async function GET() {
  const headersList = headers();
  const baseUrl = getBaseUrl(headersList);

  // Get subdomain data directly from local JSON file
  const subdomainData = getSubdomainData();

  // Normalize the base host (no protocol, no trailing slash)
  const host = String(contentData.host)
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  const subdomains = subdomainData.subdomains || [];
  const now = new Date().toISOString();

  // Build <sitemap> entries pointing to each subdomain's sitemap.xml
  const entries = subdomains
    .map((subdomainItem: any) => {
      const slug = subdomainItem.slug;
      return `  <sitemap>
    <loc>https://${slug}.${host}/sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`;
    })
    .join("\n");

  // Full XML response as a sitemap index
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}