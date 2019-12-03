<template>
  <div class="big">

    <section>
      <h1>About</h1>
      <p>
        artloop is a digital display at Parsons School of Design in the Design + Technology department.
      </p>
    </section>

    <section>
      <h1>Purpose</h1>
      <p>
        artloop is an opportunity to share any in-progress works in a public space. Generative art sketches, photographic slideshows, digital renderings, videos of game-play, visual poetry, or anything else that can be shown on a webpage is welcome to be submitted.
      </p>
    </section>

    <Link :LinkProp="links"/>

    <FAQ/>

    <section>
      <h1>Tasks</h1>
      <p>
        <ul>
          <li class="checked">Install Raspberry PI on D12</li>
          <li class="checked">Update website</li>
          <li>Update templates on GitHub</li>
          <li>Create an interface to upload projects through a web portal</li>
        </ul>
      </p>
    </section>

    <Footer/>
  </div>
</template>

<script>
import FAQ from '../components/FAQ.vue';
import Footer from '../components/Footer.vue';
import Link from '../components/Link.vue';

export default {
  name: "Home",
  components: { FAQ, Footer, Link },
  props: {
    msg: String,
    links: Array
  },
};
</script>

<style scoped>
ul{
  margin:0.4em auto 0 auto;padding:0;
  list-style-type: none;
  list-style-position: inside;
}
ul li:before{
  display:inline-block;
  width:0.7em;height:0.7em;
  border:1.5px solid black;
  content:' ';
  border-radius: 100%;
  margin-left: -3rem;
  margin-right: calc( 3.0rem - 0.7em);
}
ul li.checked:before{
  background:#999;
  border-color:#999;
}
ul li.checked{
  color: #999;
  text-decoration: line-through;
}
ul li{
  padding-left: 3rem;
}
</style>
