import AppModel from './Requests';

export default function MarkUp() {
  async function queryBox() {
    // title of webpage
    window.document.title = 'Youtube-client';
    // document.body.style.overflowX = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.paddingTop = '2%';
    document.body.style.overflowY = 'hidden';
    document.body.style.background = 'lightgrey';
    const header = document.createElement('header');
    const form = document.createElement('form');
    const datas = AppModel.extractClipNames;
    global.console.log(datas);
    // icon
    document.head.innerHTML
      += '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>';

    // Form
    header.className = 'header';
    document.body.appendChild(header);
    header.style.display = 'flex';
    header.style.position = 'fixed';
    header.style.width = '100%';
    header.style.height = '46px';
    header.style.justifyContent = 'center';
    header.appendChild(form);
    form.setAttribute('onsubmit', 'return false');
    form.setAttribute(
      'style',
      'width: 60%; margin: 0 auto; display: flex; border-radius: 2%',
    );

    form.innerHTML
      += '<button type="submit" id="submit"><i class="fas fa-search"></i></button>';
    form.innerHTML
      += '<input type="text" size="40" placeholder="Write your query" id="query">';

    const query = document.getElementById('query');
    const submit = document.getElementById('submit');

    // input with text
    query.style.width = '70%';
    query.style.fontSize = '20px';
    query.style.paddingLeft = '34px';
    query.style.borderRadius = '40px';

    // input with submit

    submit.style.height = '7vh';
    submit.style.background = 'none';
    submit.style.border = 'none';
    submit.style.position = 'relative';
    submit.style.left = '34px';
  }

  async function clipComponents() {
    const main = document.createElement('main');
    document.body.appendChild(main);

    main.style.display = 'none';
    main.style.marginLeft = '8%';
    main.style.marginTop = `calc(${
      document.getElementsByClassName('header')[0].clientHeight
    }px + 3.5%)`;
    main.innerHTML += '<div id="components" class="items"></div>';

    const div = document.getElementById('components');
    div.setAttribute(
      'style',
      'position: relative; display: grid; grid-template-columns: repeat(15, 300px); grid-gap: 9.5%; height: 461px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;',
    );

    const clipBox = document.getElementsByClassName('clip-components');

    for (let i = 0; i < 15; i += 1) {
      const blocksOfClips = document.getElementById('components');
      blocksOfClips.innerHTML += '<div class="clip-components"></div>';
      (function leftComponent() {
        clipBox[i].setAttribute(
          'style',
          'display: grid; grid-template-rows: 9% 36% 9% 9% 10% 26%; background: white; border-radius: 0%;',
        );
        clipBox[i].innerHTML
          += '<div id="left-box-headline" class="clip-components-headline" style="width: 100%"></div>';
        clipBox[i].innerHTML
          += '<div id="left-box-preview" class="clip-components-preview" style="width: 100%"></div>';
        clipBox[i].innerHTML
          += '<div id="left-box-title" class="clip-components-title" style="width: 100%"></div>';
        clipBox[i].innerHTML
          += '<div id="left-box-date" class="clip-components-date" style="width: 100%"></div>';
        clipBox[i].innerHTML
          += '<div id="left-box-viewers" class="clip-components-viewers" style="width: 100%"></div>';
        clipBox[i].innerHTML
          += '<div id="left-box-description" class="clip-components-description" style="width: 100%"></div>';
      }());
    }

    (function styleClipComponents() {
      const clipComponentsTitle = Array.from(
        document.getElementsByClassName('clip-components-title'),
      );
      const clipComponentsDate = Array.from(
        document.getElementsByClassName('clip-components-date'),
      );
      const clipComponentsViewers = Array.from(
        document.getElementsByClassName('clip-components-viewers'),
      );
      const clipComponentsDescription = Array.from(
        document.getElementsByClassName('clip-components-description'),
      );

      clipComponentsTitle.forEach((e) => {
        e.style.display = 'grid';
        e.style.gridTemplateColumns = '15% 80%';
        e.style.paddingTop = '7%';
        e.style.paddingLeft = '9%';
      });
      clipComponentsDate.forEach((e) => {
        e.style.display = 'grid';
        e.style.gridTemplateColumns = '15% 80%';
        e.style.paddingTop = '7%';
        e.style.paddingLeft = '7%';
      });
      clipComponentsViewers.forEach((e) => {
        e.style.display = 'grid';
        e.style.gridTemplateColumns = '15% 80%';
        e.style.paddingTop = '7%';
        e.style.paddingLeft = '6%';
      });
      clipComponentsDescription.forEach((e) => {
        e.style.background = '';
      });
    }());
  }
  queryBox();
  clipComponents();
}
