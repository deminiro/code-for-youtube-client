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
        scroll-padding: 0px 0 0 100px;
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
    const blockOfclips = document.getElementById('components');
    blockOfclips.style.scrollBehavior = 'smooth';
    let isDown = false;
    let startX;
    let scrollLeft;
    let numForPage = 0;
    // eslint-disable-next-line no-unused-vars
    let timer;

    // functions for click events
    function mouseDown(e) {
      isDown = true;
      blockOfclips.classList.add('active');
      startX = e.pageX - blockOfclips.offsetLeft;
      // eslint-disable-next-line prefer-destructuring
      scrollLeft = blockOfclips.scrollLeft;
    }

    function mouseLeave() {
      isDown = false;
      blockOfclips.classList.remove('active');
    }

    function mouseUp(e) {
      isDown = false;
      const widthUser = window.document.scrollingElement.clientWidth + 10;
      blockOfclips.classList.remove('active');
      blockOfclips.style.scrollBehavior = 'smooth';
      const x = e.pageX - blockOfclips.offsetLeft;
      const walk = Math.floor(x - startX);
      blockOfclips.scrollLeft = scrollLeft - walk;
      if (blockOfclips.scrollLeft >= numForPage + 150) {
        numForPage += widthUser;
        blockOfclips.scrollLeft = numForPage;
        buttonCurrent.innerText = '';
        currentPage += 1;
        buttonCurrent.innerText = currentPage;
      }
      if (walk >= 150) {
        numForPage -= widthUser;
        blockOfclips.scrollLeft = numForPage;

        if (currentPage !== 1) {
          buttonCurrent.innerText = '';
          currentPage -= 1;
          buttonCurrent.innerText = currentPage;
        }
      }
      if (walk < 150 && walk > -150) {
        blockOfclips.scrollLeft = numForPage;
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
      blockOfclips.style.scrollBehavior = '';
      const x = e.pageX - blockOfclips.offsetLeft;
      const walk = (x - startX); // scroll-fast
      blockOfclips.scrollLeft = scrollLeft - walk;
      global.console.log(x, walk, blockOfclips.scrollLeft);
    }
    // listeners for scroll page
    blockOfclips.addEventListener('mousedown', mouseDown);
    blockOfclips.addEventListener('mouseleave', mouseLeave);
    blockOfclips.addEventListener('mouseup', mouseUp);
    blockOfclips.addEventListener('mousemove', mouseMove);
  }
  animation();
}
