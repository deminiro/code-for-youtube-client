export default function StylesForClipsInfo() {
  async function clipComponents() {
    const components = document.getElementById('components');
    const gridStr = components.style.gridTemplateColumns.toString();
    const gridStrWithoutSpace = gridStr.replace(/\s/g, '');
    const amountOfCurrentBlocks = gridStrWithoutSpace.length / 5;
    const amountNewUpload = amountOfCurrentBlocks + 15;
    components.style.gridTemplateColumns = `repeat(${amountNewUpload}, 300px)`;
    for (let i = 0; i < 15; i += 1) {
      components.innerHTML += '<div class="clip-components clip-components-new"></div>';
    }

    const clipBox = document.getElementsByClassName('clip-components');
    global.console.log(clipBox);

    for (let i = amountOfCurrentBlocks; i < amountOfCurrentBlocks + 15; i += 1) {
      (function leftComponent() {
        clipBox[i].setAttribute(
          'style',
          'height: 453px; position: relative; display: grid; padding-top: 3px; grid-template-rows: 36% 9% 9% 9% 10% 25%; background: white; border: 1px solid black; border-radius: 2%;',
        );
        clipBox[i].innerHTML
            += '<div id="left-box-preview" class="clip-components-preview" style="width: 298px; height: 168px"></div>';
        clipBox[i].innerHTML
            += '<div id="left-box-headline" class="clip-components-headline" style="margin-top: 1px; width: 298px;"></div>';
        clipBox[i].innerHTML
            += '<div id="left-box-title" class="clip-components-title" style="width: 297px"></div>';
        clipBox[i].innerHTML
            += '<div id="left-box-date" class="clip-components-date" style="width: 297px"></div>';
        clipBox[i].innerHTML
            += '<div id="left-box-viewers" class="clip-components-viewers" style="width: 297px"></div>';
        clipBox[i].innerHTML
            += '<div id="left-box-description" class="clip-components-description" style="width: 297px"></div>';
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
  clipComponents();
}
