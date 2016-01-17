// imports
import { Config } from '../../config/router';

import { AppComponent } from './component';
import { RouterProvider } from '../../providers/router';

// consts
const name = 'app';

// module
let App = angular
  .module(name, [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ionic'
  ])
  // $router
  .config(Config)
  .provider( 'Router', RouterProvider )
  .component( name, AppComponent );

// exports
export default App;
export { App };
