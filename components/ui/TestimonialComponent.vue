<template>
  <section class="container-site relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-primary rounded-full animate-bounce-light"></div>
      <div class="absolute -bottom-16 -left-16 w-48 h-48 bg-accent rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
    </div>
    
    <div class="mt-20 relative">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
          💬 Client Success Story
        </span>
        <h3 class="text-3xl md:text-4xl font-bold text-primary mb-4">
          What Our Clients Say
        </h3>
        <p class="text-neutral-text max-w-2xl mx-auto">
          Don't just take our word for it - hear from businesses that have transformed their digital presence with us.
        </p>
      </div>
      
      <!-- Enhanced Testimonial Card -->
      <div class="bg-gradient-to-br from-white via-neutral-cream to-primary-25 rounded-3xl p-8 md:p-12 shadow-2xl border border-primary-100 relative group hover:shadow-3xl transition-all duration-500">
        <!-- Quote decoration -->
        <div class="absolute -top-6 left-8 bg-gradient-to-br from-primary-500 to-primary-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <svg
            class="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path
              d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
            />
          </svg>
        </div>
        
        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <!-- Client Logo/Image -->
          <div class="lg:w-1/3 flex justify-center">
            <div class="relative group-hover:scale-105 transition-transform duration-500">
              <div class="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div
                class="relative w-64 h-64 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white"
              >
                <OptimizedImage
                  :src="countyCooperageLogo"
                  alt="The County Cooperage - Happy Client"
                  :lazy="true"
                  sizes="256px"
                  container-class="w-full h-full"
                  image-class="w-full h-full object-contain p-6"
                />
              </div>
            </div>
          </div>
          
          <!-- Testimonial Content -->
          <div class="lg:w-2/3 text-center lg:text-left">
            <!-- Success Badge -->
            <div class="flex justify-center lg:justify-start mb-6">
              <div
                class="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>Boosted Sales By 400% Year over Year</span>
              </div>
            </div>
            
            <!-- Testimonial Quote -->
            <blockquote class="text-xl md:text-2xl text-primary-dark mb-8 italic leading-relaxed font-medium">
              "Web Masters brings exceptional talent to website design and google
              analytics, constantly leveling up our digital strategies with fresh,
              innovative ideas."
            </blockquote>
            
            <!-- Author Info -->
            <div class="flex items-center justify-center lg:justify-start gap-4">
              <div class="w-1 h-16 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
              <div>
                <p class="font-bold text-xl text-primary mb-1">Joe Thompson</p>
                <p class="text-neutral-600 font-medium">CEO, The County Cooperage</p>
                
                <!-- Star Rating -->
                <div class="flex items-center gap-1 mt-2">
                  <div class="flex text-yellow-400">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span class="text-sm text-neutral-600 ml-1">5.0 out of 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom decorative element -->
        <div class="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-12">
        <p class="text-neutral-600 mb-6">Ready to achieve similar results for your business?</p>
        <a
          href="/portfolio"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          View More Success Stories
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import OptimizedImage from '~/components/ui/OptimizedImage.vue';
import countyCooperageLogo from '@/assets/countycooperage.svg';
</script>
