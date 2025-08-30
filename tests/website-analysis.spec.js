import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

// Configuration
const BASE_URL = 'http://localhost:5174';
const SCREENSHOT_DIR = 'test-results/screenshots';

// Define key pages to test
const PAGES = [
  { path: '/', name: 'Homepage' },
  { path: '/services', name: 'Services' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/portfolio', name: 'Portfolio' },
  { path: '/case-studies', name: 'Case Studies' },
  { path: '/technology-stack', name: 'Technology Stack' },
  { path: '/wordpress', name: 'WordPress Services' },
  { path: '/shopify', name: 'Shopify Services' },
  { path: '/web-applications', name: 'Web Applications' },
  { path: '/startup', name: 'Startup Partnership' },
  { path: '/seo', name: 'SEO Services' },
  { path: '/maintenance', name: 'Maintenance Services' },
  { path: '/consultations', name: 'Consultations' },
  { path: '/blog', name: 'Blog' }
];

// Helper function to capture console logs and errors
async function setupConsoleCapture(page) {
  const consoleMessages = [];
  const errors = [];

  page.on('console', msg => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text(),
      location: msg.location()
    });
  });

  page.on('pageerror', error => {
    errors.push({
      message: error.message,
      stack: error.stack
    });
  });

  return { consoleMessages, errors };
}

// Helper function to check accessibility
async function checkBasicAccessibility(page) {
  const issues = [];

  // Check for images without alt text
  const imagesWithoutAlt = await page.locator('img:not([alt])').count();
  if (imagesWithoutAlt > 0) {
    issues.push(`${imagesWithoutAlt} images without alt text`);
  }

  // Check for form inputs without labels
  const inputsWithoutLabels = await page.locator('input:not([aria-label]):not([aria-labelledby])').filter({
    has: page.locator(':not(label)')
  }).count();
  if (inputsWithoutLabels > 0) {
    issues.push(`${inputsWithoutLabels} inputs without proper labels`);
  }

  // Check for proper heading structure
  const h1Count = await page.locator('h1').count();
  if (h1Count === 0) {
    issues.push('No H1 heading found');
  } else if (h1Count > 1) {
    issues.push(`Multiple H1 headings found (${h1Count})`);
  }

  return issues;
}

// Helper function to analyze performance metrics
async function getPerformanceMetrics(page) {
  return await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    return {
      domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
      loadComplete: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      firstPaint: Math.round(performance.getEntriesByName('first-paint')[0]?.startTime || 0),
      firstContentfulPaint: Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0)
    };
  });
}

test.describe('Website Analysis and Screenshots', () => {
  test.beforeEach(async ({ page }) => {
    // Set default timeout
    test.setTimeout(60000);
  });

  test('Desktop Screenshots and Analysis', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });

    const analysisResults = [];

    for (const pageInfo of PAGES) {
      console.log(`\nAnalyzing ${pageInfo.name} (${pageInfo.path})...`);

      // Setup console capture
      const { consoleMessages, errors } = await setupConsoleCapture(page);

      try {
        // Navigate to page
        await page.goto(`${BASE_URL}${pageInfo.path}`, { 
          waitUntil: 'networkidle',
          timeout: 30000 
        });

        // Wait for page to be fully loaded
        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(2000); // Additional wait for dynamic content

        // Take full page screenshot
        await page.screenshot({
          path: `${SCREENSHOT_DIR}/desktop/${pageInfo.name.toLowerCase().replace(/\s+/g, '-')}-desktop.png`,
          fullPage: true
        });

        // Get performance metrics
        const performanceMetrics = await getPerformanceMetrics(page);

        // Check accessibility
        const accessibilityIssues = await checkBasicAccessibility(page);

        // Get page title and meta description
        const title = await page.title();
        const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');

        // Check for responsive design indicators
        const hasViewportMeta = await page.locator('meta[name="viewport"]').count() > 0;

        // Analyze page structure
        const pageStructure = {
          headerExists: await page.locator('header, .header').count() > 0,
          footerExists: await page.locator('footer, .footer').count() > 0,
          navigationExists: await page.locator('nav, .nav, .navigation').count() > 0,
          mainContentExists: await page.locator('main, .main, .content').count() > 0
        };

        // Check for common interactive elements
        const interactiveElements = {
          buttons: await page.locator('button, .btn, .button').count(),
          links: await page.locator('a').count(),
          forms: await page.locator('form').count(),
          inputs: await page.locator('input, textarea, select').count()
        };

        analysisResults.push({
          page: pageInfo.name,
          path: pageInfo.path,
          title,
          metaDescription,
          performanceMetrics,
          accessibilityIssues,
          consoleErrors: errors.length,
          consoleMessages: consoleMessages.length,
          pageStructure,
          interactiveElements,
          hasViewportMeta,
          timestamp: new Date().toISOString()
        });

        console.log(`✅ ${pageInfo.name} analyzed successfully`);
        console.log(`   - Title: ${title}`);
        console.log(`   - Load Time: ${performanceMetrics.loadComplete}ms`);
        console.log(`   - Console Errors: ${errors.length}`);
        console.log(`   - Accessibility Issues: ${accessibilityIssues.length}`);

      } catch (error) {
        console.error(`❌ Error analyzing ${pageInfo.name}: ${error.message}`);
        analysisResults.push({
          page: pageInfo.name,
          path: pageInfo.path,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }

    // Save analysis results to JSON file
    const resultsPath = `${SCREENSHOT_DIR}/desktop-analysis-results.json`;
    fs.writeFileSync(resultsPath, JSON.stringify(analysisResults, null, 2));
    console.log(`\n📊 Desktop analysis results saved to: ${resultsPath}`);
  });

  test('Mobile Screenshots and Responsiveness', async ({ page }) => {
    // Set mobile viewport (iPhone 12 Pro dimensions)
    await page.setViewportSize({ width: 390, height: 844 });

    const mobileAnalysis = [];

    for (const pageInfo of PAGES) {
      console.log(`\nAnalyzing mobile view of ${pageInfo.name}...`);

      try {
        // Navigate to page
        await page.goto(`${BASE_URL}${pageInfo.path}`, { 
          waitUntil: 'networkidle',
          timeout: 30000 
        });

        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(2000);

        // Take mobile screenshot
        await page.screenshot({
          path: `${SCREENSHOT_DIR}/mobile/${pageInfo.name.toLowerCase().replace(/\s+/g, '-')}-mobile.png`,
          fullPage: true
        });

        // Check mobile-specific elements
        const mobileElements = {
          hamburgerMenu: await page.locator('.hamburger, .menu-toggle, .mobile-menu-toggle').count() > 0,
          mobileNavigation: await page.locator('.mobile-nav, .mobile-menu').count() > 0,
          responsiveImages: await page.locator('img[srcset], picture').count(),
          touchFriendlyButtons: await page.locator('button, .btn').count()
        };

        // Check if content overflows horizontally
        const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
        const viewportWidth = 390;
        const hasHorizontalScroll = bodyWidth > viewportWidth;

        // Test touch interactions (if hamburger menu exists)
        let menuInteractionWorking = false;
        if (mobileElements.hamburgerMenu) {
          try {
            const menuToggle = page.locator('.hamburger, .menu-toggle, .mobile-menu-toggle').first();
            await menuToggle.click();
            await page.waitForTimeout(500);
            menuInteractionWorking = true;
          } catch (error) {
            console.log(`   - Menu interaction test failed: ${error.message}`);
          }
        }

        mobileAnalysis.push({
          page: pageInfo.name,
          path: pageInfo.path,
          mobileElements,
          hasHorizontalScroll,
          menuInteractionWorking,
          bodyWidth,
          viewportWidth,
          timestamp: new Date().toISOString()
        });

        console.log(`✅ ${pageInfo.name} mobile view analyzed`);
        console.log(`   - Horizontal scroll: ${hasHorizontalScroll ? '❌' : '✅'}`);
        console.log(`   - Mobile menu: ${mobileElements.hamburgerMenu ? '✅' : '❓'}`);

      } catch (error) {
        console.error(`❌ Error analyzing mobile view of ${pageInfo.name}: ${error.message}`);
        mobileAnalysis.push({
          page: pageInfo.name,
          path: pageInfo.path,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }

    // Save mobile analysis results
    const resultsPath = `${SCREENSHOT_DIR}/mobile-analysis-results.json`;
    fs.writeFileSync(resultsPath, JSON.stringify(mobileAnalysis, null, 2));
    console.log(`\n📱 Mobile analysis results saved to: ${resultsPath}`);
  });

  test('Cross-browser Testing', async ({ page, browserName }) => {
    console.log(`\nTesting in ${browserName}...`);

    const browserResults = [];

    // Test a subset of key pages for cross-browser compatibility
    const keyPages = PAGES.slice(0, 5); // Test first 5 pages

    for (const pageInfo of keyPages) {
      try {
        await page.goto(`${BASE_URL}${pageInfo.path}`, { waitUntil: 'networkidle' });
        await page.waitForLoadState('domcontentloaded');

        // Take browser-specific screenshot
        await page.screenshot({
          path: `${SCREENSHOT_DIR}/${browserName}/${pageInfo.name.toLowerCase().replace(/\s+/g, '-')}-${browserName}.png`,
          fullPage: true
        });

        // Check CSS rendering consistency
        const styles = await page.evaluate(() => {
          const element = document.querySelector('body');
          const computedStyle = window.getComputedStyle(element);
          return {
            fontFamily: computedStyle.fontFamily,
            backgroundColor: computedStyle.backgroundColor,
            display: computedStyle.display
          };
        });

        browserResults.push({
          browser: browserName,
          page: pageInfo.name,
          path: pageInfo.path,
          styles,
          success: true,
          timestamp: new Date().toISOString()
        });

        console.log(`✅ ${pageInfo.name} tested in ${browserName}`);

      } catch (error) {
        console.error(`❌ Error testing ${pageInfo.name} in ${browserName}: ${error.message}`);
        browserResults.push({
          browser: browserName,
          page: pageInfo.name,
          path: pageInfo.path,
          error: error.message,
          success: false,
          timestamp: new Date().toISOString()
        });
      }
    }

    // Save browser-specific results
    const resultsPath = `${SCREENSHOT_DIR}/${browserName}-results.json`;
    fs.writeFileSync(resultsPath, JSON.stringify(browserResults, null, 2));
    console.log(`🌐 ${browserName} results saved to: ${resultsPath}`);
  });

  test('Performance and Loading Analysis', async ({ page }) => {
    console.log('\nPerforming detailed performance analysis...');

    const performanceResults = [];

    // Test performance on key pages
    const performancePages = [
      { path: '/', name: 'Homepage' },
      { path: '/services', name: 'Services' },
      { path: '/portfolio', name: 'Portfolio' }
    ];

    for (const pageInfo of performancePages) {
      try {
        // Start performance monitoring
        await page.goto(`${BASE_URL}${pageInfo.path}`, { waitUntil: 'networkidle' });
        
        // Measure Core Web Vitals
        const webVitals = await page.evaluate(() => {
          return new Promise((resolve) => {
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const vitals = {};
              
              entries.forEach((entry) => {
                if (entry.entryType === 'largest-contentful-paint') {
                  vitals.lcp = entry.startTime;
                }
                if (entry.entryType === 'first-input') {
                  vitals.fid = entry.processingStart - entry.startTime;
                }
                if (entry.entryType === 'layout-shift') {
                  vitals.cls = (vitals.cls || 0) + entry.value;
                }
              });
              
              // Resolve after collecting some metrics
              setTimeout(() => resolve(vitals), 3000);
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
            
            // Fallback resolve
            setTimeout(() => resolve({}), 5000);
          });
        });

        // Check resource loading
        const resources = await page.evaluate(() => {
          const resources = performance.getEntriesByType('resource');
          return resources.map(resource => ({
            name: resource.name,
            type: resource.initiatorType,
            size: resource.transferSize,
            duration: resource.duration
          }));
        });

        const largeResources = resources.filter(r => r.size > 100000); // > 100KB

        performanceResults.push({
          page: pageInfo.name,
          path: pageInfo.path,
          webVitals,
          resourceCount: resources.length,
          largeResources: largeResources.length,
          totalTransferSize: resources.reduce((sum, r) => sum + (r.size || 0), 0),
          timestamp: new Date().toISOString()
        });

        console.log(`⚡ ${pageInfo.name} performance analyzed`);
        console.log(`   - Resources loaded: ${resources.length}`);
        console.log(`   - Large resources (>100KB): ${largeResources.length}`);

      } catch (error) {
        console.error(`❌ Error analyzing performance of ${pageInfo.name}: ${error.message}`);
      }
    }

    // Save performance results
    const resultsPath = `${SCREENSHOT_DIR}/performance-analysis.json`;
    fs.writeFileSync(resultsPath, JSON.stringify(performanceResults, null, 2));
    console.log(`⚡ Performance analysis saved to: ${resultsPath}`);
  });
});