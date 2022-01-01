"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

var _Slider = _interopRequireDefault(require("./Slider"));

var _nativeBase = require("native-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SliderTemp = _Slider.default;
SliderTemp.Thumb = _nativeBase.Slider.Thumb;
SliderTemp.Track = _nativeBase.Slider.Track;
SliderTemp.FilledTrack = _nativeBase.Slider.FilledTrack; // To add typings

const Slider = SliderTemp;
exports.Slider = Slider;
//# sourceMappingURL=index.js.map