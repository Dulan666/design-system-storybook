import { addParameters } from '@storybook/vue';
import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex)

addParameters({
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
  },
});
