import MarkUp from '../models/MarkUp';
import Requests from '../models/Requests';

export default class App {
  constructor() {
    this.state = {
      url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAZiyMBKWN-3gTB_nubDKItHuK72xwKNAs&type=video&part=snippet&maxResults=4&q=',
      urlStatistics: 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAZiyMBKWN-3gTB_nubDKItHuK72xwKNAs&id=&part=snippet,statistics',
    };
  }


  async start() {
    global.console.log(this.state.url);
    const model = new Requests(this.state);
    const data = await model.getClipNames();
    const mark = await MarkUp();
    mark.render();
    global.console.log(await data);
    // const view = new AppView(data);
    // view.render();
  }
}
