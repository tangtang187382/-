<template>
  <div class="carousel" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <!-- 轮播容器 -->
    <div 
      class="carousel-wrapper" 
      :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: transitionDuration + 'ms ease' }"
    >
      <div class="carousel-slide" v-for="(item, index) in slides" :key="index">
        <img :src="item.imgUrl" :alt="'轮播图' + (index + 1)" class="slide-img">
        <div class="slide-desc" v-if="item.desc">{{ item.desc }}</div>
      </div>
    </div>

    <!-- 左右箭头 -->
    <button class="carousel-btn prev-btn" @click="prevSlide">&lt;</button>
    <button class="carousel-btn next-btn" @click="nextSlide">&gt;</button>

    <!-- 指示器 -->
    <div class="carousel-indicators">
      <span 
        class="indicator" 
        v-for="(item, index) in slides" 
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="switchToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  props: {
    // 轮播数据：数组，每项包含 imgUrl（图片地址）、desc（可选描述）
    slides: {
      type: Array,
      validator: (value) => value.length > 0
    },
    // 自动播放间隔（毫秒）
    autoPlaySpeed: {
      type: Number,
      default: 3000
    },
    // 切换动画时长（毫秒）
    transitionDuration: {
      type: Number,
      default: 500
    },
    // 是否循环播放
    loop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      autoPlayTimer: null
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
  methods: {
    // 开始自动播放
    startAutoPlay() {
      if (!this.loop) return;
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoPlaySpeed);
    },

    // 停止自动播放
    stopAutoPlay() {
      clearInterval(this.autoPlayTimer);
    },

    // 上一张
    prevSlide() {
      this.currentIndex = this.loop 
        ? (this.currentIndex - 1 + this.slides.length) % this.slides.length
        : Math.max(0, this.currentIndex - 1);
    },

    // 下一张
    nextSlide() {
      this.currentIndex = this.loop 
        ? (this.currentIndex + 1) % this.slides.length
        : Math.min(this.slides.length - 1, this.currentIndex + 1);
    },

    // 切换到指定索引
    switchToSlide(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-desc {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 16px;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #fff;
  width: 30px;
  border-radius: 5px;
}
</style>