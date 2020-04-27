import { addParameters } from '@storybook/vue';
import Vue from 'vue';
// import Vuex from 'vuex';
import 'p1-design-system/CSS Framework/framework.css'

// Vue.use(Vuex)

addParameters({
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
  },
});
