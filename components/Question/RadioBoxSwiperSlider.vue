<template>
  <div class="pb-16">
    <div class="neiros__kviz_polls_h1">Первый вопрос по данной теме?</div>
    <div class="neiros___swiper_slider_polls step radio-block active">
      <!-- <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <label tabindex="0">
              <input type="radio" name="b-radio" value="вопрос 1" />
              <div class="swiper-slide-block">
                <div><img src="images/polls-img.JPG" /></div>
                <span>Текст описывающие данный пункт1</span>
              </div>
            </label>
          </div>
          <div class="swiper-slide">
            <label tabindex="0">
              <input type="radio" name="b-radio" value="вопрос 2" />
              <div class="swiper-slide-block">
                <div><img src="images/polls-img-2.JPG" /></div>
                <span>Продвижение бизнеса</span>
              </div>
            </label>
          </div>
          <div class="swiper-slide">
            <label tabindex="0">
              <input type="radio" name="b-radio" value="вопрос 1" />
              <div class="swiper-slide-block">
                <div><img src="images/polls-img.JPG" /></div>
                <span>Текст описывающие данный пункт</span>
              </div>
            </label>
          </div>
          <div class="swiper-slide">
            <label tabindex="0">
              <input type="radio" name="b-radio" value="вопрос 1" />
              <div class="swiper-slide-block">
                <div><img src="images/polls-img.JPG" /></div>
                <span>Текст описывающие данный пункт</span>
              </div>
            </label>
          </div>

          <div class="swiper-slide">
            <label tabindex="0">
              <input type="radio" name="b-radio" value="вопрос 1" />
              <div class="swiper-slide-block">
                <div><img src="images/polls-img.JPG" /></div>
                <span>Текст описывающие данный пункт</span>
              </div>
            </label>
          </div>
        </div>
        <div class="swiper-scrollbar"></div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> -->
      <swiper
        ref="my-swiper"
        class="swiper"
        :options="swiperOption"
        @slideChange="slideChange"
      >
        <swiper-slide v-for="slide in slides" :key="slide.id" class="my-slide">
          <!-- <img height="100%" :src="slide.img" alt="" /> -->
          <label tabindex="0">
            <input type="radio" name="b-radio" value="вопрос 1" />
            <div class="swiper-slide-block select-poll">
              <div><img :src="slide.img" /></div>
              <span>Текст описывающие данный пункт1</span>
            </div>
          </label>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="my-swiper-button-prev" @click="prev">
          <img src="~/assets/images/row-swiper-left.PNG" alt="" />
        </div>
        <div slot="button-next" class="my-swiper-button-next" @click="next">
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

SwiperClass.use([Pagination])

export default {
  name: 'RadioBoxSwiperSlider',
  components: { Swiper, SwiperSlide },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    slides: [
      {
        id: 1,
        img: '/images/polls-img.JPG',
        text: 'Текст описывающие данный пункт1',
      },
      {
        id: 2,
        img: '/images/polls-img-2.JPG',
        text: 'Продвижение бизнеса',
      },
      {
        id: 3,
        img: '/images/polls-img.JPG',
        text: 'Текст описывающие данный пункт2',
      },
      {
        id: 4,
        img: '/images/polls-img.JPG',
        text: 'Продвижение бизнеса2',
      },
    ],
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
