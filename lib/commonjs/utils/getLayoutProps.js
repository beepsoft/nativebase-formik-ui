"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.omitUndefined = omitUndefined;
exports.extractInObject = extractInObject;
exports.getLayoutProps = void 0;

var _omitBy = _interopRequireDefault(require("lodash/omitBy"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _omit = _interopRequireDefault(require("lodash/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function omitUndefined(obj) {
  return (0, _omitBy.default)(obj, _isNil.default);
}

function extractInObject(parent, values) {
  return [omitUndefined((0, _pick.default)(parent, values)), omitUndefined((0, _omit.default)(parent, values))];
}

const getLayoutProps = props => {
  const layoutProps = ['m', 'margin', 'mt', 'marginTop', 'mb', 'marginBottom', 'mr', 'marginRight', 'ml', 'marginLeft', 'mx', 'marginX', 'my', 'marginY', 'position', 'right', 'left', 'bottom', 'top', 'isRequired', 'w', 'width', 'h', 'height'];
  return extractInObject(props, layoutProps);
};

exports.getLayoutProps = getLayoutProps;
//# sourceMappingURL=getLayoutProps.js.map