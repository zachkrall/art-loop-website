<template>
  <section>
    <a class="btn"
       v-for="(link,key) in LinkProp"
       v-bind:href="link[0]"
       v-bind:key="key"
       >{{link[1]}}</a>
  </section>
</template>

<script>
export default {
  name: "Link",
  props: {
    LinkProp: Array
  }
}
</script>

<style>

</style>
