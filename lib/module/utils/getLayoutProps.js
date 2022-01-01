import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';
import pick from 'lodash/pick';
import omit from 'lodash/omit';
export function omitUndefined(obj) {
  return omitBy(obj, isNil);
}
export function extractInObject(parent, values) {
  return [omitUndefined(pick(parent, values)), omitUndefined(omit(parent, values))];
}
export const getLayoutProps = props => {
  const layoutProps = ['m', 'margin', 'mt', 'marginTop', 'mb', 'marginBottom', 'mr', 'marginRight', 'ml', 'marginLeft', 'mx', 'marginX', 'my', 'marginY', 'position', 'right', 'left', 'bottom', 'top', 'isRequired'];
  return extractInObject(props, layoutProps);
};
//# sourceMappingURL=getLayoutProps.js.map