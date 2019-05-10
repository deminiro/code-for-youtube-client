// import * as qw from './Requests';


export default function MarkUp() {
  async function queryBox() {
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.paddingTop = '2%';
    document.body.style.overflowY = 'hidden';
    document.body.style.background = 'lightgrey';
    const div = document.createElement('div');
    const form = document.createElement('form');

    // icon
    document.head.innerHTML += '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>';
    // Form
    div.className = 'div';
    document.body.appendChild(div);
    div.appendChild(form);
    form.setAttribute('onsubmit', 'return false');
    form.setAttribute('style', 'width: 60%; margin: 0 auto; display: flex; border-radius: 2%');

    form.innerHTML += '<button type="submit" value="" id="submit"><i class="fas fa-search"></i></button>';
    form.innerHTML += '<input type="text" size="40" placeholder="Write your query" id="query">';

    const query = document.getElementById('query');
    const submit = document.getElementById('submit');

    submit.addEventListener('click', () => {
      localStorage.setItem('query', query.value);
    });
    // input with text
    query.style.width = '70%';
    query.style.fontSize = '20px';
    query.style.paddingLeft = '5%';
    query.style.borderRadius = '40px';

    // input with submit

    submit.style.height = '7vh';
    submit.style.background = 'none';
    submit.style.border = 'none';
    submit.style.position = 'relative';
    submit.style.left = '5%';
    // global.console.log(qw.default.extractClipNames());
    // const p = new Promise((resolve));
  }

  async function clipComponents() {
    const div = document.createElement('div');

    document.body.appendChild(div);
    div.setAttribute('id', 'components');
    div.setAttribute('style', 'display: grid; grid-template-columns: 20% 20% 20% 20%; grid-gap: 5%; height: 63vh; margin-top: 3.5%; padding-left: 4%');

    div.innerHTML += '<div id="left-box"></div>';
    div.innerHTML += '<div id="middle-left-box"></div>';
    div.innerHTML += '<div id="middle-right-box"></div>';
    div.innerHTML += '<div id="right-box"></div>';

    const leftBox = document.getElementById('left-box');
    const midLeftBox = document.getElementById('middle-left-box');
    const midRightBox = document.getElementById('middle-right-box');
    const rightBox = document.getElementById('right-box');
    (function leftComponent() {
      leftBox.setAttribute('style', 'display: grid; grid-template-rows: 9% 32% 8% 8% 10% 33%; background: white; border-radius: 2%;');
      leftBox.innerHTML += '<div id="left-box-headline" class="clip-components-headline" style="width: 100%"></div>';
      leftBox.innerHTML += '<div id="left-box-preview" class="clip-components-preview" style="width: 100%"></div>';
      leftBox.innerHTML += '<div id="left-box-title" class="clip-components-title" style="width: 100%"></div>';
      leftBox.innerHTML += '<div id="left-box-date" class="clip-components-date" style="width: 100%"></div>';
      leftBox.innerHTML += '<div id="left-box-viewers" class="clip-components-viewers" style="width: 100%"></div>';
      leftBox.innerHTML += '<div id="left-box-description" class="clip-components-description" style="width: 100%"></div>';
    }());

    (function midLeftComponent() {
      midLeftBox.setAttribute('style', 'display: grid; grid-template-rows: 9% 32% 8% 8% 10% 33%; background: white; border-radius: 2%;');
      midLeftBox.innerHTML += '<div id="mid-left-box-headline" class="clip-components-headline" style="width: 100%"></div>';
      midLeftBox.innerHTML += '<div id="mid-left-box-preview" class="clip-components-preview" style="width: 100%"></div>';
      midLeftBox.innerHTML += '<div id="mid-left-box-title" class="clip-components-title" style="width: 100%"></div>';
      midLeftBox.innerHTML += '<div id="mid-left-box-date" class="clip-components-date" style="width: 100%"></div>';
      midLeftBox.innerHTML += '<div id="mid-left-box-viewers" class="clip-components-viewers" style="width: 100%"></div>';
      midLeftBox.innerHTML += '<div id="mid-left-box-description" class="clip-components-description" style="width: 100%"></div>';
    }());

    (function midRightComponent() {
      midRightBox.setAttribute('style', 'display: grid; grid-template-rows: 9% 32% 8% 8% 10% 33%; background: white; border-radius: 2%;');
      midRightBox.innerHTML += '<div id="mid-right-box-headline" class="clip-components-headline" style="width: 100%"></div>';
      midRightBox.innerHTML += '<div id="mid-right-box-preview" class="clip-components-preview" style="width: 100%"></div>';
      midRightBox.innerHTML += '<div id="mid-right-box-title" class="clip-components-title" style="width: 100%"></div>';
      midRightBox.innerHTML += '<div id="mid-right-box-date" class="clip-components-date" style="width: 100%"></div>';
      midRightBox.innerHTML += '<div id="mid-right-box-viewers" class="clip-components-viewers" style="width: 100%"></div>';
      midRightBox.innerHTML += '<div id="mid-right-box-description" class="clip-components-description" style="width: 100%"></div>';
    }());

    (function rightComponent() {
      rightBox.setAttribute('style', 'display: grid; grid-template-rows: 9% 32% 8% 8% 10% 33%; background: white; border-radius: 2%;');
      rightBox.innerHTML += '<div id="right-box-headline" class="clip-components-headline" style="width: 100%"></div>';
      rightBox.innerHTML += '<div id="right-box-preview" class="clip-components-preview" style="width: 100%"></div>';
      rightBox.innerHTML += '<div id="right-box-title" class="clip-components-title" style="width: 100%"></div>';
      rightBox.innerHTML += '<div id="right-box-date" class="clip-components-date" style="width: 100%"></div>';
      rightBox.innerHTML += '<div id="right-box-viewers" class="clip-components-viewers" style="width: 100%"></div>';
      rightBox.innerHTML += '<div id="right-box-description" class="clip-components-description" style="width: 100%"></div>';
    }());

    (function styleClipComponents() {
      const clipComponentsHead = Array.from(document.getElementsByClassName('clip-components-headline'));
      const clipComponentsTitle = Array.from(document.getElementsByClassName('clip-components-title'));
      const clipComponentsDate = Array.from(document.getElementsByClassName('clip-components-date'));
      const clipComponentsViewers = Array.from(document.getElementsByClassName('clip-components-viewers'));
      const clipComponentsDescription = Array.from(document.getElementsByClassName('clip-components-description'));

      clipComponentsHead.forEach(() => {
        // e.style.background = 'red';
      });
      clipComponentsTitle.forEach((e) => {
        e.style.display = 'grid';
        e.style.gridTemplateColumns = '15% 80%';
        e.innerHTML += '<i class="fas fa-male"></i>';
        e.style.paddingTop = '7%';
        e.style.paddingLeft = '9%';
      });
      clipComponentsDate.forEach((e) => {
        e.style.display = 'grid';
        e.style.gridTemplateColumns = '15% 80%';
        e.innerHTML += '<i class="fas fa-calendar-alt"></i>';
        e.style.paddingTop = '7%';
        e.style.paddingLeft = '7%';
      });
      clipComponentsViewers.forEach((e) => {
        e.style.display = 'grid';
        e.style.gridTemplateColumns = '15% 80%';
        e.innerHTML += '<i class="fas fa-eye"></i>';
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
