import VueAccordion from './Accordion.vue';
import VueAccordionItem from './AccordionItem.vue';

const install = (Vue) => {
  Vue.component('vue-accordion', VueAccordion);
  Vue.component('vue-accordion-item', VueAccordionItem);
};

export default {
  install,
};

export { VueAccordion, VueAccordionItem };
