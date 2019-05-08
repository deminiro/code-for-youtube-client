export default function MarkUp() {
  (function queryBox() {
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

    form.innerHTML += '<input type="submit" value="" onclick="console.log(query.value)" id="submit">';
    form.innerHTML += '<input type="text" size="40" placeholder="Write your query" id="query">';
    global.console.log(document.body);
    // input with text
    const query = document.getElementById('query');
    query.style.width = '90%';
    query.style.fontSize = '20px';
    query.style.paddingLeft = '20px';

    // input with submit
    const submit = document.getElementById('submit');
    submit.style.height = '7vh';
  }());

  (function clipComponents() {
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

    leftBox.style.background = 'blue';
    midLeftBox.style.background = 'red';
    midRightBox.style.background = 'yellow';
    rightBox.style.background = 'green';
    leftBox.style.width = '100%';
    midLeftBox.style.width = '100%';
    midRightBox.style.width = '100%';
    rightBox.style.width = '100%';
    leftBox.style.borderRadius = '2%';
    midLeftBox.style.borderRadius = '2%';
    midRightBox.style.borderRadius = '2%';
    rightBox.style.borderRadius = '2%';

    (function leftComponent() {
      leftBox.setAttribute('style', 'display: grid; grid-template-rows: 35% 11% 11% 11% 20%; background: red');
    }());
  }());
}
