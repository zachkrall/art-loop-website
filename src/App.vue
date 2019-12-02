<template>
  <div id="app">
    <!--
      Sketch is visible on every page
    -->
    <Sketch/>
    <router-view>
      <!--
        This will populate with our page content
      -->
    </router-view>
  </div>
</template>

<script>
import Sketch from './components/Sketch.vue';

export default {
  name: 'app',
  components: { Sketch }
}
</script>

<style>
@import url('./css/reset.css');
@import url('./css/global.css');
</style>
