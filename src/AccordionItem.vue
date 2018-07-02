<template>
  <div :class="{[activeClass || accordion.activeClass]: isActive}">
    <div ref="item-title" @click="toggle">
      <slot name="title" :isActive="isActive">
      </slot>
    </div>
    <div ref="item-content" :class="animatedClass || accordion.animatedClass">
      <slot name="content" :isActive="isActive">
      </slot>
    </div>
  </div>
</template>

<script>
'use strict'

export default {
  props: {
    /**
      * Overrides parent component
      * 'activeClass' prop for
      * this accordion item
      */
    activeClass: {
      type: String
    },
    /**
      * Overrides parent component
      * 'animatedClass' prop for
      * this accordion item
      */
    animatedClass: {
      type: String
    }
  },
  inject: ['accordion'],
  computed: {
    itemIndex () {
      const itemId = this._uid
      const items = this.accordion.$children
      let index = null
      for (let i = 0; i < items.length; i++) {
        if (items[i]._uid === itemId) {
          index = i
        }
      }
      return index
    },
    isActive () {
      return this.accordion.activeIndexes[this.itemIndex]
    }
  },
  mounted () {
    this.$refs['item-content'].style.overflow = 'hidden'
  },
  methods: {
    closeItem () {
      this.$refs['item-content'].style.maxHeight = 0
    },
    openItem () {
      const activeItem = this.$refs['item-content']
      if (activeItem) {
        activeItem.style.maxHeight = activeItem.scrollHeight + 'px'
      }
    },
    toggle () {
      this.accordion.toggleItem(this.itemIndex)
    }
  }
}
</script>
