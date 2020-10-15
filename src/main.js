import { createApp } from 'vue'
import App from './App.vue'
import { VuelidatePlugin } from '@vuelidate/core'
import router from './router'
import store from './store'



// components
import AuthLayout from './layout/auth';
import UserLayout from './layout/user';
import AdminLayout from './admin/layout';
import BaseRow from './UI/BaseRow';
import BaseCol from './UI/BaseCol';
import BaseSvg from './UI/BaseSVG';
import BaseContainer from './UI/BaseContainer'
import BaseFormGroup from './UI/BaseFormGroup'
import BaseTextField from './UI/BaseTextField'
import BaseButton from './UI/BaseButton'
import BaseNavItem from './UI/BaseNavitem'
import BaseLoader from './Icons/IconLoad'
import BaseImg from './UI/BaseImg'
import BaseTitle from './UI/BaseTitle'
import BasePanel from './UI/BasePanel'
import BaseAlert from './UI/BaseAlert';
import TheTitle from './components/TheTitle';
import TheHeading from './components/TheHeading';
import toggle from './common/toggle'

// instance with global component
const app = createApp(App)
  .component('auth', AuthLayout)
  .component('user', UserLayout)
  .component('admin', AdminLayout)
  .component('base-container', BaseContainer)
  .component('base-row', BaseRow)
  .component('base-col', BaseCol)
  .component('base-form-group', BaseFormGroup)
  .component('base-text-field', BaseTextField)
  .component('base-button', BaseButton)
  .component('base-nav-item', BaseNavItem)
  .component('base-image', BaseImg)
  .component('base-title', BaseTitle)
  .component('base-panel', BasePanel)
  .component('base-loading', BaseLoader)
  .component('base-alert', BaseAlert)
  .component('app-title', TheTitle)
  .component('app-heading', TheHeading)
  .component('base-svg', BaseSvg)
  .directive('click-outside', {
    mounted(el, binding) {
      const { toggleClose } = toggle()
      const clickHandler = event => {
        if (!el.contains(event.target) && el !== event.target) {
          binding.value = event;
          console.log('el', event);
          toggleClose()
        }
      }
      el.__vueClickEventHandler__ = clickHandler;
      document.addEventListener("click", clickHandler);
    },
    unmounted(el) {
      document.removeEventListener("click", el.__vueClickEventHandler__);
    }
  })


// add plugin
app.use(store);
app.use(router);
app.use(VuelidatePlugin);



// mount app
app.mount('#app')
