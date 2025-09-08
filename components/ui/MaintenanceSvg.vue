<!-- MaintenanceSvg.vue -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none">
    <!-- Background elements -->
    <rect x="100" y="100" width="600" height="400" rx="20" fill="#EDF5F0" opacity="0.3" />
    <circle cx="200" cy="150" r="50" fill="#4292AC" opacity="0.1" />
    <circle cx="650" cy="450" r="70" fill="#2E5944" opacity="0.1" />

    <!-- Modern Server Dashboard -->
    <rect x="200" y="150" width="400" height="300" rx="12" fill="#FFFFFF" stroke="#2E5944" stroke-width="3" />

    <!-- Dashboard header -->
    <rect x="200" y="150" width="400" height="50" rx="12" fill="#2E5944" />
    <circle cx="230" cy="175" r="15" fill="#34D399" />
    <rect x="260" y="167" width="100" height="16" rx="4" fill="#FFFFFF" opacity="0.9" />
    <rect x="520" y="167" width="60" height="16" rx="8" fill="#FFFFFF" opacity="0.5" />

    <!-- Server monitoring section -->
    <rect x="220" y="220" width="360" height="100" rx="8" fill="#F7F3E8" />

    <!-- Server status indicators -->
    <rect x="240" y="235" width="100" height="25" rx="4" fill="#FFFFFF" stroke="#D5E6EC" stroke-width="2" />
    <circle cx="255" cy="247" r="8" fill="#34D399" />
    <rect x="270" y="242" width="60" height="10" rx="2" fill="#2D2D2D" opacity="0.7" />

    <rect x="240" y="270" width="100" height="25" rx="4" fill="#FFFFFF" stroke="#D5E6EC" stroke-width="2" />
    <circle cx="255" cy="282" r="8" fill="#FBBF24" />
    <rect x="270" y="277" width="60" height="10" rx="2" fill="#2D2D2D" opacity="0.7" />

    <rect x="350" y="235" width="100" height="25" rx="4" fill="#FFFFFF" stroke="#D5E6EC" stroke-width="2" />
    <circle cx="365" cy="247" r="8" fill="#F87171" />
    <rect x="380" y="242" width="60" height="10" rx="2" fill="#2D2D2D" opacity="0.7" />

    <rect x="350" y="270" width="100" height="25" rx="4" fill="#FFFFFF" stroke="#D5E6EC" stroke-width="2" />
    <circle cx="365" cy="282" r="8" fill="#34D399" />
    <rect x="380" y="277" width="60" height="10" rx="2" fill="#2D2D2D" opacity="0.7" />

    <rect x="460" y="235" width="100" height="60" rx="4" fill="#4292AC" opacity="0.2" />

    <!-- CPU/Memory usage bars -->
    <rect x="470" y="245" width="80" height="10" rx="5" fill="#FFFFFF" opacity="0.8" />
    <rect x="470" y="245" width="60" height="10" rx="5" fill="#34D399" />

    <rect x="470" y="265" width="80" height="10" rx="5" fill="#FFFFFF" opacity="0.8" />
    <rect x="470" y="265" width="45" height="10" rx="5" fill="#FBBF24" />

    <rect x="470" y="285" width="80" height="10" rx="5" fill="#FFFFFF" opacity="0.8" />
    <rect x="470" y="285" width="70" height="10" rx="5" fill="#4292AC" />

    <!-- Activity logs section -->
    <rect x="220" y="340" width="360" height="90" rx="8" fill="#F7F3E8" />

    <!-- Log entries -->
    <rect x="240" y="350" width="320" height="16" rx="2" fill="#FFFFFF" />
    <rect x="245" y="358" width="10" height="4" rx="1" fill="#34D399" />
    <rect x="260" y="355" width="290" height="6" rx="1" fill="#8EAE9D" opacity="0.7" />

    <rect x="240" y="375" width="320" height="16" rx="2" fill="#FFFFFF" />
    <rect x="245" y="383" width="10" height="4" rx="1" fill="#FBBF24" />
    <rect x="260" y="380" width="270" height="6" rx="1" fill="#8EAE9D" opacity="0.7" />

    <rect x="240" y="400" width="320" height="16" rx="2" fill="#FFFFFF" />
    <rect x="245" y="408" width="10" height="4" rx="1" fill="#F87171" />
    <rect x="260" y="405" width="280" height="6" rx="1" fill="#8EAE9D" opacity="0.7" />

    <!-- Floating maintenance elements -->
    <!-- Stylized gears -->
    <g transform="translate(150, 350)">
      <!-- Main gear -->
      <circle cx="0" cy="0" r="40" fill="#4292AC" opacity="0.9" />
      <circle cx="0" cy="0" r="15" fill="#1B3D2F" />

      <!-- Gear teeth - more modern design -->
      <path d="M0 -40 L-5 -50 L5 -50 Z" fill="#4292AC" transform="rotate(0, 0, 0)" />
      <path d="M0 -40 L-5 -50 L5 -50 Z" fill="#4292AC" transform="rotate(45, 0, 0)" />
      <path d="M0 -40 L-5 -50 L5 -50 Z" fill="#4292AC" transform="rotate(90, 0, 0)" />
      <path d="M0 -40 L-5 -50 L5 -50 Z" fill="#4292AC" transform="rotate(135, 0, 0)" />
      <path d="M0 -40 L-5 -50 L5 -50 Z" fill="#4292AC" transform="rotate(180, 0, 0)" />
      <path d="M0 -40 L-5 -50 L5 -50 Z" fill="#4292AC" transform="rotate(225, 0, 0)" />
      <path d="M0 -40 L-5 -50 L5 -50 Z" fill="#4292AC" transform="rotate(270, 0, 0)" />
      <path d="M0 -40 L-5 -50 L5 -50 Z" fill="#4292AC" transform="rotate(315, 0, 0)" />
    </g>

    <!-- Small gear -->
    <g transform="translate(650, 250)">
      <circle cx="0" cy="0" r="25" fill="#2E5944" opacity="0.8" />
      <circle cx="0" cy="0" r="10" fill="#1B3D2F" />

      <path d="M0 -25 L-3 -32 L3 -32 Z" fill="#2E5944" transform="rotate(0, 0, 0)" />
      <path d="M0 -25 L-3 -32 L3 -32 Z" fill="#2E5944" transform="rotate(60, 0, 0)" />
      <path d="M0 -25 L-3 -32 L3 -32 Z" fill="#2E5944" transform="rotate(120, 0, 0)" />
      <path d="M0 -25 L-3 -32 L3 -32 Z" fill="#2E5944" transform="rotate(180, 0, 0)" />
      <path d="M0 -25 L-3 -32 L3 -32 Z" fill="#2E5944" transform="rotate(240, 0, 0)" />
      <path d="M0 -25 L-3 -32 L3 -32 Z" fill="#2E5944" transform="rotate(300, 0, 0)" />
    </g>

    <!-- Tools elements -->
    <g transform="translate(650, 350)">
      <!-- Stylized wrench -->
      <path d="M-20 -15 C-25 -20, -25 -30, -15 -35 L5 -15 C-5 -10, -5 0, -15 5 Z" fill="#4292AC" opacity="0.9"
        transform="rotate(-15, 0, 0)" />
      <path d="M5 -15 L25 -35 L40 -20 L20 0 Z" fill="#4292AC" opacity="0.9" transform="rotate(-15, 0, 0)" />
    </g>

    <!-- Update indicator -->
    <g transform="translate(650, 450)">
      <circle cx="0" cy="0" r="30" fill="#EDF5F0" stroke="#2E5944" stroke-width="2" />
      <path d="M-15 0 C-15 -15, 0 -20, 15 -10 C30 0, 15 20, 0 15 C-15 10, -20 0, -15 0 Z" fill="none" stroke="#2E5944"
        stroke-width="2" />
      <path d="M-5 -5 L5 -15 L15 -5" stroke="#2E5944" stroke-width="2" stroke-linecap="round" />
    </g>

    <!-- Connection lines -->
    <path d="M150 350 C170 300, 250 320, 270 280" stroke="#D5E6EC" stroke-width="2" stroke-dasharray="5,5" />
    <path d="M650 250 C600 280, 620 310, 580 340" stroke="#D5E6EC" stroke-width="2" stroke-dasharray="5,5" />
    <path d="M650 350 C620 330, 610 370, 580 390" stroke="#D5E6EC" stroke-width="2" stroke-dasharray="5,5" />

    <!-- Security shield -->
    <g transform="translate(150, 250)">
      <path d="M0 -30 L-25 -15 L-25 15 L0 30 L25 15 L25 -15 Z" fill="#2E5944" opacity="0.7" />
      <path d="M0 -20 L-15 -10 L-15 10 L0 20 L15 10 L15 -10 Z" fill="#34D399" opacity="0.5" />
      <path d="M0 0 L-5 -8 L5 -8 Z" fill="#FFFFFF" opacity="0.9" transform="translate(0, 5)" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'MaintenanceSvg'
}
</script>
