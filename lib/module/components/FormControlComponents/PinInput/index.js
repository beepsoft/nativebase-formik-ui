import PinInputMain from './PinInput';
import { PinInput as NBPinInput } from 'native-base';
let PinInputTemp = PinInputMain;
PinInputTemp.Field = NBPinInput.Field; // To add typings

const PinInput = PinInputTemp;
export { PinInput };
//# sourceMappingURL=index.js.map