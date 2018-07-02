<template>
  <div id="accordion-demo">
    <h1>Highly customizable Vue accordion component</h1>
    <p>Without dependancies</p>
    <hr>
    <!-- STYLED ACCORDION WITH ACTIVE CLASS -->
    <h2>Styled accordion with active item class</h2>
    <vue-accordion
      class="styled-accordion"
      animatedClass="animated-wrapper"
      activeClass="active-item"
      :canOpenMultiple="false">
      <vue-accordion-item>
        <div slot="title" class="item-title">Why do JavaScripters wear glasses?</div>
        <div slot="content" class="item-content">Because they don't C#</div>
      </vue-accordion-item>
      <vue-accordion-item>
        <div slot="title" class="item-title">How many I.T. guys does it take to screw in a lightbulb?</div>
        <div slot="content" class="item-content">None. That's a hardware problem. But have you tried turning it on and off again?</div>
      </vue-accordion-item>
    </vue-accordion>
    <!-- -->
    <!-- STYLED ACCORDION WITH SCOPED PROPS SINGLE OPEN ITEM -->
    <h2>Styled accordion with dynamic arrow icons using scoped slots</h2>
    <vue-accordion
      class="styled-accordion"
      animatedClass="animated-wrapper"
      :canClose="false">
      <vue-accordion-item>
        <div slot="title" class="item-title" slot-scope="props">
          <span>{{props.isActive ? '▼' : '►'}}</span>
          Why do JavaScripters wear glasses?
        </div>
        <div slot="content" class="item-content">Because they don't C#</div>
      </vue-accordion-item>
      <vue-accordion-item>
        <div slot="title" class="item-title" slot-scope="props">
          <span>{{props.isActive ? '▼' : '►'}}</span>
          How many I.T. guys does it take to screw in a lightbulb?
        </div>
        <div slot="content" class="item-content">None. That's a hardware problem. But have you tried turning it on and off again?</div>
      </vue-accordion-item>
    </vue-accordion>
    <!-- -->
    <!-- ACCORDION WITHOUT STYLES-->
    <h2>Accordion without any styles</h2>
    <vue-accordion>
      <vue-accordion-item>
        <div slot="title" class="item-title">Why do JavaScripters wear glasses?</div>
        <div slot="content" class="item-content">Because they don't C#</div>
      </vue-accordion-item>
      <vue-accordion-item>
        <div slot="title" class="item-title">How many I.T. guys does it take to screw in a lightbulb?</div>
        <div slot="content" class="item-content">None. That's a hardware problem. But have you tried turning it on and off again?</div>
      </vue-accordion-item>
    </vue-accordion>
    <!-- -->
  </div>
</template>

<script>
import { VueAccordion, VueAccordionItem } from '../../dist/vue-accordion-styless.min.js';

export default {
  components: {
    VueAccordion,
    VueAccordionItem
  }
}
</script>

<style lang="scss">

.styled-accordion {
  /* Accordion item div */
  & > div {
    border: 1px solid #bfc4da;
    margin-bottom: 10px;
    border-radius: 5px;
    color: #555;
  }

  /* Wrapper of which height
  * changes from 0 to its content height */
  .animated-wrapper {
    transition: all 0.5s ease-in-out;
  }

  /* Title of accordion item */
  .item-title {
    padding: 10px;
    cursor: pointer;
    &:hover {
      color: #3c416e;
    }
  }

  /* Content of accordion item (inside wrapper) */
  .item-content {
    border-top: 1px solid #bfc4da;
    padding: 10px;
  }

  /* Opened accordion item style */
  .active-item {
    background: #eaedf7;
  }
}

#accordion-demo {
  @import url('https://fonts.googleapis.com/css?family=Roboto:200,400');
  max-width: 600px;
  min-width: 300px;
  margin: 100px auto;
  width: 50%;
  font-family: 'Roboto', sans-serif;
  h1, h2, h3, h4, h5, h6 {
    font-weight: 200;
    color: #3c416e;
  }
  & > div {
    margin-bottom: 100px;
  }
}
</style>
