<template>
  <section>
    <h1>Details</h1>
    <details v-for="(item,key) in items" v-bind:key="key">
      <summary>{{ item.title }}</summary>
      <span v-html="item.content"></span>
    </details>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  components: {},
  computed: {
    items() {
      return [
        {
          'title': 'How can I prepare my work?',
          'content': '<p>To run correctly, your project must be a web project containing an index.html file and all of its relative assets. artloop does not have WiFi, so all assets should be downloaded and included within your project folder.</p><p>For example, a project using p5.js would need to include a downloaded copy of p5.js in the project folder.</p>'
        },
        {
          'title': 'How does it run?',
          'content': 'artloop is an <a href="https://electronjs.org/">Electron</a> app that cycles through a folder containing web based projects. A <a href="https://www.raspberrypi.org/">Raspberry Pi</a> connected to an HD display on D12 will automatically start artloop once it is turned on. The <a href="https://github.com/zachkrall/artloop-electron">source code</a> is on GitHub.'
        },
        {
          'title': 'Where is it?',
          'content': 'artloop is located right outside of the PETLab on the 12th Floor of Building D.'
        },
        {
          'title': 'Is there a curatorial process?',
          'content': 'No. Providing your content does not break any <a href="https://www.newschool.edu/about/university-resources/policies/">University Policies</a> and it is web based, it can be shown on artloop.'
        },
        {
          'title': 'Technical Specifications',
          'content': `<table cellspacing="0">
            <tbody>
              <tr><td>Resolution</td><td>1920 x 1080 pixels</td></tr>
              <tr><td>OS</td><td>Debian Buster with Raspberry Pi Desktop</td></tr>
              <tr><td>JavaScript</td><td>Supports ES5 syntax natively</td></tr>
              <tr><td>Internet</td><td>N/A</td></tr>
              <tr><td>Video</td><td>.OGV or .WEBM only. (codecs for .MP4 or .MOV are not installed) <a href="https://convertio.co/mp4-ogv/">online converter</a></td></tr>
              <tr><td>Audio</td><td>Speakers: N/A<br/>Microphone: N/A</td></tr>
              <tr><td>Webcam</td><td>N/A</td></tr>
              <tr><td>Mouse</td><td>N/A</td></tr>
              <tr><td>System&nbsp;Fonts</td><td>linux-libertine, noto, crosextra, gentium, liberation, openoffice, dejavu, gentium-basic, liberation2, piboto, droid, inconsolata, lyx, quicksand, freefont, lato, ttf-bitstream-vera</td></tr>
            </tbody>
          </table>`
        },
      ]
    }
  }
}
</script>

<style>
/* Details padding */
details{
  padding: 0.5em 0;
}
/* Border on all but last */
details:not(:last-of-type){
  border-bottom:1px solid black;
}
/* Pseudo before elements */
details summary:before{
  display:inline-block;
  width:3rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1.3em;
  padding-right: 0.6em;
  font-weight:normal;
  content:'+';
}
details[open] summary:before{
  display:inline-block;
  width:3rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1.3em;
  padding-right: 0.6em;
  font-weight:normal;
  content:'–';
}
/* Remove outline on focus */
details summary:focus,
details summary:active{
  outline:0;
}
/* Pointer on hover */
details:hover{
  cursor: pointer;
}
summary{
  /* Firefox Details marker hide */
  list-style-type:none;
}
summary::marker{
  /* General Marker Hide */
  display:none;
  list-style-type:none;
}
summary::-webkit-details-marker{
  /* Safari & iOS Marker Hide */
  display:none;
  list-style-type: none;
}
</style>
