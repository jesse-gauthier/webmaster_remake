// src/utils/sitemapGenerator.js

import { seoConfig } from '../config/seo.config.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse the blogs.json file
const blogsPath = path.resolve(__dirname, '../data/blogs.json');
const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

/**
 * Generates XML sitemap content for the website
 * @returns {string} Complete XML sitemap content
 */
export function generateSitemap() {
    const baseUrl = seoConfig.siteUrl;
    const now = new Date().toISOString();

    // Start XML content
    let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

    // Add static pages from seoConfig
    seoConfig.keyPages.forEach(page => {
        xmlContent += `    <url>
        <loc>${baseUrl}${page.path}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>${getChangeFrequency(page.path)}</changefreq>
        <priority>${page.priority.toFixed(1)}</priority>
    </url>
`;
    });

    // Add all blog posts
    blogs.forEach(blog => {
        xmlContent += `    <url>
        <loc>${baseUrl}/blog/${blog.slug}</loc>
        <lastmod>${blog.modified || blog.date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
${blog.featuredImage ? generateImageTag(blog.featuredImage, blog.title) : ''}
    </url>
`;
    });

    // Close XML content
    xmlContent += `</urlset>`;

    return xmlContent;
}

/**
 * Determines change frequency based on page path
 * @param {string} path - URL path
 * @returns {string} Appropriate change frequency
 */
function getChangeFrequency(path) {
    if (path === '/') return 'weekly';
    if (path === '/blog') return 'weekly';
    if (path.includes('/policies')) return 'yearly';
    return 'monthly';
}

/**
 * Generates image sitemap tag
 * @param {string} imagePath - Path to image
 * @param {string} title - Image title/caption
 * @returns {string} Image sitemap XML tag
 */
function generateImageTag(imagePath, title) {
    const imageUrl = imagePath.startsWith('http')
        ? imagePath
        : `${seoConfig.siteUrl}${imagePath}`;

    return `        <image:image>
            <image:loc>${imageUrl}</image:loc>
            <image:title>${escapeXml(title)}</image:title>
        </image:image>`;
}

/**
 * Escapes XML special characters
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeXml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

/**
 * Creates a sitemap.xml file in the public directory
 * This function would be used in a build script or server-side rendering
 * @param {string} outputPath - Path to write the sitemap
 */
export function writeSitemapToFile(outputPath = 'public/sitemap.xml') {
    const sitemap = generateSitemap();

    try {
        fs.writeFileSync(outputPath, sitemap);
        console.log(`Sitemap generated at ${outputPath}`);
        return true;
    } catch (error) {
        console.error('Error writing sitemap:', error);
        return false;
    }
}
