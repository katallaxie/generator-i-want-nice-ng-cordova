// imports
import View from './view.html!text';
import { MenuBarController } from './controller';

// component
let MenuBarComponent = {
  template: View,
  restrict: 'E',
  controller: MenuBarController
};

// exports
export default MenuBarComponent;
export { MenuBarComponent };
