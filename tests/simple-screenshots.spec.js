import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5174';

// Define key pages to test
const PAGES = [
  { path: '/', name: 'homepage' },
  { path: '/services', name: 'services' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
  { path: '/portfolio', name: 'portfolio' },
  { path: '/case-studies', name: 'case-studies' },
  { path: '/technology-stack', name: 'technology-stack' },
  { path: '/wordpress', name: 'wordpress' },
  { path: '/shopify', name: 'shopify' },
  { path: '/web-applications', name: 'web-applications' },
  { path: '/startup', name: 'startup-partnership' },
  { path: '/seo', name: 'seo-services' }
];

test.describe('Website Screenshots', () => {
  
  test('Capture Desktop Screenshots', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });

    console.log('\n=== DESKTOP SCREENSHOTS ===');
    
    for (const pageInfo of PAGES) {
      console.log(`📸 Capturing ${pageInfo.name}...`);
      
      try {
        await page.goto(`${BASE_URL}${pageInfo.path}`, { 
          waitUntil: 'networkidle',
          timeout: 30000 
        });

        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(2000);

        // Take full page screenshot
        await page.screenshot({
          path: `test-results/screenshots/desktop/${pageInfo.name}-desktop.png`,
          fullPage: true
        });

        // Get page title for reference
        const title = await page.title();
        console.log(`   ✅ ${pageInfo.name} - ${title}`);

        // Quick accessibility check
        const h1Count = await page.locator('h1').count();
        const imagesWithoutAlt = await page.locator('img:not([alt])').count();
        
        if (h1Count === 0) console.log(`   ⚠️  No H1 heading found`);
        if (h1Count > 1) console.log(`   ⚠️  Multiple H1 headings (${h1Count})`);
        if (imagesWithoutAlt > 0) console.log(`   ⚠️  ${imagesWithoutAlt} images without alt text`);

      } catch (error) {
        console.error(`   ❌ Error capturing ${pageInfo.name}: ${error.message}`);
      }
    }
  });

  test('Capture Mobile Screenshots', async ({ page }) => {
    // Set mobile viewport (iPhone 12 Pro)
    await page.setViewportSize({ width: 390, height: 844 });

    console.log('\n=== MOBILE SCREENSHOTS ===');
    
    for (const pageInfo of PAGES) {
      console.log(`📱 Capturing ${pageInfo.name} mobile...`);
      
      try {
        await page.goto(`${BASE_URL}${pageInfo.path}`, { 
          waitUntil: 'networkidle',
          timeout: 30000 
        });

        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(2000);

        // Take mobile screenshot
        await page.screenshot({
          path: `test-results/screenshots/mobile/${pageInfo.name}-mobile.png`,
          fullPage: true
        });

        // Check for horizontal scroll
        const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
        const viewportWidth = 390;
        const hasHorizontalScroll = bodyWidth > viewportWidth;
        
        console.log(`   ✅ ${pageInfo.name} mobile`);
        if (hasHorizontalScroll) {
          console.log(`   ⚠️  Has horizontal scroll (body: ${bodyWidth}px, viewport: ${viewportWidth}px)`);
        }

      } catch (error) {
        console.error(`   ❌ Error capturing mobile ${pageInfo.name}: ${error.message}`);
      }
    }
  });

  test('Test Page Loading and Console Errors', async ({ page }) => {
    console.log('\n=== CONSOLE ERROR TESTING ===');
    
    const consoleErrors = [];
    const pageErrors = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push({
          url: page.url(),
          message: msg.text()
        });
      }
    });

    page.on('pageerror', error => {
      pageErrors.push({
        url: page.url(),
        message: error.message
      });
    });

    // Test key pages for console errors
    const testPages = PAGES.slice(0, 8); // Test first 8 pages
    
    for (const pageInfo of testPages) {
      console.log(`🔍 Testing ${pageInfo.name} for errors...`);
      
      try {
        await page.goto(`${BASE_URL}${pageInfo.path}`, { 
          waitUntil: 'networkidle',
          timeout: 15000 
        });

        await page.waitForTimeout(1000);
        
        console.log(`   ✅ ${pageInfo.name} loaded without errors`);

      } catch (error) {
        console.error(`   ❌ Error loading ${pageInfo.name}: ${error.message}`);
      }
    }

    console.log(`\n📊 SUMMARY:`);
    console.log(`   Console Errors: ${consoleErrors.length}`);
    console.log(`   Page Errors: ${pageErrors.length}`);
    
    if (consoleErrors.length > 0) {
      console.log(`\n❌ Console Errors Found:`);
      consoleErrors.forEach((error, i) => {
        console.log(`   ${i + 1}. ${error.url}: ${error.message}`);
      });
    }
    
    if (pageErrors.length > 0) {
      console.log(`\n❌ Page Errors Found:`);
      pageErrors.forEach((error, i) => {
        console.log(`   ${i + 1}. ${error.url}: ${error.message}`);
      });
    }
  });

  test('Performance Check on Key Pages', async ({ page }) => {
    console.log('\n=== PERFORMANCE TESTING ===');
    
    const keyPages = [
      { path: '/', name: 'homepage' },
      { path: '/services', name: 'services' },
      { path: '/portfolio', name: 'portfolio' }
    ];
    
    for (const pageInfo of keyPages) {
      console.log(`⚡ Testing ${pageInfo.name} performance...`);
      
      try {
        const startTime = Date.now();
        
        await page.goto(`${BASE_URL}${pageInfo.path}`, { 
          waitUntil: 'networkidle',
          timeout: 15000 
        });

        const loadTime = Date.now() - startTime;
        
        // Get basic metrics
        const metrics = await page.evaluate(() => {
          const navigation = performance.getEntriesByType('navigation')[0];
          if (navigation) {
            return {
              domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
              loadComplete: Math.round(navigation.loadEventEnd - navigation.fetchStart)
            };
          }
          return null;
        });

        console.log(`   ✅ ${pageInfo.name}:`);
        console.log(`      - Total load time: ${loadTime}ms`);
        if (metrics) {
          console.log(`      - DOM ready: ${metrics.domContentLoaded}ms`);
          console.log(`      - Load complete: ${metrics.loadComplete}ms`);
        }

        if (loadTime > 3000) {
          console.log(`   ⚠️  Slow loading (>${loadTime}ms)`);
        }

      } catch (error) {
        console.error(`   ❌ Error testing ${pageInfo.name} performance: ${error.message}`);
      }
    }
  });

});