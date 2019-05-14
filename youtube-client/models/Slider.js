export default function Slider() {
  async function markUpSlider() {
    //   const amountOfResults = data.pageInfo.totalResults;
    //   const amountPerPage = data.pageInfo.resultsPerPage;

    document.body.innerHTML += '<div id="slider"></div>';
    const slider = document.getElementById('slider');

    slider.style.display = 'flex';
    slider.style.justifyContent = 'center';
    slider.style.marginTop = '10px';
    slider.innerHTML += '<button id="button-prev-twice" class="slider-button"><i class="fas fa-angle-double-left" style="color: white"></i></button>';
    slider.innerHTML += '<button id="button-prev" class="slider-button"><i class="fas fa-chevron-left" style="color: white"></i></button>';
    slider.innerHTML += '<button id="button-current" class="slider-button" style="font-size: 12px"></button>';
    slider.innerHTML += '<button id="button-next" class="slider-button"><i class="fas fa-chevron-right" style="color: white"></i></button>';

    const sliderButton = Array.from(document.getElementsByClassName('slider-button'));
    sliderButton.forEach((e) => {
      e.style.borderRadius = '100%';
      e.style.width = '20px';
      e.style.border = '1px solid black';
      e.style.height = '20px';
      e.style.background = '#D50606';
      e.style.marginRight = '5px';
      e.style.display = 'none';
      e.style.padding = '0';
      e.style.WebkitUserSelect = 'none';
      e.style.MskitUserSelect = 'none';
      e.style.MozUserSelect = 'none';
    });

    // clicks with buttons
    const buttonPrevTwice = document.getElementById('button-prev-twice');
    const buttonPrev = document.getElementById('button-prev');
    const buttonCurrent = document.getElementById('button-current');
    const buttonNext = document.getElementById('button-next');
    const submit = document.getElementById('submit');
    let currentPage = 1;

    function visibleButtons() {
      buttonCurrent.style.display = '';
      buttonNext.style.display = '';

      buttonCurrent.style.color = 'white';
      buttonCurrent.innerText = currentPage;
    }

    function useButtonNext() {
      buttonCurrent.innerText = '';
      currentPage += 1;
      buttonCurrent.innerText = currentPage;

      if (currentPage === 2) {
        buttonPrev.style.display = '';
      }

      if (currentPage === 3) {
        buttonPrevTwice.style.display = '';
      }
    }

    function prevButton() {
      buttonCurrent.innerText = '';
      currentPage -= 1;
      buttonCurrent.innerText = currentPage;
      if (currentPage === 1) {
        buttonPrev.style.display = 'none';
        buttonPrevTwice.style.display = 'none';
      }
      if (currentPage === 2) buttonPrevTwice.style.display = 'none';
    }

    function prevTwiceButton() {
      buttonCurrent.innerText = '';
      currentPage -= 2;
      buttonCurrent.innerText = currentPage;
      if (currentPage === 1) {
        buttonPrev.style.display = 'none';
        buttonPrevTwice.style.display = 'none';
      }
      if (currentPage === 2) buttonPrevTwice.style.display = 'none';
    }
    (function clickEvents() {
      submit.addEventListener('click', visibleButtons);
      buttonNext.addEventListener('click', useButtonNext);
      buttonPrev.addEventListener('click', prevButton);
      buttonPrevTwice.addEventListener('click', prevTwiceButton);
    }());
  }

  markUpSlider();
}
