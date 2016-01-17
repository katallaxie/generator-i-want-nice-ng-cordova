// imports
import { MenuBarComponent } from './component';

// consts
const name = 'menubar';

// module
let MenuBar = angular
  .module( name, [] )
  .directive( name, MenuBarComponent );

// exports
export default MenuBar;
export { MenuBar };
