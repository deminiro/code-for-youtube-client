import MarkUp from '../models/MarkUp';
import Requests from '../models/Requests';
import Slider from '../models/Slider';
import AnimateSwipe from '../models/AnimateSwipe';

export default class App {
  constructor() {
    this.state = {
      url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAZiyMBKWN-3gTB_nubDKItHuK72xwKNAs&type=video&part=snippet&maxResults=12&q=',
      urlStatistics: 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAZiyMBKWN-3gTB_nubDKItHuK72xwKNAs&id=&part=snippet,statistics',
    };
  }


  async start() {
    const model = new Requests(this.state);
    await MarkUp();
    await Slider();
    await model.getClipNames();
    await AnimateSwipe();


    const main = document.getElementsByTagName('main')[0];
    const submit = document.getElementById('submit');
    const query = document.getElementById('query');
    submit.addEventListener('click', () => {
      const index = this.state.url.indexOf('q=');
      this.state.url = this.state.url.slice(0, index + 2);
      main.style.display = 'block';
      this.state.url = this.state.url.concat(query.value);

      // display from first clip box
      const slider = document.getElementById('components');
      // eslint-disable-next-line no-unused-vars
      let scrollLeft;
      slider.scrollLeft = 0;

      model.getClipNames();
      Requests.extractClipNames();
    }, false);
  }
}
