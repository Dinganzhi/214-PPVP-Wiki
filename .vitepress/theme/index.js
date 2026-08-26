import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import UnifontScreenItem from './components/UnifontScreenItem.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-screen-content-after': () => h(UnifontScreenItem)
    })
  }
}