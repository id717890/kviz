<template>
  <div class="pb-16">
    <!-- <div class="neiros__kviz_polls_h1">{{ question.question }}</div>
    <slot></slot> -->
    <div class="d-flex flex-row flex-nowrap">
      <div class="neiros__kviz_polls_h1 flex-grow-1">
        {{ question.question }}
      </div>
      <slot></slot>
    </div>
    <div class="neiros___swiper_slider_polls step radio-block active">
      <swiper
        v-if="variants"
        ref="my-swiper"
        class="swiper"
        :options="swiperConfig"
        @click-slide="debouncedClickSlide"
        @slide-change="slideChange"
      >
        <swiper-slide
          v-for="(slide, index) in variants"
          :key="slide.id"
          :ref="'my-slide-' + index"
          class="my-slide mr-3"
        >
          <!-- <img height="100%" :src="slide.img" alt="" /> -->
          <label tabindex="0" class="d-block">
            <input type="radio" name="b-radio" value="вопрос 1" />
            <div
              :class="{ 'select-poll': slide.isSelected }"
              class="swiper-slide-block"
              :style="cssVars"
            >
              <svg-slider />

              <!-- <div><img :src="slide.img" /></div> -->
              <div class="d-flex justify-content-center align-items-center">
                <img :src="slide.src" />
                <!-- <img src="/images/polls-img.JPG" /> -->
              </div>
              <span>{{ slide.text }}</span>
            </div>
          </label>
        </swiper-slide>
        <div slot="scrollbar" class="swiper-scrollbar my-swiper-scrollbar">
          <div class="swiper-scrollbar-drag" :style="cssVars"></div>
        </div>
        <!-- <div slot="pagination" class="swiper-pagination"></div> -->
        <div
          v-if="isShowArrows"
          slot="button-prev"
          class="my-swiper-button-prev"
          @click.prevent="prev"
        >
          <ArrowLeft v-if="showLeftBtn" class="slider-arrow-left" />
          <!-- <img src="/images/row-swiper-left.PNG" alt="" /> -->
        </div>
        <div
          v-if="isShowArrows"
          slot="button-next"
          class="my-swiper-button-next"
          @click.prevent="next"
        >
          <ArrowLeft v-if="showRightBtn" class="slider-arrow-left rotate180x" />

          <!-- <img src="/images/row-swiper-right.PNG" alt="" /> -->
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination, Scrollbar } from 'swiper/swiper.esm'
import { mapState } from 'vuex'
import { debounce, cloneDeep } from 'lodash'

import Constants from '~/constants'
import SvgSlider from '~/components/SVG/SliderVariantSvg'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'
import ArrowLeft from '~/components/SVG/AngleCircleArrowLeft'

SwiperClass.use([Pagination, Scrollbar])

export default {
  name: 'SliderImageVariants',
  components: { Swiper, SwiperSlide, SvgSlider, ArrowLeft },
  mixins: [saveAnswerMixin],
  data: () => ({
    showLeftBtn: false,
    showRightBtn: true,
    swiperOption: {
      slidesOffsetAfter: 50,
      direction: 'horizontal',
      mousewheel: true,
      // followFinger: false,
      allowTouchMove: true,
      updateOnWindowResize: false,
      grabCursor: true,
      slidesPerView: 4,
      // slidesPerGroup: 1,
      slidesPerGroupSkip: 1,
      // loop: true,
      // breakpoints: { 769: { slidesPerView: 4, slidesPerGroup: 1 } },
      scrollbar: {
        el: '.swiper-scrollbar',
        clickable: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }),
  computed: {
    ...mapState({
      color: (state) =>
        state?.quiz?.steps?.step5?.color || Constants.DEFAULT_COLOR_CHECK_BOX,
      size: (state) => state?.quiz?.size,
    }),
    isShowArrows() {
      return this.variants?.length > 4
    },
    swiperConfig() {
      const config = cloneDeep(this.swiperOption)
      switch (this.size) {
        case Constants?.SIZES?.XS:
          config.slidesPerView = 1
          break
        case Constants?.SIZES?.MD:
          config.slidesPerView = 2
          break
        default:
          if (this.variants?.length >= 4) {
            config.slidesPerView = 4
          } else {
            config.slidesPerView = this.variants?.length
          }
          break
      }
      return config
    },
    cssVars() {
      return {
        '--slide-border-color': this.color,
        '--color-fill': this.color,
      }
    },
    swiper() {
      return this.$refs['my-swiper'].$swiper
    },
  },
  created() {
    this.debouncedWheel = debounce(this.handleScroll, 100)
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    const el = document.getElementsByClassName('swiper-container')[0]
    el.addEventListener('wheel', this.handleScroll, true)
    //   .addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    const el = document.getElementsByClassName('swiper-container')[0]
    // document
    //   .getElementsByClassName('swiper-container')
    el?.removeEventListener('wheel', this.handleScroll)
  },
  methods: {
    // setLastSlideWidth() {
    //   try {
    //     const index = this.variants?.length - 1
    //     const el = this.$refs['my-slide-' + index][0]
    //     if (el) {
    //       console.log(el.$el.style.width)
    //       el.$el.style.width = `${
    //         Number(el.$el.style.width.replace('px', '')) - 13
    //       }px`
    //       console.log(el.$el.style.width)
    //     }
    //   } catch {
    //     console.log('setLastSlideWidth error')
    //   }
    // },
    handleScroll(event) {
      event.preventDefault()
      // event.stopPropagation()
      // event.stopImmediatePropagation()
      const { deltaY } = event
      if (deltaY > 0) {
        this.next()
      } else if (deltaY < 0) {
        this.prev()
      }
    },
    slideChange(event) {
      console.log(event)
      const { isEnd, isBeginning } = event
      this.showLeftBtn = true
      this.showRightBtn = true
      if (isEnd) {
        this.showLeftBtn = true
        this.showRightBtn = false
      } else if (isBeginning) {
        this.showLeftBtn = false
        this.showRightBtn = true
      }
    },
    prev() {
      this.swiper.slidePrev()
    },
    next() {
      this.swiper.slideNext()
    },
  },
}
</script>

<style scoped>
.swiper-slide .swiper-slide-block:hover,
.swiper-slide .swiper-slide-block.select-poll {
  border: 1px solid var(--slide-border-color) !important;
}

.swiper-scrollbar-drag {
  background: var(--slide-border-color) !important;
}
</style>
