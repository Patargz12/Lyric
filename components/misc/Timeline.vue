<template>
  <section class="max-w-6xl mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold text-center mb-16">Our History</h2>
    
    <div class="relative">
      <!-- Vertical Timeline Line -->
      <div class="absolute left-1/2 w-0.5 bg-gray-200 h-full"></div>

      <!-- Timeline Items -->
      <div class="space-y-24">
        <!-- 1964 -->
        <div class="relative grid grid-cols-2 gap-8 items-center">
          <div class="text-right">
            <img 
              src="/history_1.png" 
              alt="Lyric Company establishment 1964"
              class="ml-auto w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div class="relative pl-12">
            <!-- Timeline Dot -->
            <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
            <h3 class="text-red-500 text-3xl font-bold mb-4">1964</h3>
            <p class="text-gray-600 leading-relaxed">
              Lyric Company was established by Mr. Severo Panganiban as a supplier of parts and accessories to piano manufacturers in the Philippines. This marked the beginning of its journey in the music industry.
            </p>
          </div>
        </div>

        <!-- 1968 -->
        <div class="relative grid grid-cols-2 gap-8 items-center">
          <div class="relative pr-12">
            <!-- Timeline Dot -->
            <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
            <h3 class="text-red-500 text-3xl font-bold mb-4">1968</h3>
            <p class="text-gray-600 leading-relaxed">
              Lyric evolved from being a parts supplier to manufacturing its own pianos for the domestic market. A few years later, the company exported its first set of pianos under its own label expanding its reach beyond the Philippines.
            </p>
          </div>
          <div>
            <img 
              src="/history_2.png" 
              alt="Piano manufacturing 1968"
              class="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        <!-- 1970s-1980s -->
        <div class="relative grid grid-cols-2 gap-8 items-center">
          <div class="text-right">
            <img 
              src="/history_3.png" 
              alt="Piano store expansion 1970s"
              class="ml-auto w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div class="relative pl-12">
            <!-- Timeline Dot -->
            <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
            <h3 class="text-red-500 text-3xl font-bold mb-4">1970s-1980s</h3>
            <p class="text-gray-600 leading-relaxed">
              To meet local demand, Lyric acquired distributorship rights for Samick and Kohler & Campbell pianos, followed by Wurlitzer and Baldwin pianos. This allowed them to offer a wider range of musical instruments to the Philippine market.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No JavaScript logic needed for this simple UI
</script>
