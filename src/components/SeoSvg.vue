<!-- SeoSvg.vue -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none">
    <!-- Background elements -->
    <rect x="100" y="80" width="600" height="440" rx="20" fill="#EDF5F0" opacity="0.3" />
    <circle cx="200" cy="150" r="60" fill="#4292AC" opacity="0.1" />
    <circle cx="650" cy="400" r="80" fill="#2E5944" opacity="0.1" />

    <!-- Modern SEO Dashboard -->
    <rect x="150" y="120" width="500" height="360" rx="12" fill="#FFFFFF" stroke="#2E5944" stroke-width="2" />

    <!-- Dashboard Header -->
    <rect x="150" y="120" width="500" height="50" rx="12" fill="#2E5944" />
    <rect x="170" y="135" width="120" height="20" rx="4" fill="#FFFFFF" opacity="0.9" />
    <circle cx="620" cy="145" r="15" fill="#4292AC" opacity="0.9" />
    <rect x="540" y="135" width="60" height="20" rx="10" fill="#FFFFFF" opacity="0.5" />

    <!-- Search Section -->
    <rect x="180" y="190" width="440" height="40" rx="20" fill="#F7F3E8" stroke="#D1E1D7" stroke-width="2" />
    <circle cx="210" cy="210" r="12" fill="none" stroke="#4292AC" stroke-width="2" />
    <path d="M219 219 L230 230" stroke="#4292AC" stroke-width="2" stroke-linecap="round" />
    <rect x="240" y="200" width="150" height="20" rx="4" fill="#2D2D2D" opacity="0.1" />
    <rect x="550" y="200" width="50" height="20" rx="10" fill="#4292AC" opacity="0.8" />

    <!-- First Section - Ranking Results -->
    <rect x="180" y="250" width="280" height="210" rx="8" fill="#F7F3E8" />

    <!-- SERP Results -->
    <rect x="195" y="265" width="250" height="20" rx="4" fill="#2E5944" opacity="0.8" />

    <!-- Result 1 -->
    <rect x="195" y="295" width="250" height="40" rx="4" fill="#FFFFFF" stroke="#D5E6EC" stroke-width="1" />
    <rect x="205" y="305" width="150" height="10" rx="2" fill="#4292AC" />
    <rect x="205" y="320" width="180" height="6" rx="2" fill="#8EAE9D" opacity="0.7" />
    <circle cx="430" cy="315" r="10" fill="#34D399" opacity="0.8" />

    <!-- Result 2 -->
    <rect x="195" y="345" width="250" height="40" rx="4" fill="#FFFFFF" stroke="#D5E6EC" stroke-width="1" />
    <rect x="205" y="355" width="130" height="10" rx="2" fill="#4292AC" />
    <rect x="205" y="370" width="160" height="6" rx="2" fill="#8EAE9D" opacity="0.7" />
    <circle cx="430" cy="365" r="10" fill="#FBBF24" opacity="0.8" />

    <!-- Result 3 -->
    <rect x="195" y="395" width="250" height="40" rx="4" fill="#FFFFFF" stroke="#D5E6EC" stroke-width="1" />
    <rect x="205" y="405" width="140" height="10" rx="2" fill="#4292AC" />
    <rect x="205" y="420" width="170" height="6" rx="2" fill="#8EAE9D" opacity="0.7" />
    <circle cx="430" cy="415" r="10" fill="#F87171" opacity="0.8" />

    <!-- Second Section - Analytics -->
    <rect x="480" y="250" width="150" height="210" rx="8" fill="#F7F3E8" />

    <!-- Analytics Header -->
    <rect x="495" y="265" width="120" height="20" rx="4" fill="#2E5944" opacity="0.8" />

    <!-- Main Analytics Chart -->
    <rect x="495" y="295" width="120" height="80" rx="4" fill="#FFFFFF" stroke="#D5E6EC" stroke-width="1" />
    <path d="M495 355 L515 340 L535 345 L555 325 L575 335 L595 305 L615 315" stroke="#4292AC" stroke-width="2"
      stroke-linecap="round" fill="none" />
    <path d="M495 375 L515 360 L535 355 L555 370 L575 355 L595 365 L615 345" stroke="#2E5944" stroke-width="2"
      stroke-linecap="round" fill="none" opacity="0.6" />

    <!-- Keyword Performance -->
    <rect x="495" y="385" width="120" height="60" rx="4" fill="#FFFFFF" stroke="#D5E6EC" stroke-width="1" />

    <!-- Keyword Bars -->
    <rect x="505" y="395" width="60" height="10" rx="2" fill="#8EAE9D" opacity="0.5" />
    <rect x="505" y="395" width="50" height="10" rx="2" fill="#4292AC" />

    <rect x="505" y="415" width="60" height="10" rx="2" fill="#8EAE9D" opacity="0.5" />
    <rect x="505" y="415" width="30" height="10" rx="2" fill="#34D399" />

    <rect x="505" y="435" width="60" height="10" rx="2" fill="#8EAE9D" opacity="0.5" />
    <rect x="505" y="435" width="40" height="10" rx="2" fill="#FBBF24" />

    <!-- Floating Elements -->
    <!-- Magnifying Glass -->
    <g transform="translate(100, 320)">
      <circle cx="0" cy="0" r="30" fill="#4292AC" opacity="0.2" stroke="#4292AC" stroke-width="5" />
      <path d="M20 20 L40 40" stroke="#4292AC" stroke-width="5" stroke-linecap="round" />
    </g>

    <!-- Page Ranking Visualization -->
    <g transform="translate(700, 200)">
      <!-- First page position -->
      <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#2E5944" opacity="0.8" />
      <text x="0" y="5" font-family="Arial" font-size="18" fill="#FFFFFF" text-anchor="middle">#1</text>

      <!-- Arrow down -->
      <path d="M0 25 L0 45" stroke="#2E5944" stroke-width="3" stroke-linecap="round" />
      <path d="M-10 35 L0 45 L10 35" stroke="#2E5944" stroke-width="3" stroke-linecap="round" fill="none" />

      <!-- Second position -->
      <rect x="-25" y="55" width="50" height="30" rx="5" fill="#4292AC" opacity="0.7" />
      <text x="0" y="75" font-family="Arial" font-size="18" fill="#FFFFFF" text-anchor="middle">#2</text>
    </g>

    <!-- Keywords Cloud -->
    <g transform="translate(700, 350)">
      <ellipse cx="0" cy="0" rx="50" ry="30" fill="#FFFFFF" stroke="#4292AC" stroke-width="2" opacity="0.8" />
      <rect x="-30" y="-10" width="60" height="20" rx="5" fill="#F7F3E8" opacity="0.8" />
      <rect x="-20" y="-5" width="40" height="10" rx="2" fill="#2E5944" opacity="0.6" />
    </g>

    <!-- Target/Goal Visualization -->
    <g transform="translate(680, 450)">
      <circle cx="0" cy="0" r="25" fill="#FFFFFF" stroke="#2E5944" stroke-width="2" />
      <circle cx="0" cy="0" r="15" fill="#FFFFFF" stroke="#2E5944" stroke-width="2" />
      <circle cx="0" cy="0" r="5" fill="#34D399" />
    </g>

    <!-- Connecting Lines -->
    <path d="M120 320 C150 280, 170 260, 180 260" stroke="#D5E6EC" stroke-width="1.5" stroke-dasharray="4,4" />
    <path d="M680 200 C650 210, 640 230, 630 240" stroke="#D5E6EC" stroke-width="1.5" stroke-dasharray="4,4" />
    <path d="M680 450 C640 400, 630 390, 615 380" stroke="#D5E6EC" stroke-width="1.5" stroke-dasharray="4,4" />
  </svg>
</template>

<script>
export default {
  name: 'SeoSvg'
}
</script>
