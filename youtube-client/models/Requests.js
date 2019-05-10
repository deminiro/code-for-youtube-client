export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipNames(data) {
    const title = data.items.map(clip => clip.snippet.title);
    const channelTitle = data.items.map(clip => clip.snippet.channelTitle);
    const time = data.items.map(clip => clip.snippet.publishedAt);
    const description = data.items.map(clip => clip.snippet.description);
    const image = data.items.map(clip => clip.snippet.thumbnails.medium.url);
    const amountOfResults = data.pageInfo.totalResults;
    // global.console.log(data.items.map(clip => clip.snippet.thumbnails));
    const arr = [];
    for (let i = 0; i < 4 || i < amountOfResults; i += 1) {
      const img = image[i];
      const ttl = title[i];
      const chTtl = channelTitle[i];
      const dateUpload = time[i];
      const descr = description[i];
      arr.push({
        img, ttl, chTtl, dateUpload, descr,
      });
    }
    setTimeout(() => {
      const channelHeadline = document.getElementsByClassName('clip-components-headline');
      const channelName = document.getElementsByClassName('clip-components-title');
      const clipDate = document.getElementsByClassName('clip-components-date');
      const preview = document.getElementsByClassName('clip-components-preview');
      const clipDescription = document.getElementsByClassName('clip-components-description');

      for (let j = 0; j < channelName.length; j += 1) {
        channelHeadline[j].innerHTML += arr[j].ttl;
        channelHeadline[j].style.background = 'lightgreen';

        preview[j].style.background = `url('${arr[j].img}') no-repeat`;
        preview[j].style.backgroundSize = '100%';

        channelName[j].innerHTML += `<div>${arr[j].chTtl}</div>`;

        const timeOfUpload = new Date(arr[j].dateUpload);
        const fullYear = timeOfUpload.getFullYear();
        const month = timeOfUpload.getMonth();
        const correctMonth = Number(month);
        const day = timeOfUpload.getDate();
        clipDate[j].innerHTML += `${fullYear}-${day}-${correctMonth + 1}`;

        clipDescription[j].innerHTML += arr[j].descr;
      }
    }, 100);
  }


  async getClipNames() {
    // const submit = document.getElementById('submit');
    // const query = document.getElementById('query');
    const { url } = this.state;
    // submit.addEventListener('click', () => {
    //   global.console.log(query.value);
    //   url.concat(query.value);
    // });

    const response = await fetch(url);
    // global.console.log(url);
    const data = await response.json();

    return AppModel.extractClipNames(data);
  }
}
