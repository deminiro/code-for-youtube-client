export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipNames(data, dataStat) {
    const title = data.items.map(clip => clip.snippet.title);
    const channelTitle = data.items.map(clip => clip.snippet.channelTitle);
    const time = data.items.map(clip => clip.snippet.publishedAt);
    const description = data.items.map(clip => clip.snippet.description);
    const image = data.items.map(clip => clip.snippet.thumbnails.medium.url);
    const viewers = dataStat.items.map(clip => clip.statistics.viewCount);
    const amountOfResults = data.pageInfo.totalResults;
    const arr = [];
    for (let i = 0; i < 4 || i < amountOfResults; i += 1) {
      const img = image[i];
      const ttl = title[i];
      const chTtl = channelTitle[i];
      const dateUpload = time[i];
      const amountOfViewers = viewers[i];
      const descr = description[i];
      arr.push({
        img, ttl, chTtl, dateUpload, amountOfViewers, descr,
      });
    }
    setTimeout(() => {
      const channelHeadline = document.getElementsByClassName('clip-components-headline');
      const channelName = document.getElementsByClassName('clip-components-title');
      const clipDate = document.getElementsByClassName('clip-components-date');
      const preview = document.getElementsByClassName('clip-components-preview');
      const amountOfViewers = document.getElementsByClassName('clip-components-viewers');
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

        amountOfViewers[j].innerHTML += arr[j].amountOfViewers;

        clipDescription[j].innerHTML += arr[j].descr;
      }
    }, 100);
  }

  async getClipNames() {
    const { url, urlStatistics } = this.state;
    // url
    const storage = localStorage.getItem('query');
    const response = await fetch(url.concat(storage));
    const data = await response.json();

    // Statistics for block 'viewers'
    const idsFromUrl = data.items.map(clip => clip.id.videoId).toString();
    const idx = urlStatistics.indexOf('&part');
    const sliceEnd = urlStatistics.slice(idx);
    const slice = urlStatistics.slice(0, idx);
    const correctIds = slice.concat(idsFromUrl).concat(sliceEnd);

    // result
    const responseStat = await fetch(correctIds);
    const dataStat = await responseStat.json();
    return AppModel.extractClipNames(data, dataStat);
  }
}
