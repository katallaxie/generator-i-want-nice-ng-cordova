// imports
import 'ionic/js/ionic-angular';
import { Bootstrap, BootstrapResume } from './components/app/bootstrap';
import { App } from './components/app/module';
import { Main } from './components/main/module';
import { Menu } from './components/menu/module';
import { Splash } from './components/splash/module';
import { Dashboard } from './components/dashboard/module';

// importable global name of the app
const name = 'demo';

// app module
let Boot = angular.module(name, [
  App.name,
  Main.name,
  Menu.name,
  Dashboard.name,
  Splash.name
]);

// importable app module
export default Boot;
// importable name
export { name, Boot };

// defered https://docs.angularjs.org/guide/bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

// bootstraping
Bootstrap(name);
// because it is defered
BootstrapResume(name);
