import MarkUp from '../models/MarkUp';
import Requests from '../models/Requests';
import Slider from '../models/Slider';
import AnimateSwipe from '../models/AnimateSwipe';
import StylesForClipsInfo from '../models/StylesForClipsInfo';
// import NewQuery from '../models/NewQuery';

export default class App {
  constructor() {
    this.state = {
      url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAZiyMBKWN-3gTB_nubDKItHuK72xwKNAs&type=video&part=snippet&maxResults=15&q=&pageToken=',
      urlStatistics: 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAZiyMBKWN-3gTB_nubDKItHuK72xwKNAs&id=&part=snippet,statistics',
    };
  }


  async start() {
    const model = new Requests(this.state);
    await MarkUp();
    await Slider();
    await AnimateSwipe();
    await model.getClipNames();
    const main = document.getElementsByTagName('main')[0];
    const submit = document.getElementById('submit');
    const query = document.getElementById('query');
    const currentButton = document.getElementById('button-current');
    const blockOfClips = document.getElementById('components');
    let require = new Requests(this.state);
    let numberForEveryThree = 3;

    submit.addEventListener('click', () => {
      const index = this.state.url.indexOf('q=');
      this.state.url = this.state.url.slice(0, index + 2);
      main.style.display = 'block';
      this.state.url = this.state.url.concat(`${query.value}`);
      // display from first clip box
      // eslint-disable-next-line no-unused-vars
      let scrollLeft;
      blockOfClips.scrollLeft = 0;
      require = new Requests(this.state);
      require.getClipNames();
      numberForEveryThree = 3;
    });

    // UPLOAD NEW VIDEOS
    function advancedQuery() {
      if (Number(currentButton.innerText) === numberForEveryThree) {
        numberForEveryThree += 4;
        StylesForClipsInfo();
        require.getNewClipNames();
        global.console.log(require.state.url);
      }
    }
    const nextButton = document.getElementById('button-next');
    nextButton.addEventListener('click', advancedQuery);
    blockOfClips.addEventListener('mouseup', advancedQuery);
  }
}
