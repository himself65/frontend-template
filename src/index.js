import Vue from 'vue'
import App from './App.vue'

export const app = new Vue({
  el: '#app',
  name: 'template',
  data: () => ({
    isLoaded: document.readyState === 'complete'
  }),

  render: (h) => h(App)
})

app.isLoaded || window.addEventListener('load', () => {
  app.isLoaded = true
  console.log('Website load')
})
