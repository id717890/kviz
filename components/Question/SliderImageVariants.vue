<template>
  <div class="pb-16">
    <div class="neiros__kviz_polls_h1">{{ question.question }}</div>
    <div class="neiros___swiper_slider_polls step radio-block active">
      <swiper
        v-if="variants"
        ref="my-swiper"
        class="swiper"
        :options="swiperOption"
        @slideChange="slideChange"
        @click-slide="clickSlide"
      >
        <swiper-slide
          v-for="slide in variants"
          :key="slide.id"
          class="my-slide"
          @click="clickSlide"
        >
          <!-- <img height="100%" :src="slide.img" alt="" /> -->
          <label tabindex="0" class="d-block">
            <input type="radio" name="b-radio" value="вопрос 1" />
            <div
              :class="{ 'select-poll': slide.isSelected }"
              class="swiper-slide-block"
            >
              <!-- <div><img :src="slide.img" /></div> -->
              <div><img src="/images/polls-img.JPG" /></div>
              <span>{{ slide.text }}</span>
            </div>
          </label>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div
          slot="button-prev"
          class="my-swiper-button-prev"
          @click.prevent="prev"
        >
          <img src="~/assets/images/row-swiper-left.PNG" alt="" />
        </div>
        <div
          slot="button-next"
          class="my-swiper-button-next"
          @click.prevent="next"
        >
          <img src="~/assets/images/row-swiper-right.PNG" alt="" />
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination } from 'swiper/swiper.esm'

import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import saveAnswerMixin from '~/helpers/mixins/saveAnswer'

SwiperClass.use([Pagination])

export default {
  name: 'SliderImageVariants',
  components: { Swiper, SwiperSlide },
  mixins: [saveAnswerMixin],
  data: () => ({
    swiperOption: {
      followFinger: false,
      allowTouchMove: true,
      updateOnWindowResize: false,
      // slidesOffsetBefore: 35,
      // autoHeight: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: true,
      // width: 200,
      // height:300,
      // centeredSlides: true,
      // spaceBetween: 8,
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
  // data: () => ({
  //   slides: [
  //     {
  //       id: 1,
  //       img: '/images/polls-img.JPG',
  //       text: 'Текст описывающие данный пункт1',
  //     },
  //     {
  //       id: 2,
  //       img: '/images/polls-img-2.JPG',
  //       text: 'Продвижение бизнеса',
  //     },
  //     {
  //       id: 3,
  //       img: '/images/polls-img.JPG',
  //       text: 'Текст описывающие данный пункт2',
  //     },
  //     {
  //       id: 4,
  //       img: '/images/polls-img.JPG',
  //       text: 'Продвижение бизнеса2',
  //     },
  //   ],

  // }),
  computed: {
    swiper() {
      return this.$refs['my-swiper'].$swiper
    },
  },
  methods: {
    prev() {
      this.swiper.slidePrev()
    },
    next() {
      this.swiper.slideNext()
    },
    slideChange() {},
  },
}
</script>
