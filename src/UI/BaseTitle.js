import { upperFirst } from 'lodash';
import { h } from 'vue'
import Heading from '../components/TheHeading'

// Title
const Title = {
  props: {
    title: String,
    tagline: String,
    level: Number
  },
  render() {
    const t = this.$props.title; // provided by user as props
    const tag = this.$props.tagline;  // provided by user as props
    const activeRoute = this.$route.fullPath.split('/')
      .filter(route => route !== ""); // from the active route
    const path = upperFirst(activeRoute[activeRoute.length - 1]);
    const H = h(Heading, { level: this.$props.level }, [t ? t : path === 'Admin' ? 'Dashboard' : path, tag && h('small', tag)]) // heading
    return h("div", this.$attrs, [H, this.$slots.default && this.$slots.default()]);
  }
}





export default Title;