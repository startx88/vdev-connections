import { h } from 'vue';

// Heading
const TheHeading = (props, context) => {
  return h(`h${props.level}`, context.attrs, context.slots)
}

// props
TheHeading.props = ['level']


// export
export default TheHeading;