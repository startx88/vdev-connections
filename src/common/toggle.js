import { ref } from "vue"

// mixin
export default () => {
  const isOpen = ref(false);


  function toggler() {
    isOpen.value = !isOpen.value
  }


  function toggleClose() {
    isOpen.value = false;
  }

  return {
    isOpen,
    toggleClose,
    toggler
  }
}