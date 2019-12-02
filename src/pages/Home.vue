<template>
  <div class="big">

    <section>
      <p>
        artloop is a digital display at Parsons School of Design in the Design +
        Technology department.
      </p>
      <p>
        artloop is an opportunity to share any in-progress works in a public
        space. Generative art sketches, photographic slideshows, digital
        renderings, videos of game-play, visual poetry, or anything else that
        can be shown on a webpage is welcome to be submitted.
      </p>
      <p>
        <br/>
        <a class="btn" href="https://forms.gle/a2ToQVSdCgCDSLiY6">Submit Work</a>
        <a href="https://github.com/zachkrall/artloop-templates/" class="btn">View Templates</a>
      </p>
    </section>

    <section>
      <details>
        <summary>How can I prepare my work?</summary>
        <p>To run correctly, your project must be a web project containing an
          index.html file and all of its relative assets. artloop does not have
          WiFi, so all assets should be downloaded and included within your
          project folder.</p>
        <p>For example, a project using p5.js would need to include a downloaded
          copy of p5.js in the project folder.</p>
      </details>
      <details>
        <summary>How does it run?</summary>
        artloop is an <a href="https://electronjs.org/">Electron</a> app that
        cycles through a folder containing web based projects. A
        <a href="https://www.raspberrypi.org/">Raspberry Pi</a> connected to
        an HD display on D12 will automatically start artloop once it is
        turned on. The
        <a href="https://github.com/zachkrall/artloop-electron">source code</a>
        is on GitHub.
      </details>
      <details>
        <summary>Where is it?</summary>
        artloop is located right outside of the PETLab on the 12th Floor of
        Building D.
      </details>
      <details>
        <summary>Is there a curatorial process?</summary>
        No. Providing your content does not break any
        <a href="https://www.newschool.edu/about/university-resources/policies/">University Policies</a> and
        it is web based, it can be shown on artloop.
      </details>
      <details>
        <summary>Technical Specifications</summary>
        <table cellspacing="0">
          <tbody>
            <tr><td>Resolution</td><td>1920 x 1080 pixels</td></tr>
            <tr><td>OS</td><td>Debian Buster with Raspberry Pi Desktop</td></tr>
            <tr><td>JavaScript</td><td>Supports ES5 syntax natively</td></tr>
            <tr><td>Internet</td><td>N/A</td></tr>
            <tr><td>Video</td><td>.OGV or .WEBM only. (codecs for .MP4 or .MOV are not installed) <a href="https://convertio.co/mp4-ogv/">online converter</a></td></tr>
            <tr><td>Audio</td><td>Speakers: N/A<br/>Microphone: N/A</td></tr>
            <tr><td>Webcam</td><td>N/A</td></tr>
            <tr><td>Mouse</td><td>N/A</td></tr>
            <tr><td>System Fonts</td><td>linux-libertine, noto, crosextra, gentium, liberation, openoffice, dejavu, gentium-basic, liberation2, piboto, droid, inconsolata, lyx, quicksand, freefont, lato, ttf-bitstream-vera</td></tr>
          </tbody>
        </table>
      </details>
    </section>

    <section class="small">
      <span class="mono">
        <p>
        Copyright © 2019 Zach Krall. artloop is an open source project using the
        <a href="https://github.com/zachkrall/artloop/blob/master/LICENSE">MIT</a>
        license. Made at the <a href="https://recurse.com">Recurse Center</a>
        and <a href="https://parsons.edu">Parsons School of Design</a>.
        </p>
        <p>
        This site was built with <a href="https://vuejs.org">Vue.js</a>,
        <a href="https://p5js.org">p5.js</a>, <a href="https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language">GLSL</a>,
        and is hosted on <a href="https://zeit.co/now">▲&nbsp;Zeit</a>
        </p>
      </span>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: {
    msg: String
  }
};
</script>

<style scoped>

</style>
