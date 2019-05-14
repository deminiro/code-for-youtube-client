import MarkUp from '../models/MarkUp';
import Requests from '../models/Requests';
import Slider from '../models/Slider';
import AnimateSwipe from '../models/AnimateSwipe';

export default class App {
  constructor() {
    this.state = {
      url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAZiyMBKWN-3gTB_nubDKItHuK72xwKNAs&type=video&part=snippet&maxResults=15&q=',
      urlStatistics: 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAZiyMBKWN-3gTB_nubDKItHuK72xwKNAs&id=&part=snippet,statistics',
    };
  }


  async start() {
    // global.console.log(this.state.url.concat('ew'));
    const model = new Requests(this.state);
    await MarkUp();
    await Slider();
    const getClip = await model.getClipNames();
    await AnimateSwipe();


    const main = document.getElementsByTagName('main')[0];
    const submit = document.getElementById('submit');
    const query = document.getElementById('query');
    global.console.log(getClip);
    submit.addEventListener('click', () => {
      const index = this.state.url.indexOf('q=');
      this.state.url = this.state.url.slice(0, index + 2);
      main.style.display = 'block';
      this.state.url = this.state.url.concat(query.value);
      global.console.log(this.state.url);
      model.getClipNames();
      Requests.extractClipNames();
    }, false);
  }
}
