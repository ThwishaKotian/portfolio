import { useEffect } from 'react';

const canvasDots = (canvas, ctx) => {
  const colorDot = [
    'rgb(81, 162, 233)',
    'rgb(81, 162, 233)',
    'rgb(81, 162, 233)',
    'rgb(81, 162, 233)',
    'rgb(255, 77, 90)',
  ];
  const color = 'rgb(81, 162, 233)';

  canvas.width = document.body.scrollWidth;
  canvas.height = window.innerHeight;
  ctx.lineWidth = 0.3;
  ctx.strokeStyle = color;

  let mousePosition = {
    x: (30 * canvas.width) / 100,
    y: (30 * canvas.height) / 100,
  };

  const windowSize = window.innerWidth;
  let dots;

  if (windowSize > 1600) {
    dots = { nb: 600, distance: 70, d_radius: 300, array: [] };
  } else if (windowSize > 1300) {
    dots = { nb: 575, distance: 60, d_radius: 280, array: [] };
  } else if (windowSize > 1100) {
    dots = { nb: 500, distance: 55, d_radius: 250, array: [] };
  } else if (windowSize > 800) {
    dots = { nb: 300, distance: 0, d_radius: 0, array: [] };
  } else if (windowSize > 600) {
    dots = { nb: 200, distance: 0, d_radius: 0, array: [] };
  } else {
    dots = { nb: 100, distance: 0, d_radius: 0, array: [] };
  }

  function Dot() {
    this.x = 50 + Math.random() * (canvas.width - 100); // Avoid too close to edges
    this.y = 50 + Math.random() * (canvas.height - 100);
    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();
    this.radius = Math.random() * 1.5;
    this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
  }

  Dot.prototype = {
    create: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      const dotDistance =
        ((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2) ** 0.5;
      const distanceRatio = dotDistance / (windowSize / 1.7);
      ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
      ctx.fill();
    },

    animate: function () {
      for (let i = 1; i < dots.nb; i++) {
        const dot = dots.array[i];
        if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    },

    line: function () {
        for (let i = 0; i < dots.nb; i++) {
          const i_dot = dots.array[i];
          for (let j = i + 1; j < dots.nb; j++) { // Avoid drawing the same line twice
            const j_dot = dots.array[j];
      
            const dx = i_dot.x - j_dot.x;
            const dy = i_dot.y - j_dot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < dots.distance) {
              const mx = (i_dot.x + j_dot.x) / 2;
              const my = (i_dot.y + j_dot.y) / 2;
      
              const mdx = mousePosition.x - mx;
              const mdy = mousePosition.y - my;
              const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
      
              if (mouseDist < dots.d_radius) {
                ctx.beginPath();
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);
                const opacity = Math.max(0, 1 - mouseDist / dots.d_radius);
                ctx.strokeStyle = `rgba(81, 162, 233, ${opacity})`;
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      }   
  };

  function createDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (dots.array.length === 0) {
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
      }
      dots.array[0].radius = 1.5;
      dots.array[0].colour = '#51a2e9';
    }

    dots.array.forEach((dot) => dot.create());
    dots.array[0].line();
    dots.array[0].animate();
  }

  const draw = setInterval(createDots, 1000 / 30);

  window.onmousemove = (e) => {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
    try {
      dots.array[0].x = e.pageX;
      dots.array[0].y = e.pageY;
    } catch {}
  };

  window.onresize = () => {
    clearInterval(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvasDots(canvas, ctx);
  };
};

const ParticlesBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    canvasDots(canvas, ctx);
  }, []);

  

  return (
    <canvas
      id="particles-canvas"
      className="fixed top-0 left-0 w-full h-full z-0"
    ></canvas>
  );
};

export default ParticlesBackground;
