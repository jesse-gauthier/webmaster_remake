// scripts/generate-sitemap.js

import { writeSitemapToFile } from '../src/utils/sitemapGenerator.js';

console.log('Generating sitemap.xml...');
try {
    const success = writeSitemapToFile();
    if (success) {
        console.log('Sitemap generation completed successfully.');
        process.exit(0);
    } else {
        console.error('Sitemap generation failed.');
        process.exit(1);
    }
} catch (error) {
    console.error('Error during sitemap generation:', error);
    process.exit(1);
}
