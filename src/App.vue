<template>
  <div id="app">
    <div id="sketch">
      <div><img src="/images/logo_inverted.png"/></div>
      <!-- <div id="links">
        <a href="https://forms.gle/a2ToQVSdCgCDSLiY6" class="btn">Submit Work</a>
        <a href="https://github.com/zachkrall/artloop-templates/" class="btn">View Templates</a>
      </div> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import p5 from 'p5';
import { sketch } from './components/sketch.js';

export default {
  name: 'app',
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
@import url('./css/reset.css');
@import url('./css/global.css');

body{
  padding-left:50vw;
}
@media screen and (max-width: 700px){
  body{
    padding-left:0;
  }
}

#sketch{
  background:black;

  position:fixed;
  top:0;left:0;
  width:50vw;
  height:100vh;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

}
@media screen and (max-width: 700px){
  #sketch{
    position:relative;
    width:100vw;
    height:30vh;
    min-height: 400px;
  }
}
#sketch div img{
  width: 300px; max-width: 50vw;
  height:auto;
  margin:auto;
}
#sketch div{
  text-align:center;
  z-index:3;
}
#defaultCanvas0{
  position:absolute;
  top:0;left:0;
  width:100%;height:100%;
}

#links{
  position:absolute;
  top:0;left:0;
  padding: var(--padding);
}

a.btn{
  border:1px solid white;
  color: white;
  border-radius: 10px;
  padding: 0.3em 0.5em;
  text-decoration:none;
  display:inline-block;
  margin: 0 0.5em 0.5em 0;
}
a.btn:hover{
  background:white;
  color:black;
}
</style>
