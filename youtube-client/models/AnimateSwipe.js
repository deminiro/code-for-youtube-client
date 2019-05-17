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

      .items {
        transition: all 0.1s;
        transform: scale(0.96);
        cursor: pointer;
      }
      ::-webkit-scrollbar{
        width: 0px;
        height: 0px;
      }
    </style>`;
    const buttonCurrent = document.getElementById('button-current');
    const buttonPrev = document.getElementById('button-prev');
    const buttonPrevTwice = document.getElementById('button-prev-twice');
    let currentPage = 1;
    const slider = document.getElementById('components');
    let isDown = false;
    let startX;
    let scrollLeft;
    let numForPage = 0;
    // eslint-disable-next-line no-unused-vars
    let timer;

    // functions for click events
    function mouseDown(e) {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      // eslint-disable-next-line prefer-destructuring
      scrollLeft = slider.scrollLeft;
    }

    function mouseLeave() {
      isDown = false;
      slider.classList.remove('active');
    }

    function mouseUp(e) {
      isDown = false;
      const widthUser = window.document.scrollingElement.clientWidth;
      slider.classList.remove('active');
      const x = e.pageX - slider.offsetLeft;
      const walk = Math.floor(x - startX);
      slider.scrollLeft = scrollLeft - walk;
      if (slider.scrollLeft >= numForPage + 120) {
        numForPage += widthUser;
        slider.scrollLeft = numForPage;
        buttonCurrent.innerText = '';
        currentPage += 1;
        buttonCurrent.innerText = currentPage;
        slider.style.scrollBehavior = 'smooth';
      }
      if (walk >= 120) {
        numForPage -= widthUser;
        slider.scrollLeft = numForPage;
        slider.style.scrollBehavior = 'smooth';
        if (currentPage !== 1) {
          buttonCurrent.innerText = '';
          currentPage -= 1;
          buttonCurrent.innerText = currentPage;
        }
      }
      if (walk < 120 && walk > -120) {
        slider.scrollLeft = numForPage;
        slider.style.scrollBehavior = 'smooth';
      }
      if (currentPage === 1) {
        buttonPrev.style.display = 'none';
        buttonPrevTwice.style.display = 'none';
      }
      if (currentPage === 2) {
        buttonPrev.style.display = '';
        buttonPrevTwice.style.display = 'none';
      }
      if (currentPage === 3) {
        buttonPrev.style.display = '';
        buttonPrevTwice.style.display = '';
      }
    }

    function mouseMove(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX); // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      global.console.log(x, walk, slider.scrollLeft);
    }
    // listeners for scroll page
    slider.addEventListener('mousedown', mouseDown);
    slider.addEventListener('mouseleave', mouseLeave);
    slider.addEventListener('mouseup', mouseUp);
    slider.addEventListener('mousemove', mouseMove);
  }
  animation();
}
