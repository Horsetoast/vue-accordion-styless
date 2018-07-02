<template>
  <div>
    <slot name="default">
    </slot>
  </div>
</template>

<script>
'use strict'

export default {
  props: {
    /**
      * Enable/disable opening
      * multiple accordion items
      */
    canOpenMultiple: {
      type: Boolean,
      default: true
    },
    /**
      * Accordion item index that
      * will be opened by default
      */
    defaultOpen: {
      type: [Number, Array]
    },
    /**
      * If set to 'false' clicking
      * accordion item won't close it
      */
    canClose: {
      type: Boolean,
      default: true
    },
    /**
      * CSS class of opened
      * accordion item
      */
    activeClass: {
      type: String
    },
    /**
      * CSS class of wrapper
      * that wraps content and
      * is applied transition to
      */
    animatedClass: {
      type: String
    }
  },
  provide () {
    return {
      accordion: this
    }
  },
  data () {
    return {
      activeIndexes: {}
    }
  },
  created () {
    if (this.defaultOpen != null) {
      if (this.defaultOpen.constructor === Array) {
        this.toggleItems(this.defaultOpen)
      } else {
        this.toggleItem(this.defaultOpen)
      }
    }
  },
  mounted () {
    this.updateChildrenStyles()
  },
  methods: {
    updateChildrenStyles () {
      (this.$children || [])
        .forEach((child, i) => {
          if (!this.activeIndexes[i]) {
            child.closeItem()
          } else {
            child.openItem()
          }
        })
    },
    toggleItems (indexes) {
      indexes.forEach((index) => {
        this.$set(this.activeIndexes, index, !this.activeIndexes[index])
      })
      this.updateChildrenStyles()
    },
    toggleItem (index) {
      if (this.canOpenMultiple) {
        this.$set(this.activeIndexes, index, !this.activeIndexes[index])
      } else {
        this.$set(this, 'activeIndexes', {
          [index]: this.canClose ? !this.activeIndexes[index] : true
        })
      }
      this.updateChildrenStyles()
    }
  }
}
</script>
