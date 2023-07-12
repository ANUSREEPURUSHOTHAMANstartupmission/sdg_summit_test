<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import {Autoplay, Navigation} from 'swiper';
    import 'swiper/css';
    import "swiper/css/navigation";
    import programs from './data/programs.json';
</script>

<div class="px-16 mt-8">
  <Swiper
      modules="{[Autoplay, Navigation]}"
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      navigation={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
      }}
      breakpoints={{
          "768": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          "1300": {
            slidesPerView: 1,
            spaceBetween: 50,
          },
      }}
  >
      {#each programs as program}
          <SwiperSlide>
           
            <main class=" relative py-24 min-h-screen flex flex-col items-center justify-center" id="home" >
                <div class="absolute -z-10 w-full h-full top-0 left-0 bg-black bg-opacity-40"></div>
              <div class="absolute -z-20 bg-cover bg-center bg-no-repeat w-full h-full top-0 left-0 " style="background-image:url('/img/{program.image}')"></div>  
        
              <div class="container mx-auto text-white  space-y-3 md:px-10 px-5">
                
                <!-- <div class="   absolute   rounded-full h-56 w-56 float-right  z-10 block">
                    <img src="img/sss1.png" class=" w-80 h-80">
                </div>
                 -->
                
                  
        
                <!-- <img src="/img/SDG Summit Logo-White1.svg" alt="logo" class=" h-20 ml-2 md:mb-8 mb-4"> -->
                <div  class="text-5xl md:text-6xl font-black font-goals">
                    SDG IMPACT SUMMIT 
                </div>
                <div>
                  <div class="text-xl font-data">28<sup>th</sup> October 2023</div>
                </div>
                <div>
                    <div class="text-xl flex ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 flex mt-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                       <p class="pl-1 font-data">Digital Hub, Kochi</p>
                    </div>
                  </div>
                <div class=" space-y-2 md:space-x-4 md:max-w-4xl">
                        <a  class="font-data px-10 text-lg rounded-3xl py-4 bg-green-500 inline-block " href="/" target="_blank">Register Now</a>
                </div>
                
                
              </div>
            <div class=" absolute inset-x-0 bottom-0">
                <img src="img/SDG Colors-Resized.svg" alt=""> 
            </div>
            
        
            </main>
            
            </SwiperSlide>
      {/each}
  </Swiper>
</div>
      