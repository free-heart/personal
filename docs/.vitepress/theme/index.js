import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import './custom.css'
import 'element-plus/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
  }
}