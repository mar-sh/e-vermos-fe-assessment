<template>
  <ul class="input-tabs tabs-block">
    <div ref="slider-ref" class="slider" />
    <li v-for="(tab, index) in tabs" :key="`${tab.name}-${index}`">
      <!--  When used on elements/components with v-for, the registered reference will be an Array containing DOM nodes or component instances. -->
      <button
        :ref="`tab-button-${index}-ref`"
        :key="`tab-${tab.value}`"
        :disabled="disabled"
        @click="tabChanged($event, index)"
      >
        {{ tab.name }}
      </button>
    </li>
  </ul>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: 'InputTabs',

  props: {
    tabs: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    startingIndex: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      activeIndex: 0,
    }
  },

  watch: {
    startingIndex(val) {
      const activeTab = this.$refs[`tab-button-${this.activeIndex}-ref`][0]
      activeTab.classList.remove('active')

      this.activeIndex = val
      this.initSliderSize()
    },
  },

  mounted() {
    if (this.startingIndex !== 0) {
      this.activeIndex = this.startingIndex
    }

    this.initSliderSize()

    window.addEventListener('resize', debounce(this.adjustOnResize, 300))
  },

  beforeDestroy() {
    window.removeEventListener('resize', debounce(this.adjustOnResize, 300))
  },

  methods: {
    tabChanged(e, index) {
      const selectedTab = e.target
      if (this.activeIndex === index) {
        return
      }

      const slider = this.$refs['slider-ref']
      const activeTab = this.$refs[`tab-button-${this.activeIndex}-ref`][0]

      this.activeIndex = index
      activeTab.classList.remove('active')

      selectedTab.classList.add('active')

      this.getTabValue(selectedTab)
      this.adjustSlider(selectedTab, slider)
    },

    initSliderSize() {
      const slider = this.$refs['slider-ref']
      const tabBtns = this.$refs[`tab-button-${this.activeIndex}-ref`]

      if (tabBtns) {
        const tabBtn = tabBtns[0]
        tabBtn.classList.add('active')

        this.getTabValue(tabBtn)
        this.adjustSlider(tabBtn, slider)
      }
    },

    adjustSlider(tabBtn, slider) {
      this.$nextTick(() => {
        const tabLi = tabBtn && tabBtn.parentElement
        const tabOffset = tabLi && tabLi.offsetLeft
        if (slider) {
          slider.style.transform = `translateX(${tabOffset}px)`
          slider.style.width = `${tabLi.offsetWidth - 1}px`
          slider.style.transition = '300ms'
        }
      })
    },

    adjustOnResize() {
      const slider = this.$refs['slider-ref']
      const tabs = this.$refs[`tab-button-${this.activeIndex}-ref`]

      if (tabs) {
        const activeTab = tabs[0]

        this.adjustSlider(activeTab, slider)
      }
    },

    getTabValue() {
      const foundTab = this.tabs[this.activeIndex]

      this.$emit('input', foundTab)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-tabs {
  max-width: 100%;
  &.tabs-block {
    display: flex;
    align-items: center;
    background-color: whitesmoke;
    list-style: none;
    max-width: 600px;
    overflow-y: hidden;
    height: 54px;
    max-height: 54px;
    position: relative;
    padding: 0;
    border-radius: 6px;

    .slider {
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.3);
      height: 54px;
      max-height: 54px;
      transition: 0ms;
      pointer-events: none;
      background: black;
      border-radius: 6px;
      border: 2px solid transparent;
    }

    li {
      text-align: center;
      flex: auto;
      align-items: center;
      display: flex;
      justify-content: center;
      height: 100%;

      button {
        flex: auto;
        margin: 0;
        background: none;
        height: 100%;
        border: none;
        font-size: 1rem;
        font-weight: 400;
        color: grey;
        position: relative;
        z-index: 99;
        cursor: pointer;
        pointer-events: auto;
        transition: 300ms cubic-bezier(0.86, 0, 0.33, 0.26);
      }

      button.active {
        pointer-events: none;
        color: #fff;
        font-weight: normal;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
      }

      button[disabled] {
        color: #949fad;
        cursor: not-allowed;
        background: #f5f7fa;
        border-radius: 6px;
        height: 54px;
        left: -2px;
        border: 2px solid #949fad;
      }
    }
  }
}
</style>
