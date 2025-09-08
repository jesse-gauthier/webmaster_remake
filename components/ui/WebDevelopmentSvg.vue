<!-- WebDevelopmentSvg.vue -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none">
    <!-- Code window -->
    <rect x="150" y="100" width="500" height="350" rx="8" fill="#1B3D2F" />

    <!-- Window header -->
    <rect x="150" y="100" width="500" height="30" rx="8" fill="#2E5944" />

    <!-- Window buttons -->
    <circle cx="175" cy="115" r="6" fill="#F87171" />
    <circle cx="195" cy="115" r="6" fill="#FBBF24" />
    <circle cx="215" cy="115" r="6" fill="#34D399" />

    <!-- Code lines -->
    <rect x="170" y="150" width="100" height="12" rx="2" fill="#D5E6EC" opacity="0.7" />
    <rect x="280" y="150" width="50" height="12" rx="2" fill="#4292AC" />
    <rect x="340" y="150" width="120" height="12" rx="2" fill="#F7F3E8" opacity="0.7" />
    <rect x="470" y="150" width="30" height="12" rx="2" fill="#34D399" />
    <rect x="510" y="150" width="20" height="12" rx="2" fill="#F7F3E8" opacity="0.7" />

    <!-- Code line 2 -->
    <rect x="190" y="180" width="80" height="12" rx="2" fill="#D5E6EC" opacity="0.7" />
    <rect x="280" y="180" width="60" height="12" rx="2" fill="#4292AC" />
    <rect x="350" y="180" width="90" height="12" rx="2" fill="#FBBF24" />
    <rect x="450" y="180" width="10" height="12" rx="2" fill="#F7F3E8" opacity="0.7" />

    <!-- Code line 3 -->
    <rect x="190" y="210" width="60" height="12" rx="2" fill="#D5E6EC" opacity="0.7" />
    <rect x="260" y="210" width="100" height="12" rx="2" fill="#4292AC" />

    <!-- Code line 4 -->
    <rect x="210" y="240" width="70" height="12" rx="2" fill="#D5E6EC" opacity="0.7" />
    <rect x="290" y="240" width="40" height="12" rx="2" fill="#F87171" />
    <rect x="340" y="240" width="130" height="12" rx="2" fill="#F7F3E8" opacity="0.5" />

    <!-- Code line 5 -->
    <rect x="210" y="270" width="60" height="12" rx="2" fill="#D5E6EC" opacity="0.7" />
    <rect x="280" y="270" width="110" height="12" rx="2" fill="#34D399" />

    <!-- Code line 6 -->
    <rect x="190" y="300" width="120" height="12" rx="2" fill="#D5E6EC" opacity="0.7" />

    <!-- Code line 7 -->
    <rect x="170" y="330" width="90" height="12" rx="2" fill="#D5E6EC" opacity="0.7" />
    <rect x="270" y="330" width="50" height="12" rx="2" fill="#4292AC" />
    <rect x="330" y="330" width="40" height="12" rx="2" fill="#F7F3E8" opacity="0.7" />

    <!-- Floating elements -->
    <rect x="550" y="200" width="60" height="60" rx="30" fill="#4292AC" opacity="0.2" />
    <path d="M540 360 L560 330 L580 360 Z" fill="#2E5944" opacity="0.3" />
    <circle cx="530" cy="280" r="15" fill="#34D399" opacity="0.2" />
  </svg>
</template>

<script>
export default {
  name: 'WebDevelopmentSvg'
}
</script>
