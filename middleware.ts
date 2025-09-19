import ContactInfo from '@/components/Content/ContactInfo.json';
import subdomainContent from '@/components/Content/subDomainUrlContent.json';
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Function to fetch subdomain data from local JSON file
function getSubdomainData() {
  try {
    // Convert the imported JSON object to the expected format
    const subdomainUrl: Record<string, any> = subdomainContent;
    const subDomains: string[] = Object.keys(subdomainUrl);
    
    return {
      subdomainUrl,
      subDomains
    };
  } catch (error) {
    return {
      subdomainUrl: {} as Record<string, any>,
      subDomains: [] as string[]
    };
  }
}

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];
  
  // Fetch subdomain data from local JSON file
  const { subdomainUrl, subDomains } = getSubdomainData();
  const allowedSubs: string[] = Object.keys(subdomainUrl);

  // Skip Next assets
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/static") ||
    url.pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp)$/i)
  ) {
    return NextResponse.next();
  }

  // 2) Let the main domain serve robots and sitemap normally
  if (/^\/(robots\.txt|sitemap.xml|blogs\/sitemap\.xml)$/.test(url.pathname)) {
    const res = NextResponse.next();
    res.headers.set("x-subdomain", subdomain);
    return res;
  }

  if (!subDomains.includes(subdomain)) {
    return NextResponse.next();
  }

  if (subdomain && subdomain !== "www") {
    // Prevent incorrect routing for neighborhood paths
    if (!url.pathname.includes("/neighborhoods/")) {
      url.pathname = `/${subdomain}${url.pathname}`;
    } else {
      // For neighborhood paths, ensure we're not duplicating the structure
      if (!url.pathname.startsWith(`/${subdomain}/`)) {
        url.pathname = `/${subdomain}${url.pathname}`;
      }
      
      // Additional validation to prevent malformed paths
      const pathSegments = url.pathname.split('/').filter(segment => segment);
      if (pathSegments.length >= 3 && pathSegments[1] === subdomain && pathSegments[2] === 'neighborhoods') {
        // Ensure we have the correct structure: /[State]/neighborhoods/[neighborhood]
        if (pathSegments.length < 4) {
          // Missing neighborhood parameter
          return NextResponse.next();
        }
      }
    }
  }

  const response = NextResponse.rewrite(url);
  response.headers.set("x-subdomain", subdomain);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};