<template>
  <div class="social">
    <a href="#">
      <base-svg fill="red" size="20" name="facebook"> <facebook /> </base-svg>
    </a>
    <a href="#">
      <base-svg fill="red" size="20" name="twitter"> <twitter /> </base-svg>
    </a>
    <a href="#">
      <base-svg fill="red" size="20" name="github" view-box="0 0 32 32">
        <github />
      </base-svg>
    </a>
    <a href="#">
      <base-svg fill="red" size="20" name="gmail"> <gmail /> </base-svg>
    </a>
  </div>
</template>

<script>
import Facebook from "../svg/fb";
import Twitter from "../svg/twitter";
import Github from "../svg/github";
import Gmail from "../svg/gmail";
export default {
  components: {
    Facebook,
    Twitter,
    Github,
    Gmail,
  },
};
</script>

<style></style>
