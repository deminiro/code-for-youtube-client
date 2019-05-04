export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipNames(data) {
    const title = data.items.map(clip => clip.snippet.title);
    const channelTitle = data.items.map(clip => clip.snippet.channelTitle);
    const time = data.items.map(clip => clip.snippet.publishedAt);
    const description = data.items.map(clip => clip.snippet.description);
    const image = data.items.map(clip => clip.snippet.thumbnails);
    const arr = [];

    for (let i = 0; i < 15; i += 1) {
      const img = image[i].default.url;
      const ttl = title[i];
      const chTtl = channelTitle[i];
      const tim = time[i];
      const descr = description[i];
      arr.push({
        img, ttl, chTtl, tim, descr,
      });
    }
    return arr;
  }

  async getClipNames() {
    const { url } = this.state;

    const responce = await fetch(url);
    const data = await responce.json();

    return AppModel.extractClipNames(data);
  }
}
