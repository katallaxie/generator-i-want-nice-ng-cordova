// imports
import View from './view.html!text';
import { AppController } from './controller';

// component
let AppComponent = {
  template: View,
  restrict: 'E',
  controller: AppController
};

// exports
export default AppComponent;
export { AppComponent };
