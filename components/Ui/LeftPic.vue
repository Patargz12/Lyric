<template>
  <section class="bg-primary-500 w-full min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <!-- Image Section -->
        <div class="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
          <img 
            src="/home_pic1.jpg"
            alt="Guitarist performing with electric guitar"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content Section -->
        <div class="text-white space-y-6 md:space-y-8 max-w-xl">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            WIDE SELECTION OF INSTRUMENTS
          </h2>
          
          <div class="space-y-4">
            <p class="text-white/90 text-lg">
              Explore the boundless possibilities of expression as you indulge in the vast array of instruments meticulously crafted to ignite your passion for music.
            </p>
            
            <p class="text-white/90 text-lg">
              Whether you're a seasoned musician or an aspiring virtuoso, let the diverse repertoire of instruments at LYRIC be your gateway to experiencing the sheer beauty and magic of music in its purest form.
            </p>
          </div>

          <button class="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-bold text-sm tracking-wider hover:bg-white/90 transition-colors duration-200">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>