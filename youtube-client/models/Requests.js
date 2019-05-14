export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipNames(data, dataStat, identifier) {
    const title = data.items.map(clip => clip.snippet.title);
    const channelTitle = data.items.map(clip => clip.snippet.channelTitle);
    const time = data.items.map(clip => clip.snippet.publishedAt);
    const description = data.items.map(clip => clip.snippet.description);
    const image = data.items.map(clip => clip.snippet.thumbnails.medium.url);
    const viewers = dataStat.items.map(clip => clip.statistics.viewCount);
    const amountOfResults = data.pageInfo.totalResults;
    const arr = [];

    for (let i = 0; i < data.pageInfo.resultsPerPage && i < amountOfResults; i += 1) {
      const img = image[i];
      const ttl = title[i];
      const chTtl = channelTitle[i];
      const dateUpload = time[i];
      const amountOfViewers = viewers[i];
      const descr = description[i];
      const ids = identifier[i];
      arr.push({
        img, ttl, chTtl, dateUpload, amountOfViewers, descr, ids,
      });
    }

    const channelHeadline = document.getElementsByClassName('clip-components-headline');
    const channelName = document.getElementsByClassName('clip-components-title');
    const clipDate = document.getElementsByClassName('clip-components-date');
    const preview = document.getElementsByClassName('clip-components-preview');
    const amountOfViewers = document.getElementsByClassName('clip-components-viewers');
    const clipDescription = document.getElementsByClassName('clip-components-description');

    // LOOP TO FILL CLIP COMPONENTS WITH INFORMATION //
    for (let j = 0; j < data.pageInfo.resultsPerPage && j < amountOfResults; j += 1) {
      (function infoForComponents() {
        channelHeadline[j].innerHTML = `<a class="anchor" href="https://www.youtube.com/watch?v=${arr[j].ids}" target="_blanket">${arr[j].ttl}</a>`;
        channelHeadline[j].style.background = 'darkgreen';
        channelHeadline[j].style.textAlign = 'center';
        const anchor = document.getElementsByClassName('anchor')[j];
        anchor.style.color = 'white';

        preview[j].style.background = `url('${arr[j].img}') no-repeat`;
        preview[j].style.backgroundSize = '100%';

        channelName[j].innerHTML = `<i class="fas fa-male"></i><div>${arr[j].chTtl}</div>`;

        const timeOfUpload = new Date(arr[j].dateUpload);
        const fullYear = timeOfUpload.getFullYear();
        const month = timeOfUpload.getMonth();
        const correctMonth = Number(month);
        const day = timeOfUpload.getDate();
        clipDate[j].innerHTML = `<i class="fas fa-calendar-alt"></i>${fullYear}-${day}-${correctMonth + 1}`;

        amountOfViewers[j].innerHTML = `<i class="fas fa-eye"></i>${arr[j].amountOfViewers}`;

        clipDescription[j].innerHTML = arr[j].descr;
      }());
    }

    if (arr.length < 15) {
      for (let j = 14; j >= arr.length; j -= 1) {
        const blocksOfClips = document.getElementById('components');
        blocksOfClips.children[j].style.display = 'none';
      }
    }
  }

  async getClipNames() {
    const { url, urlStatistics } = this.state;
    // url
    const response = await fetch(url);
    const data = await response.json();

    // Statistics for block 'viewers'
    const identifier = data.items.map(clip => clip.id.videoId);
    const idsFromUrl = data.items.map(clip => clip.id.videoId).toString();
    const idx = urlStatistics.indexOf('&part');
    const sliceEnd = urlStatistics.slice(idx);
    const slice = urlStatistics.slice(0, idx);
    const correctIds = slice.concat(idsFromUrl).concat(sliceEnd);
    // result
    const responseStat = await fetch(correctIds);
    const dataStat = await responseStat.json();

    return AppModel.extractClipNames(data, dataStat, identifier);
  }
}
