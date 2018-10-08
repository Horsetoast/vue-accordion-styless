# vue-accordion-styless
Highly customizable accordion component. Doesn't come with dependancies or default styles, easy to adapt to your needs.

## Demo
[Check out the demo](https://horsetoast.github.com/vue-accordion-styless)

## Install
Install the package via npm
`npm install vue-accordion-styless`
Then import it in your project
```js
import { VueAccordion, VueAccordionItem } from 'vue-accordion-styless'
```

## Usage
Simple example with classes for custom styles. Make sure to use slots with names **title** and **content** inside **<vue-accordion-item>**.
```html
<vue-accordion
    class="styled-accordion"
    animatedClass="animated-wrapper">
    <vue-accordion-item>
        <div slot="title">Why do JavaScripters wear glasses?</div>
        <div slot="content" class="item-content">Because they don't C#</div>
    </vue-accordion-item>
</vue-accordion>
```
Example styles (SCSS)
```scss
.styled-accordion {
  /* Accordion item divs */
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

  /* Content of accordion item */
  .item-content {
    border-top: 1px solid #bfc4da;
    padding: 10px;
  }
}
```

## Configuration
Available props on **<vue-accordion>**

| Prop name       | Type            | Description                                                                                                           | Default Value |
|-----------------|-----------------|-----------------------------------------------------------------------------------------------------------------------|---------------|
| canOpenMultiple | Boolean         | Defines whether multiple items can be opened at the same time                                                         | true          |
| defaultOpen     | [Number, Array] | Index or multiple indexes of the items that will be opened by default                                                 | -             |
| canClose        | Boolean         | If it's set to false, clicking an opened item won't close it.                                                         | true          |
| activeClass     | String          | CSS class that will be set on items that are opened (active).                                                         | -             |
| animatedClass   | String          | CSS class of a wrapper div that the transition property should be applied to. (I.e. transition: all 0.5s ease-in-out) | -             |


Available props on **<vue-accordion-item>**
| Prop name     | Type   | Description                                                                              | Default Value |
|---------------|--------|------------------------------------------------------------------------------------------|---------------|
| activeClass   | String | Overrides the activeClass property from <vue-accordion> for this specific accordion item | -             |
| animatedClass | String | Overrides the animatedClass property from  for this specific accordion item              | -             |
