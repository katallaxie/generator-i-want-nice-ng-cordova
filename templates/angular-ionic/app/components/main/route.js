import View from './view.html!text';
import Menu from '../menu/view.html!text';
import { MainController } from './controller';
import { MenuController } from '../menu/controller';

function MainRoute (Router) {
  Router.route( [
    {
      name: 'main',
      config: {
        abstract: true,
        views: {
          'master': {
            template: Menu,
            controller: MenuController,
            controllerAs: '$ctrl'
          },
          'details': {
            template: View,
            controller: MainController,
            controllerAs: '$ctrl'
          }
        }
      }
    }
  ] );
}

MainRoute.$inject = ['Router'];

export default MainRoute;
export { MainRoute };
