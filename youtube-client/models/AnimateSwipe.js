export default function animationSlider() {
  async function animation() {
    const { head } = document;
    // const blocksOfClips = document.getElementById('components');
    head.innerHTML += `<style> .items.active {
      background: rgba(255,255,255,0.3);
      cursor: grabbing;
      cursor: -webkit-grabbing;
      transform: scale(1);
      }
      ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }
    </style>`;
    const slider = document.getElementById('components');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      // eslint-disable-next-line prefer-destructuring
      scrollLeft = slider.scrollLeft;
      global.console.log(scrollLeft);
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
      global.console.log('mouseleave');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
      global.console.log('mouseup');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      global.console.log(x, walk, slider.scrollLeft);
    });
  }
  animation();
}
