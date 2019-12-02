export const sketch = (s) => {

  const parent = document.querySelector('#sketch');
  let myShader;
  let time = 0;

  s.preload = () => {
    myShader = s.loadShader("/gl/shader.vert", "/gl/shader.frag");
  };
  s.setup = () => {
    let canvas = s.createCanvas(
                    parent.offsetWidth, parent.offsetHeight,
                    s.WEBGL
                 );
    canvas.parent( parent );
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
    s.resizeCanvas(parent.offsetWidth, parent.offsetHeight);
  };
};
