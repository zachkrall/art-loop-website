export const sketch = (s) => {

  let myShader;
  let time = 0;

  s.preload = () => {
    myShader = s.loadShader("/gl/shader.vert", "/gl/shader.frag");
  };
  s.setup = () => {
    let container = document.querySelector('#sketch');
    let canvas = s.createCanvas(
                    container.offsetWidth, container.offsetHeight,
                    s.WEBGL
                 );
    canvas.parent( container );
    s.noStroke();
  };
  s.draw = () => {
    s.background(0);

    myShader.setUniform('u_resolution', [s.width,s.height]);
    myShader.setUniform('u_time', time );
    s.shader(myShader);
    s. rect(500,500,10000,10000);

    time += 0.001;
  };

  s.windowResized = () => {
    let container = document.querySelector('#sketch');
    s.resizeCanvas(container.offsetWidth, container.offsetHeight);
  };
};
