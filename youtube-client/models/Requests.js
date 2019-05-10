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
    module.exports = {
      getUsers: function qwe() {
        return arr;
      },
    };

    for (let i = 0; i < 4; i += 1) {
      const img = image[i].default.url;
      const ttl = title[i];
      const chTtl = channelTitle[i];
      const tim = time[i];
      const descr = description[i];
      arr.push({
        img, ttl, chTtl, tim, descr,
      });
    }
    global.console.log(arr);
    return arr;
  }

  async getClipNames() {
    const storage = localStorage.getItem('query');
    const url = this.state.url.concat(storage);
    const response = await fetch(url);
    // global.console.log(url);
    const data = await response.json();

    return AppModel.extractClipNames(data);
  }
}
