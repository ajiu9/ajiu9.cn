<template>
  <svg class="svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Ajiu9</title>
    <mask id="mask0_634_3" style="mask-type:alpha" width="47" height="80">
      <path
        d="M23.5125 22.9252C33.7594 11.9188 21.3168 -4.95774 7.41017 3.11364C-6.49649 11.185 3.75055 40.5355 23.5125 22.9252ZM23.5125 22.9252C79.8707 -24.0356 12.5336 46.4057 12.5336 69.1523C12.5336 91.8989 36.8153 72.5834 16.9251 38.3343"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_634_3)">
      <path
        class="path1"
        d="M23.5125 22.9252C33.7594 11.9188 21.3168 -4.95774 7.41017 3.11364C-6.49649 11.185 3.75055 40.5355 23.5125 22.9252ZM23.5125 22.9252C79.8707 -24.0356 12.5336 46.4057 12.5336 69.1523C12.5336 91.8989 36.8153 72.5834 16.9251 38.3343"
        stroke="black" stroke-width="3.5" stroke-linecap="round"
      />
    </g>
  </svg>
</template>

<style scoped>
@media (prefers-reduced-motion) {
  .path1 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@media print {
  .path1 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@keyframes grow {
  0% {
    stroke-dashoffset: 1px;
    stroke-dasharray: 0 160px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    stroke-dasharray: 160px 0;
  }
  85% {
    stroke-dasharray: 160px 0;
  }
  95%,
  to {
    stroke-dasharray: 0 160px;
  }
}
.path1 {
  stroke-dashoffset: 1px;
  stroke-dasharray: 160px 0;
  animation: grow 10s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 0s;
}
.dark .path1 {
  stroke: #fdfdfd;
}
</style>
