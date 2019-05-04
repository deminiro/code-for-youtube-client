import Requests from '../models/Requests';
// import QueryModel from '../models/QueryModel';

export default class App {
  constructor() {
    this.state = {
      url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAZiyMBKWN-3gTB_nubDKItHuK72xwKNAs&type=video&part=snippet&maxResults=15&q=js',
    };
  }

  async start() {
    const model = new Requests(this.state);
    const data = await model.getClipNames();
    // const view = new AppView(data);
    // const query = new QueryModel(this.query);
    // const dataQuery = await query.getClipQuery();
    global.console.log(await data);
    // global.console.log(await dataQuery);
    // view.render();
  }
}
