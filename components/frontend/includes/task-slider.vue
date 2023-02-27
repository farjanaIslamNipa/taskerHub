<template>
  <div>
    <div class="d-flex justify-content-between pb-2 px-2">
        <div class="">
          <NuxtLink class="slider-category" to="/listing">Cleaning <span class="caret-right"><i class="fa-solid fa-angle-right"></i></span></NuxtLink>
        </div>
        <div class="d-flex align-items-center">
          <div class="caret-navigation me-1" @click="showPrev"><span><i class="fa-solid fa-angle-left"></i></span></div>
          <div class="caret-navigation" @click="showNext"><span><i class="fa-solid fa-angle-right"></i></span></div>
        </div>
      </div>

      <carousel  
      ref="carousel" 
      :touch-drag=true
      :pagination-enabled=false
      :mouse-drag="true"
      :speed=1000
      :per-page-custom="[[480, 2], [768, 3],[1024, 4],[1199, 5]]">
        <slide>
          <FrontendIncludesTaskerCard />
        </slide>
        <slide>
          <FrontendIncludesTaskerCard />
        </slide>
        <slide>
          <FrontendIncludesTaskerCard />
        </slide>
        <slide>
          <FrontendIncludesTaskerCard />
        </slide>
        <slide>
          <FrontendIncludesTaskerCard />
        </slide>
        <slide>
          <FrontendIncludesTaskerCard />
        </slide>
        <slide>
          <FrontendIncludesTaskerCard />
        </slide>
        <slide>
          <FrontendIncludesTaskerCard />
        </slide>
      </carousel>
  </div>
</template>

<script>
    import { Carousel, Slide } from '@jambonn/vue-concise-carousel'
  import '@jambonn/vue-concise-carousel/dist/vue-concise-carousel.css'
  export default {
    name: 'TaskSlider',
    components: { Carousel, Slide },
    methods: {
      showNext() {
        this.$refs.carousel.handleNavigation('forward')
      },
      showPrev() {
        this.$refs.carousel.handleNavigation('backward')
      },
    },
  }
</script>

<style scoped>
.slider-category{
  color: rgb(34, 34, 34);
  font-size: 25px;
  font-weight: 600;
}
.slider-category:hover{
  border-bottom: 2px solid var(--brandColor);
}
.caret-right{
  font-size: 15px;
}
.caret-navigation{
  height: 26px;
  width: 26px;
  border: 1px solid var(--brandColor);
  border-radius: 50%;
  color: var(--brandColor);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
}
.caret-navigation:hover{
  background-color: var(--brandColor);
  color: white;
}
.caret-navigation span{
  line-height: 0;
}
.slider-img{
  height: 185px;
  width: 340px;
  object-fit: cover;
}
.slider-img:hover{
  filter: brightness(70%);
  transition: all 0.3s ease;
}
@media(max-width:424px){
  .slider-img{
    height: 120px;
  }
}
</style>