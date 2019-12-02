<template>
  <div id="sketch">
    <div><img src="/images/logo_inverted.png"/></div>
    <!-- <div id="links">
      <a href="https://forms.gle/a2ToQVSdCgCDSLiY6" class="btn">Submit Work</a>
      <a href="https://github.com/zachkrall/artloop-templates/" class="btn">View Templates</a>
    </div> -->
  </div>
</template>

<script>
import p5 from 'p5';
import { sketch } from './sketch.js';

export default {
  name: 'Sketch',
  components: {},
  created: function () {
    // Wait for DOM to render
    // before creating p5 canvas
    this.$nextTick(() => {
      this.createCanvas();
    });
  },
  destroyed: function () {

  },
  methods: {
    createCanvas(){
      new p5(sketch);
    }
  }
}
</script>

<style>
</style>
