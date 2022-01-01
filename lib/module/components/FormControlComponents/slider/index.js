import SliderMain from './Slider';
import { Slider as NBSlider } from 'native-base';
let SliderTemp = SliderMain;
SliderTemp.Thumb = NBSlider.Thumb;
SliderTemp.Track = NBSlider.Track;
SliderTemp.FilledTrack = NBSlider.FilledTrack; // To add typings

const Slider = SliderTemp;
export { Slider };
//# sourceMappingURL=index.js.map