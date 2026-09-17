import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/tabere-methodist-jhs";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        assetPrefix: githubPagesBasePath,
      }
    : {}),
};

export default nextConfig;
